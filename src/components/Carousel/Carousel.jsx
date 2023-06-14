import React from "react";

const carousel = ()=>{
    const slides = [
        {url: 'https://cdn.akamai.steamstatic.com/steam/apps/412020/capsule_616x353.jpg?t=1669390585'},
        {url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1304930/capsule_616x353.jpg?t=1684452998'},
        {url: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg?t=1683229008'},
        {url: 'https://cdn.akamai.steamstatic.com/steam/apps/1364780/capsule_616x353.jpg?t=1685680525'}
    ]
return(
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
        <div style={{backgroundImage: `url(${slides[1].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"> </div>

    </div>
)
}
export default carousel;