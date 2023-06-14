import React from "react";

const navBar = () =>{
    return (
<div className="flex justify-between h-14 bg-gray-dark text-white">
    <div>
        <input className="rounded-xl text-lg bg-gray-med px-2 h-7 mt-3 ml-14" placeholder="search..." />
        <button className="text-gray-letters text-lg px-8 py-3 mr-14 cursor-pointer">Explore</button>
    </div>
    <div>
        <button className="text-gray-letters text-lg px-8 py-3 ml-14 cursor-pointer">Wishlist</button>
        <button className="text-gray-letters text-lg px-8 py-3 mr-14 cursor-pointer" >Shopping cart</button>
    </div>
</div>

    )
}
export default navBar;