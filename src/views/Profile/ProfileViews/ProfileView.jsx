// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./ProfileView.module.css"


// const ProfileView = (props) => { // Agrega props como parámetro

  
//   const IDUser = useSelector((state)=>state.user)

//   console.log("esteeee", IDUser);


//   return (
//     <div className={style.container}>
//       <h1>Profile View</h1>
//       <div>
//         <img className={style.image} src={IDUser?.profileImage} alt="Profile" />
//         <h2>Name: {IDUser?.name}</h2>
//         <p>User name: {IDUser?.user_name}</p>
//         <p>Address: {IDUser?.address}</p>
//         <p>Email: {IDUser?.email}</p>
//         <p>Age: {IDUser?.age}</p>
//         <p>Phone: {IDUser?.phone}</p> 
//         <p>Country: {IDUser?.country}</p>
//       </div>
//     </div>
//   );
// };

// export default ProfileView;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ProfileView.module.css"


const ProfileView = (props) => { // Agrega props como parámetro

  const IDUser = useSelector((state)=>state.user)

  const dispatch = useDispatch();

  const handleEditClick = () => {
  
    
    console.log("Botón de editar clickeado");
  };

  console.log("esteeee", IDUser);


  return (
    <div className={style.container}>
      <h1>Profile View</h1>
      <div>
        <img className={style.image} src={IDUser?.profileImage} alt="Profile" />
        <h2>Name: {IDUser?.name}</h2>
        <p>User name: {IDUser?.user_name}</p>
        <p>Address: {IDUser?.address}</p>
        <p>Email: {IDUser?.email}</p>
        <p>Age: {IDUser?.age}</p>
        <p>Phone: {IDUser?.phone}</p> 
        <p>Country: {IDUser?.country}</p>
      </div>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default ProfileView;
