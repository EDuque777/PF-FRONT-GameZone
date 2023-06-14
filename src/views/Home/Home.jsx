import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel"


const Home = () => {
    return(
        <div className="bg-gray-light">
                <NavBar />
                <h1 className="text-gray-letters">HOME</h1>
                <Carousel />
        </div>
        
    );
}

export default Home;