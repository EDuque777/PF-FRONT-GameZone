// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userProfile } from "../../../redux/actions";



// const ProfileView = (props) => {
//   const dispatch = useDispatch();
//   const user= useSelector((state) => state.userProfile)
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const id = props.match.id;
//     setLoading(true);
//     dispatch(userProfile(id))
//       .then(() => {
//         setLoading(false);
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//     }, []);

//   // if (!userProfile) {
//   //   return <div>Loading...</div>;
//   // }

//   console.log(userProfile);


//   return (
//     <div>
//       <h1>Profile View</h1>
//       <div>
//         {/* <img src={userProfile.profileImage} alt="Profile" /> */}
//         <h2>Name: {userProfile.name}</h2>
//         {/* <p>User name: {userProfile.user_name}</p>
//         <p>Address: {userProfile.address}</p>
//         <p>Email: {userProfile.email}</p>
//         <p>Age: {userProfile.age}</p>
//         <p>Phone: {userProfile.phone}</p> 
//         <p>Country: {userProfile.country}</p> */}
//       </div>
//     </div>
//   );
// };

// export default ProfileView;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userProfile } from "../../../redux/actions";
import * as act from "../../../redux/actions";

const ProfileView = (props) => { // Agrega props como parámetro
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile)
  console.log(user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match?.params?.id; // Obtén el valor de props.match.params.id
    console.log("ID:", id);
    setLoading(true);
    dispatch(act.userProfile(id))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);



  // if (!userProfile) {
  //   return <div>Loading...</div>;
  // }

  console.log(user);

  return (
    <div>
      <h1>Profile View</h1>
      <div>
        {/* <img src={userProfile.profileImage} alt="Profile" /> */}
        <h2>Name: {act.userProfile.name}</h2>
        <p>User name: {act.userProfile.user_name}</p>
        <p>Address: {act.userProfile.address}</p>
        <p>Email: {act.userProfile.email}</p>
        <p>Age: {act.userProfile.age}</p>
        <p>Phone: {act.userProfile.phone}</p> 
        <p>Country: {act.userProfile.country}</p>
      </div>
    </div>
  );
};

export default ProfileView;
