import React from "react";

const navBar = () =>{
    return (
<div className="flex justify-between h-14 bg-gray-dark text-white">
    <div>
        <input placeholder="search..." />
        <button>Explore</button>
    </div>
    <div>
        <button >Wishlist</button>
        <button  >Shopping cart</button>
    </div>
</div>

    )
}
export default navBar;