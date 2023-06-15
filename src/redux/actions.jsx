import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_TO_CART"
export const REMOVE_ALL_TO_CART = "REMOVE_ALL_TO_CART"
export const CLEAR_CART = "CLEAR_CART"
export const GET_GAMES = "GET_GAMES"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const GET_GAMES_OFFER = "GET_GAMES_OFFER"
export const GET_GAMES_COMING_SOON = "GET_GAMES_COMING_SOON"
export const GET_GAMES_TOP_SELLERS = "GET_GAMES_TOP_SELLERS"
export const GET_GAMES_NEW_RELEASES = "GET_GAMES_NEW_RELEASES"

//? funciones de peticiones
export const getGames = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(``)
            console.log(response);
            const games = response.data
            dispatch({
                type: GET_GAMES,
                payload: games
            })
        } catch (error) {
            console.log(error.message);            
        }
    }
}

export const getDetail = (id) => {
    return async function(dispatch) {
    try {
            const response = await axios.get(``)
            console.log(response);
            const detail = response.data
            dispatch({
                type: GET_DETAIL,
                payload: detail
            })
    } catch (error) {
        console.log(error.message);
    }}
}

export const clearDetail = () => {
    return function (dispatch){
        dispatch({
            type: CLEAR_DETAIL
        })
    }
}

export const getGamesOffer = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(``)
            dispatch({
                type: GET_GAMES_OFFER,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getGamesComingSoon = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(``)
            dispatch({
                type: GET_GAMES_COMING_SOON,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getGamesTopSellers = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(``)
            dispatch({
                type: GET_GAMES_TOP_SELLERS,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
       
    }
}

export const getGamesNewReleases = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(``)
            dispatch({
                type: GET_GAMES_NEW_RELEASES,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

//? funciones del carrito
export const addCart = (game) => {
    return function(dispatch){
        dispatch({
            type: ADD_TO_CART,
            payload: game,
        })
    }
}

export const removeCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: id,
    }
}

// export const removeCart = (gameId) => {
//     return function (dispatch){
//         dispatch({
//             type: REMOVE_TO_CART,
//             payload: gameId,
//         })
//     }
// }

export const removeAllCart = () => {
    return {
    }
}

export const clearCart = ()  => {
    return  {
            type:CLEAR_CART  
    }
}

