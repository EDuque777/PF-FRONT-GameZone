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
import MUIDataTable from 'mui-datatables';
import * as act from '../../../redux/actions';

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
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(4),
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

  const handleEdit = (rowIndex) => {
    const { page, rowsPerPage } = muiTableRef.current.state;
    const dataIndex = rowIndex % rowsPerPage;
    const userIndex = dataIndex + page * rowsPerPage;
    const selectedUser = users[userIndex];
    setEditedUser(selectedUser);
    setOpenModal(true);
  };

  const handleSave = () => {
    if (!editedUser) {
      return;
    }
    console.log('Usuario editado:', editedUser);
    dispatch(act.editUser(editedUser.id, editedUser));
  
    // Cerrar la ventana modal
    setOpenModal(false);
  };
  
  const handleDelete = async (rowIndex) => {
    const { page, rowsPerPage } = muiTableRef.current.state;
    const dataIndex = rowIndex % rowsPerPage;
    const userIndex = dataIndex + page * rowsPerPage;
    const deletedUser = users[userIndex];
  
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: `Estás a punto de eliminar al usuario ${deletedUser.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      });
  
      if (result.isConfirmed) {
        // El usuario ha confirmado la eliminación
        // Eliminar el usuario de la base de datos utilizando la acción `deleteUser`
        await dispatch(act.deleteUser(deletedUser.id));
  
        Swal.fire('Usuario eliminado: ' + deletedUser.name).then(() => {
          // Realizar cualquier acción adicional después de hacer clic en "OK" en el Swal alert
          // Por ejemplo, redireccionar a otra página o realizar alguna acción específica
          window.location.reload();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario ha cancelado la eliminación
        Swal.fire('Eliminación cancelada', '', 'info');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      // Manejar el error de eliminación del usuario
    }
  };
  
  
  
  
  
  
  
  

//   const handleBan = (rowIndex) => {
//     const { page, rowsPerPage } = muiTableRef.current.state;
//     const dataIndex = rowIndex % rowsPerPage;
//     const userIndex = dataIndex + page * rowsPerPage;
//     const bannedUser = users[userIndex];
//     const newData = [...users];
//     const rowData = newData[userIndex];
//     rowData.ban = rowData.ban === 'true' ? 'false' : 'true';
//     newData[userIndex] = rowData;
//     dispatch(act.banUser(bannedUser.id, rowData.ban));
//     setOpenModal(false);
//     Swal.fire('You clicked on Ban: ' + bannedUser.name + '. New estado: ' + rowData.ban);
//   };

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

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        ref={muiTableRef}
        title="Users List"
        data={users}
        columns={[
          { name: 'id', label: 'Id' },
          { name: 'name', label: 'Name' },
          { name: 'user_name', label: 'UserName' },
          { name: 'email', label: 'Email' },
          { name: 'country', label: 'Country' },
          { name: 'ban', label: 'Status' },
          {
            name: 'Actions',
            options: {
              customBodyRenderLite: (dataIndex, rowIndex) => (
                <div>
                  <IconButton onClick={() => handleEdit(rowIndex)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(rowIndex)}>
                    <DeleteIcon />
                  </IconButton>
                  {/* <IconButton onClick={() => handleBan(rowIndex)}>
                    <BlockIcon />
                  </IconButton> */}
                </div>
              ),
            },
          },
        ]}
      />

      <Modal open={openModal} onClose={() => setOpenModal(false)} className={classes.modal}>
        <div className={classes.modalContent}>
          <h2>Editar Usuario</h2>
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
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
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
                    onChange={(e) => setEditedUser({ ...editedUser, user_name: e.target.value })}
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
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>Country:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedUser.country}
                    onChange={(e) => setEditedUser({ ...editedUser, country: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>Status:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedUser.ban}
                    onChange={(e) => setEditedUser({ ...editedUser, ban: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} className={classes.buttonContainer}>
                  <Button variant="contained" color="secondary" onClick={() => setOpenModal(false)}>
                    Cancelar
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleSave} style={{ marginLeft: '10px' }}>
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default UserList;




