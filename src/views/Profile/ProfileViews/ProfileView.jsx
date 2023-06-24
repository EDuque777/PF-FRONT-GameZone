// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./ProfileView.module.css"
// import * as act from "../../../redux/actions";


// const ProfileView = (props) => { // Agrega props como parámetro

//   const dispatch = useDispatch();

//   const IDUser = useSelector((state)=>state.user)

//   useEffect(() => {
//     dispatch(act.postLogin());
//     return () => {
//       dispatch(act.CleanDetail());
//     }
//   }, [dispatch]);

//   const handleEditClick = () => {
  
    
//     console.log("Botón de editar clickeado");
//   };

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
//       <button onClick={handleEditClick}>Edit</button>
//     </div>
//   );
// };

// export default ProfileView;



//////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from "./ProfileView.module.css"
// import * as act from "../../../redux/actions";


// const ProfileView = (props) => { // Agrega props como parámetro

//   const dispatch = useDispatch();

//   const IDUser = useSelector((state)=>state.user)

//   useEffect(() => {
//     dispatch(act.postLogin());
//     return () => {
//       dispatch(act.CleanDetail());
//     }
//   }, [dispatch]);

//   const handleEditClick = () => {
    
//     dispatch(act.editName());
    
//     console.log("Botón de editar clickeado");
//   };

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
//       <button onClick={handleEditClick}>Edit</button>
//     </div>
//   );
// };

// export default ProfileView;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ProfileView.module.css";
import * as act from "../../../redux/actions";

const ProfileView = (props) => {
  const dispatch = useDispatch();

  const IDUser = useSelector((state) => state.user);

  const [editingName, setEditingName] = useState(false);
  const [editingUserName, setEditingUserName] = useState(false);
  const [editingCountry, setEditingCountry] = useState(false);
  const [editingProfileImage, setEditingProfileImage] = useState(false);

  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newProfileImage, setNewProfileImage] = useState("");

  useEffect(() => {
    dispatch(act.postLogin());
    return () => {
      dispatch(act.CleanDetail());
    };
  }, [dispatch]);

  const handleEditNameClick = () => {
    setEditingName(true);
  };

  const handleEditUserNameClick = () => {
    setEditingUserName(true);
  };

  const handleEditCountryClick = () => {
    setEditingCountry(true);
  };

  const handleEditProfileImageClick = () => {
    setEditingProfileImage(true);
  };

  const handleSaveClick = () => {
    dispatch(act.editName(IDUser?.id, newName));
    dispatch(act.editUserName(IDUser?.id, newUserName));
    // dispatch(act.editCountry(IDUser?.id, newCountry));
    // dispatch(act.editProfileImage(IDUser?.id, newProfileImage));
    setEditingName(false);
    setEditingUserName(false);
    // setEditingCountry(false);
    // setEditingProfileImage(false);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleCountryChange = (e) => {
    setNewCountry(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setNewProfileImage(e.target.value);
  };

  return (
    <div className={style.container}>
      <h1>Profile View</h1>
      <div>
        <img className={style.image} src={IDUser?.profileImage} alt="Profile" />
        <h2>
          Name:{" "}
          {editingName ? (
            <input
              type="text"
              value={newName}
              onChange={handleNameChange}
              placeholder={IDUser?.name}
            />
          ) : (
            IDUser?.name
          )}
        </h2>
        <p>
          User name:{" "}
          {editingUserName ? (
            <input
              type="text"
              value={newUserName}
              onChange={handleUserNameChange}
              placeholder={IDUser?.user_name}
            />
          ) : (
            IDUser?.user_name
          )}
        </p>
        <p>
          Country:{" "}
          {editingCountry ? (
            <input
              type="text"
              value={newCountry}
              onChange={handleCountryChange}
              placeholder={IDUser?.country}
            />
          ) : (
            IDUser?.country
          )}
        </p>
        <p>
          Profile Image:{" "}
          {editingProfileImage ? (
            <input
              type="text"
              value={newProfileImage}
              onChange={handleProfileImageChange}
              placeholder={IDUser?.profileImage}
            />
          ) : (
            IDUser?.profileImage
          )}
        </p>
        <button onClick={handleEditNameClick}>
          {editingName ? "Cancel" : "Edit Name"}
        </button>
        {editingName && (
          <button onClick={handleSaveClick} className={style.saveButton}>
            Save
          </button>
        )}
        <button onClick={handleEditUserNameClick}>
          {editingUserName ? "Cancel" : "Edit User Name"}
        </button>
        {editingUserName && (
          <button onClick={handleSaveClick} className={style.saveButton}>
            Save
          </button>
        )}
        <button onClick={handleEditCountryClick}>
          {editingCountry ? "Cancel" : "Edit Country"}
        </button>
        {editingCountry && (
          <button onClick={handleSaveClick} className={style.saveButton}>
            Save
          </button>
        )}
        <button onClick={handleEditProfileImageClick}>
          {editingProfileImage ? "Cancel" : "Edit Profile Image"}
        </button>
        {editingProfileImage && (
          <button onClick={handleSaveClick} className={style.saveButton}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileView;

