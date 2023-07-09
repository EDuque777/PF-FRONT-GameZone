import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Modal from '@mui/material/Modal';
import Swal from 'sweetalert2';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import MUIDataTable from 'mui-datatables';
import * as act from '../../../redux/actions';
import { Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import countries from '../../Form/countries';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        width: 400,
        '& h2': {
            textAlign: 'center',
            marginBottom: theme.spacing(4),
            progressText: {
                marginTop: theme.spacing(2),
            },
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center', // Ajusta la alineación horizontal
        alignItems: 'center', // Ajusta la alineación vertical
        position: 'absolute', // Posiciona el contenedor de forma absoluta
        top: '50%', // Ajusta la posición vertical en el centro
        left: '50%', // Ajusta la posición horizontal en el centro
        transform: 'translate(-50%, -50%)', // Centra el contenedor
        width: '100%', // Ajusta el ancho al 100% del contenedor padre
        height: '100vh', // Ajusta la altura al 100% del viewport
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo opcional
        flexDirection: 'column',
    },
    progressText: {
        marginTop: theme.spacing(2),
        color: 'white', // Cambia el color del texto del porcentaje si es necesario
        fontSize: '40px'
    },
}));

function UserList() {
    const classes = useStyles();
    const users = useSelector((state) => state.allusers);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [editedUser, setEditedUser] = useState(null);

    const muiTableRef = useRef();

    useEffect(() => {
        dispatch(act.getUsers());
    }, [dispatch]);
    console.log(users);

    const Dashboard = () => {
        const [isLoading, setIsLoading] = useState(true);
        const [progress, setProgress] = useState(0);
        const timer = useRef(null);

        useEffect(() => {
            timer.current = setInterval(() => {
                setProgress((prevProgress) =>
                    prevProgress >= 100 ? 0 : prevProgress + 10
                );
            }, 500);

            setTimeout(() => {
                setIsLoading(false);
                clearInterval(timer.current);
            }, 5000);

            return () => {
                clearInterval(timer.current);
            };
        }, []);




        const handleEdit = (rowIndex) => {
            const { page, rowsPerPage } = muiTableRef.current.state;
            const dataIndex = rowIndex % rowsPerPage;
            const userIndex = dataIndex + page * rowsPerPage;
            const selectedUser = users[userIndex];
            setEditedUser({
                ...selectedUser,
                country: selectedUser.country,
            });

            Swal.fire({
                title: 'Do you want to edit ' + selectedUser.name + '?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    setOpenModal(true);
                }
            });
        };

        const handleDelete = async (rowIndex) => {
            const { page, rowsPerPage } = muiTableRef.current.state;
            const dataIndex = rowIndex % rowsPerPage;
            const userIndex = dataIndex + page * rowsPerPage;
            const deletedUser = users[userIndex];

            try {
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: `You are about to delete the user ${deletedUser.name}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel',
                    reverseButtons: true,
                });

                if (result.isConfirmed) {
                    // El usuario ha confirmado la eliminación
                    // Eliminar el usuario de la base de datos utilizando la acción `deleteUser`
                    await dispatch(act.deleteUser(deletedUser.id));

                    Swal.fire('User Deleted: ' + deletedUser.name).then(() => {
                        // Realizar cualquier acción adicional después de hacer clic en "OK" en el Swal alert
                        // Por ejemplo, redireccionar a otra página o realizar alguna acción específica
                        window.location.reload();
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // El usuario ha cancelado la eliminación
                    Swal.fire('Deletion canceled', '', 'info');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                // Manejar el error de eliminación del usuario
            }
        };

        const handleBan = async (rowIndex) => {
            const { page, rowsPerPage } = muiTableRef.current.state;
            const dataIndex = rowIndex % rowsPerPage;
            const userIndex = dataIndex + page * rowsPerPage;
            const bannedUser = users[userIndex];
            const newData = [...users];
            const rowData = newData[userIndex];
            rowData.ban = !rowData.ban;
            newData[userIndex] = rowData;

            const updatedUsers = [...users];
            updatedUsers[userIndex].ban = rowData.ban;
            dispatch({ type: 'SET_USERS', payload: updatedUsers });

            const confirmed = await Swal.fire({
                title: 'Are you sure?',
                text: 'Do you want to ban ' + bannedUser.name + '?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                reverseButtons: true,
            });

            if (confirmed.isConfirmed) {
                try {
                    await dispatch(act.banUser(bannedUser.id, rowData.ban));

                    Swal.fire('Updating Status ' + bannedUser.name).then(() => {
                        window.location.reload();
                    });
                } catch (error) {
                    console.error('Error when banning the user:', error);
                }
            } else {
            }
        };

        const [openInfoModal, setOpenInfoModal] = useState(false);

        const handleInfo = (rowIndex) => {
            const { page, rowsPerPage } = muiTableRef.current.state;
            const dataIndex = rowIndex % rowsPerPage;
            const userIndex = dataIndex + page * rowsPerPage;
            const selectedUser = users[userIndex];
            setEditedUser(selectedUser);
            setOpenInfoModal(true);
        };

        const getMuiTheme = () =>
            createTheme({
                overrides: {
                    MUIDataTableBodyCell: {
                        root: {
                            cursor: 'pointer',
                        },
                    },
                },
            });

        const handleSave = () => {
            if (!editedUser) {
                return;
            }

            console.log('Edited user:', editedUser);
            dispatch(act.editUser(editedUser.id, editedUser));

            setOpenModal(false);

            Swal.fire({
                title: 'Edit Modified',
                text: 'The user has been successfully edited.',
                icon: 'success',
            });
        };

        return (
            <ThemeProvider theme={getMuiTheme()}>
                {isLoading ? (
                    <div className={classes.buttonContainer}>
                        <CircularProgress size={200} value={progress} style={{ color: 'red' }} /> {/* Ajusta el tamaño deseado */}
                        <Typography variant="h6" className={classes.progressText}>{`${progress}%`}</Typography>
                    </div>
                ) : (
                    <MUIDataTable
                        ref={muiTableRef}
                        title='Users List'
                        data={users}
                        columns={[
                            { name: 'id', label: 'Id' },
                            { name: 'name', label: 'Name' },
                            { name: 'user_name', label: 'UserName' },
                            { name: 'email', label: 'Email' },
                            { name: 'country', label: 'Country' },
                            {
                                name: 'ban',
                                label: 'Status',
                                options: {
                                    filter: true,
                                    filterOptions: {
                                        names: ['Active', 'Banned'],
                                    },
                                    customBodyRenderLite: (dataIndex) =>
                                        users[dataIndex].ban ? 'Banned' : 'Active',
                                },
                            },

                            {
                                name: 'ACTIONS',
                                options: {
                                    filter: false,
                                    sort: false,
                                    customBodyRenderLite: (dataIndex, rowIndex) => (
                                        <div>
                                            <IconButton onClick={() => handleEdit(rowIndex)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(rowIndex)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleBan(rowIndex)}>
                                                <BlockIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleInfo(rowIndex)}>
                                                <InfoIcon />
                                            </IconButton>
                                        </div>
                                    ),
                                },
                            },
                        ]}
                    />
                )}
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    className={classes.modal}
                >
                    <div className={classes.modalContent}>
                        <h1>Edit User</h1>
                        {editedUser && (
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <label>
                                            <strong>Name: </strong>
                                        </label>
                                        <input
                                            type="text"
                                            value={editedUser.name}
                                            onChange={(e) =>
                                                setEditedUser({ ...editedUser, name: e.target.value })
                                            }
                                            style={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label>
                                            <strong>UserName: </strong>
                                        </label>
                                        <input
                                            type="text"
                                            value={editedUser.user_name}
                                            onChange={(e) =>
                                                setEditedUser({
                                                    ...editedUser,
                                                    user_name: e.target.value,
                                                })
                                            }
                                            style={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <label>
                                            <strong>Email:</strong>
                                        </label>
                                        <input
                                            type="text"
                                            value={editedUser.email}
                                            onChange={(e) =>
                                                setEditedUser({ ...editedUser, email: e.target.value })
                                            }
                                            style={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel>
                                            <strong> Select a Country:</strong>
                                        </InputLabel>
                                        <Select
                                            value={editedUser.country}
                                            onChange={(e) =>
                                                setEditedUser({
                                                    ...editedUser,
                                                    country: e.target.value,
                                                })
                                            }
                                            style={{ width: '100%' }}
                                        >
                                            {countries.map((country) => (
                                                <MenuItem key={country.id} value={country.label}>
                                                    {country.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => setOpenModal(false)}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSave}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Guardar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </div>
                </Modal>
                <Modal
                    open={openInfoModal}
                    onClose={() => setOpenInfoModal(false)}
                    className={classes.modal}
                >
                    <div className={classes.modalContent}>
                        <h1>User Information</h1>
                        {editedUser && (
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <strong>ID: </strong>
                                            {editedUser.id}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <strong>Name: </strong>
                                            {editedUser.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <strong>UserName: </strong>
                                            {editedUser.user_name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <strong>Email: </strong>
                                            {editedUser.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            <strong>Country: </strong>
                                            {editedUser.country}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => setOpenInfoModal(false)}
                                        >
                                            Cerrar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </div>
                </Modal>
            </ThemeProvider>
        );

    };

    return <Dashboard />;
}

export default UserList;