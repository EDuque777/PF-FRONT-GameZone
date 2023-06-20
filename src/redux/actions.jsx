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
export const FILTER_DB = "FILTER_DB"
export const ORDER = "ORDER"
export const GAMES_NAME = "GAMES_NAME"
export const PLATFORMS = "PLATFORMS"

//! ARREGLAR TODAS LAS RUTAS Y REDUCER DEL RAILWAY
//? funciones de peticiones
export const getGames = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`allGames`)
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

export const gameDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`search/${id}`)
            dispatch({
                type: GET_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
        
    }
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
            const response = await axios.get(`specials`)
            //console.log(response);
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
            const response = await axios.get(`coming`)
            //console.log(response);
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
            const response = await axios.get(`sellers`)
            //console.log(response);
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
            const response = await axios.get(`releases`)
            //console.log(response);
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

// export const removeAllCart = () => {
//     return {
//         type: REMOVE_ALL_TO_CART,
//     }
// }

export const clearCart = ()  => {
    return  {
            type:CLEAR_CART  
    }
}

export const filterGamesDb = (value) => {
    return {type: FILTER_DB, payload: value}
}

export const orderGamesDb = (value) => {
    return {type: ORDER, payload: value}
}

export const gamesName = (name) => {
    const endpoint = `nameGames?name=${name}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: GAMES_NAME,
            payload: data
        })
    }
}

export const platformAll = () => {
    const endpoint = `/platformGames`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        return dispatch({
            type: PLATFORMS,
            payload: data
        })
    }
}


