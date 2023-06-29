// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from './App';
// import MUIDataTable from 'mui-datatables';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BlockIcon from '@mui/icons-material/Block';

// function App() {
//   const columns = [
//     {
//       name: "Name",
//       label: "Name",
//     },
//     {
//       name: "User_name",
//       label: "User Name",
//     },
//     {
//       name: "Email",
//       label: "Email",
//     },
//     {
//       name: "Country",
//       label: "Country",
//     },
//     {
//       name: "Estado",
//       label: "Estado",
//     },
//     {
//       name: "Actions",
//       options: {
//         customBodyRenderLite: (dataIndex, rowIndex) => {
//           const rowData = data[rowIndex];
//           return (
//             <div>
//               <IconButton onClick={() => handleEdit(rowIndex)}>
//                 <EditIcon />
//               </IconButton>
//               <IconButton onClick={() => handleDelete(rowIndex)}>
//                 <DeleteIcon />
//               </IconButton>
//               <IconButton onClick={() => handleBan(rowIndex)}>
//                 <BlockIcon />
//               </IconButton>
//             </div>
//           );
//         },
//       },
//     },
//   ];

//   const data = [
//     { Name: "usuario1", User_name: "userOne", Email: "user1@gmail.com", Country: "venezuela", Estado: "false" },
//     { Name: "usuario1", User_name: "userTwo", Email: "user2@gmail.com", Country: "paraguay", Estado: "false" },
//     { Name: "usuario1", User_name: "userThere", Email: "user3@gmail.com", Country: "brasil", Estado: "false" },
//     { Name: "usuario1", User_name: "userFour", Email: "user4@gmail.com", Country: "colombia", Estado: "false" },
//     { Name: "usuario1", User_name: "userFive", Email: "user5@gmail.com", Country: "argentina", Estado: "false" },
//     { Name: "usuario1", User_name: "userSix", Email: "user6@gmail.com", Country: "mexico", Estado: "false" },
//     { Name: "usuario1", User_name: "userSeven", Email: "user7@gmail.com", Country: "chile", Estado: "false" },
//     { Name: "usuario1", User_name: "userEigth", Email: "user8@gmail.com", Country: "peru", Estado: "false" },
//   ];

//   const handleEdit = (rowIndex) => {
//     const rowData = data[rowIndex];
//     alert('You clicked on Edit: ' + rowData.Name);
//   };

//   const handleDelete = (rowIndex) => {
//     const newData = [...data];
//     const rowData = data[rowIndex];
//     newData.splice(rowIndex, 1);
//     // Actualizar el estado o enviar los datos actualizados al servidor si es necesario
//     // alert('Data deleted successfully!');
//     alert('You clicked on Delete: ' + rowData.Name);
//   };

//   const handleBan = (rowIndex) => {
//     const newData = [...data];
//     const rowData = newData[rowIndex];
//     rowData.Estado = rowData.Estado === "true" ? "false" : "true";
//     // Actualizar el estado o enviar los datos actualizados al servidor si es necesario
//     // alert('User banned/unbanned successfully!');
//     alert('You clicked on Ban: ' + rowData.Name + '. New estado: ' + rowData.Estado);
//     newData[rowIndex] = rowData;
//   };

//   const getMuiTheme = () =>
//     createTheme({
//       overrides: {
//         MUIDataTableBodyCell: {
//           root: {
//             cursor: 'pointer',
//           },
//         },
//       },
//     });

//   return (
//     <ThemeProvider theme={getMuiTheme()}>
//       <MUIDataTable
//         title="Users List"
//         data={data}
//         columns={columns}
//       />
//     </ThemeProvider>
//   );
// }

// export default App;