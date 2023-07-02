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
  const [editedName, setEditedName] = useState('');
  const [editedUserName, setEditedUserName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedCountry, setEditedCountry] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  const muiTableRef = useRef();

  const selectedUser = users.find((user) => user.name === editedName);

  useEffect(() => {
    dispatch(act.getUsers());
    setEditedName('');
    setEditedUserName('');
    setEditedEmail('');
    setEditedCountry('');
    setEditedStatus('');
  }, []);

  const handleEdit = (rowIndex) => {
    const { page, rowsPerPage } = muiTableRef.current.state;
    const dataIndex = rowIndex % rowsPerPage;
    const userIndex = dataIndex + page * rowsPerPage;
    const rowData = users[userIndex];
    setOpenModal(true);
    setEditedName(rowData.name);
    setEditedUserName(rowData.user_name);
    setEditedEmail(rowData.email);
    setEditedCountry(rowData.country);
    setEditedStatus(rowData.ban);
  };

  const handleSave = () => {
    // Aquí puedes enviar los datos actualizados del usuario al servidor
    // y realizar las acciones necesarias, como guardar los cambios en la base de datos.
    // Por simplicidad, aquí solo mostraremos los datos en la consola.

    console.log('Usuario editado:', selectedUser);
    console.log('Nuevo nombre:', editedName);

    // Cerrar la ventana modal
    setOpenModal(false);
  };

  const handleDelete = (rowIndex) => {
    const newData = [...users];
    const rowData = users[rowIndex];
    newData.splice(rowIndex, 1);
    setOpenModal(false);
    Swal.fire('You clicked on Delete: ' + rowData.name);
  };

  const handleBan = (rowIndex) => {
    const newData = [...users];
    const rowData = newData[rowIndex];
    rowData.Estado = rowData.Estado === 'true' ? 'false' : 'true';
    setOpenModal(false);
    Swal.fire('You clicked on Ban: ' + rowData.name + '. New estado: ' + rowData.Estado);
    newData[rowIndex] = rowData;
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

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        ref={muiTableRef}
        title="Users List"
        data={users}
        columns={[
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
                  <IconButton onClick={() => handleBan(rowIndex)}>
                    <BlockIcon />
                  </IconButton>
                </div>
              ),
            },
          },
        ]}
      />

      <Modal open={openModal} onClose={() => setOpenModal(false)} className={classes.modal}>
        <div className={classes.modalContent}>
          <h2>Editar Usuario</h2>
          {selectedUser && (
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>
                    <strong>Name: </strong>
                  </label>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>UserName: </strong>
                  </label>
                  <input
                    type="text"
                    value={editedUserName}
                    onChange={(e) => setEditedUserName(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>Country:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedCountry}
                    onChange={(e) => setEditedCountry(e.target.value)}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>
                    <strong>Status:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value)}
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




