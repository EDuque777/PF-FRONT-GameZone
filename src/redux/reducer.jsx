import * as act from "./actions"

const initialState = {
    games: [],
    cart: [],
    gameDetail: [],
    gameComingSoon: [
        {
            "id": 2390150,
            "type": 0,
            "name": "Supporter Pack 1",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 250,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/capsule_616x353.jpg?t=1686782976",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/capsule_184x69.jpg?t=1686782976",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/header.jpg?t=1686782976"
            },
            {
            "id": 1306060,
            "type": 0,
            "name": "Golf Club Architect",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 300,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/capsule_616x353.jpg?t=1685906496",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/capsule_184x69.jpg?t=1685906496",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/header.jpg?t=1685906496"
            },
            {
            "id": 1039280,
            "type": 0,
            "name": "ProtoCorgi",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 275,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/capsule_616x353.jpg?t=1685707924",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/capsule_184x69.jpg?t=1685707924",
            "windows_available": true,
            "mac_available": false,
            "linux_available": true,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/header.jpg?t=1685707924",
            "controller_support": "full"
            },
            {
            "id": 1299540,
            "type": 0,
            "name": "The Zone: Stalker Stories",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 12,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1299540/capsule_616x353.jpg?t=1685748965",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1299540/capsule_184x69.jpg?t=1685748965",
            "windows_available": true,
            "mac_available": false,
            "linux_available": true,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1299540/header.jpg?t=1685748965"
            },
            {
            "id": 671860,
            "type": 0,
            "name": "BattleBit Remastered",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 0,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/671860/capsule_616x353.jpg?t=1686829253",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/671860/capsule_184x69.jpg?t=1686829253",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/671860/header.jpg?t=1686829253"
            },
            {
            "id": 2400200,
            "type": 0,
            "name": "StrangerZ Demo",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 0,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2400200/capsule_616x353.jpg?t=1686683984",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2400200/capsule_184x69.jpg?t=1686683984",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2400200/header.jpg?t=1686683984"
            },
            {
            "id": 2119760,
            "type": 0,
            "name": "SHIRIME 2: The Genesis of Butt-Eye  - Prologue",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 0,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2119760/capsule_616x353.jpg?t=1686813206",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2119760/capsule_184x69.jpg?t=1686813206",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2119760/header.jpg?t=1686813206"
            },
            {
            "id": 2428560,
            "type": 0,
            "name": "Druidwalker Soundtrack",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 120,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2428560/capsule_616x353.jpg?t=1686158954",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2428560/capsule_184x69.jpg?t=1686158954",
            "windows_available": true,
            "mac_available": true,
            "linux_available": true,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2428560/header.jpg?t=1686158954"
            },
            {
            "id": 2231060,
            "type": 0,
            "name": "Druidwalker",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 0,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2231060/capsule_616x353.jpg?t=1686832540",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2231060/capsule_184x69.jpg?t=1686832540",
            "windows_available": true,
            "mac_available": true,
            "linux_available": true,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2231060/header.jpg?t=1686832540"
            },
            {
            "id": 2343930,
            "type": 0,
            "name": "Eyes Of War",
            "discounted": false,
            "discount_percent": 0,
            "original_price": null,
            "final_price": 45,
            "currency": "ARS",
            "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2343930/capsule_616x353.jpg?t=1686824094",
            "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2343930/capsule_184x69.jpg?t=1686824094",
            "windows_available": true,
            "mac_available": false,
            "linux_available": false,
            "streamingvideo_available": false,
            "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2343930/header.jpg?t=1686824094"
        }
    ],
    gameOffer: [
        {
        "id": 2390150,
        "type": 0,
        "name": "Supporter Pack 1",
        "discounted": false,
        "discount_percent": 0,
        "original_price": null,
        "final_price": 20,
        "currency": "ARS",
        "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/capsule_616x353.jpg?t=1686782976",
        "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/capsule_184x69.jpg?t=1686782976",
        "windows_available": true,
        "mac_available": false,
        "linux_available": false,
        "streamingvideo_available": false,
        "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/2390150/header.jpg?t=1686782976"
        },
        {
        "id": 1306060,
        "type": 0,
        "name": "Golf Club Architect",
        "discounted": false,
        "discount_percent": 0,
        "original_price": null,
        "final_price": 100,
        "currency": "ARS",
        "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/capsule_616x353.jpg?t=1685906496",
        "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/capsule_184x69.jpg?t=1685906496",
        "windows_available": true,
        "mac_available": false,
        "linux_available": false,
        "streamingvideo_available": false,
        "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1306060/header.jpg?t=1685906496"
        },
        {
        "id": 1039280,
        "type": 0,
        "name": "ProtoCorgi",
        "discounted": false,
        "discount_percent": 0,
        "original_price": null,
        "final_price": 0,
        "currency": "ARS",
        "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/capsule_616x353.jpg?t=1685707924",
        "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/capsule_184x69.jpg?t=1685707924",
        "windows_available": true,
        "mac_available": false,
        "linux_available": true,
        "streamingvideo_available": false,
        "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1039280/header.jpg?t=1685707924",
        "controller_support": "full"
}, {
    "id": 1593500,
    "type": 0,
    "name": "God of War",
    "discounted": true,
    "discount_percent": 40,
    "original_price": 849900,
    "final_price": 509940,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1650554420",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_184x69.jpg?t=1650554420",
    "windows_available": true,
    "mac_available": false,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1686848400,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420",
    "controller_support": "full"
    },
    {
    "id": 124923,
    "type": 1,
    "name": "The Witcher 3: Wild Hunt - Complete Edition",
    "discounted": true,
    "discount_percent": 70,
    "original_price": 329999,
    "final_price": 98999,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/subs/124923/capsule_616x353.jpg?t=1671055800",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/subs/124923/capsule_184x69.jpg?t=1671055800",
    "windows_available": true,
    "mac_available": false,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1687107600,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/subs/124923/header_ratio.jpg?t=1671055800",
    "controller_support": "full"
    },
    {
    "id": 1293830,
    "type": 0,
    "name": "Forza Horizon 4",
    "discounted": true,
    "discount_percent": 67,
    "original_price": 599900,
    "final_price": 197967,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1293830/capsule_616x353.jpg?t=1667326422",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1293830/capsule_184x69.jpg?t=1667326422",
    "windows_available": true,
    "mac_available": false,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1686848400,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1667326422",
    "controller_support": "full"
    },
    {
    "id": 413150,
    "type": 0,
    "name": "Stardew Valley",
    "discounted": true,
    "discount_percent": 20,
    "original_price": 17999,
    "final_price": 14399,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_184x69.jpg?t=1666917466",
    "windows_available": true,
    "mac_available": true,
    "linux_available": true,
    "streamingvideo_available": false,
    "discount_expiration": 1686848400,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1666917466",
    "controller_support": "full"
    },
    {
    "id": 1182900,
    "type": 0,
    "name": "A Plague Tale: Requiem",
    "discounted": true,
    "discount_percent": 50,
    "original_price": 699900,
    "final_price": 349950,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1182900/capsule_616x353.jpg?t=1678973757",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/1182900/capsule_184x69.jpg?t=1678973757",
    "windows_available": true,
    "mac_available": false,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1687453200,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/1182900/header.jpg?t=1678973757",
    "controller_support": "full"
    },
    {
    "id": 275850,
    "type": 0,
    "name": "No Man's Sky",
    "discounted": true,
    "discount_percent": 50,
    "original_price": 380000,
    "final_price": 190000,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/capsule_616x353_alt_assets_18.jpg?t=1686146204",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/capsule_184x69_alt_assets_18.jpg?t=1686146204",
    "windows_available": true,
    "mac_available": true,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1687194000,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_18.jpg?t=1686146204",
    "controller_support": "full"
    },
    {
    "id": 812140,
    "type": 0,
    "name": "Assassin's Creed® Odyssey",
    "discounted": true,
    "discount_percent": 80,
    "original_price": 599900,
    "final_price": 119980,
    "currency": "ARS",
    "large_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/812140/capsule_616x353.jpg?t=1670596226",
    "small_capsule_image": "https://cdn.akamai.steamstatic.com/steam/apps/812140/capsule_184x69.jpg?t=1670596226",
    "windows_available": true,
    "mac_available": false,
    "linux_available": false,
    "streamingvideo_available": false,
    "discount_expiration": 1686848400,
    "header_image": "https://cdn.akamai.steamstatic.com/steam/apps/812140/header.jpg?t=1670596226"
    }]
};

const rootReducer=(state = initialState, action) => {
    switch(action.type) {

        case act.GET_GAMES:
            return {
                ...state,
                games: action.payload
            }

        case act.GET_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }

        case act.CLEAR_DETAIL:
            return {
                ...state,
                gameDetail: null
            }

        //?casos del carrito de compra
        case act.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.payload],
            }

        case act.REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((game) => game.id !== action.payload )
            }

        case act.REMOVE_ALL_TO_CART:

        case act.CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        

        default:
            return {...state};
    }
};

export default rootReducer;