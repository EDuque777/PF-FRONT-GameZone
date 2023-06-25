import React from 'react'
import style from "./MyGames.module.css"

const MyGames = () => {
    
    const dataUser =  JSON.parse(localStorage.getItem("user"));

    console.log(dataUser);

    return (
        <div className='Container'>
            <h2>My Games:</h2>
            <div className='VistaJuegos'>
                
            </div>
        </div>
    )}

export default MyGames