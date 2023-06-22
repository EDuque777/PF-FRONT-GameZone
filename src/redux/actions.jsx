import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_TO_CART"
export const CLEAR_CART = "CLEAR_CART"
export const CLEAR_SEARCH = "CLEAR_SEARCH"
export const GET_GAMES = "GET_GAMES"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const GET_GAMES_OFFER = "GET_GAMES_OFFER"
export const GET_GAMES_COMING_SOON = "GET_GAMES_COMING_SOON"
export const GET_GAMES_TOP_SELLERS = "GET_GAMES_TOP_SELLERS"
export const GET_GAMES_NEW_RELEASES = "GET_GAMES_NEW_RELEASES"
export const GET_BY_NAME = "GET_BY_NAME"
export const ADD_TO_WHISH_LIST = "ADD_TO_WHISH_LIST"
export const REMOVE_TO_WHISH_LIST = "REMOVE_TO_WHISH_LIST"
export const CLEAR_WHISH_LIST = "CLEAR_WHISH_LIST"

//! ARREGLAR TODAS LAS RUTAS Y REDUCER DEL RAILWAY
//? FUNCIONES DE PETICIONES
export const getGames = () => {

    return async function (dispatch) {
        try {
            const response = await axios.get(`allGames`)
            // console.log(response);
            const game = response.data
            dispatch({
                type: GET_GAMES,
                payload: game
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

export const getByName = (name) => {
    return async function(dispatch) {
        try {
            //console.log(name)
            const response = await axios.get(`nameGames?name=${name}`)
            
            dispatch({
                type: GET_BY_NAME,
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
export const clearSearch = () => {
    return function (dispatch){
        dispatch({
            type: CLEAR_SEARCH
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
        const response = await axios.get(`coming`);
        
        const games = response.data;

        // Eliminar objetos duplicados
        const uniqueGames = games.filter((game, index, self) => {
            return (
            index ===
            self.findIndex((g) => g.id === game.id)
            );
        });

        dispatch({
            type: GET_GAMES_COMING_SOON,
            payload: uniqueGames
        });
    } catch (error) {
        console.log(error.message);
    }
    };
};

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

//? FUNCIONES DEL CARRITO
export const addCart = (game) => {
    return function(dispatch){
        dispatch({
            type: ADD_TO_CART,
            payload: game,
        })
    }
}

export const removeCart = (id) => {
    //console.log(id);
    return {
        type: REMOVE_TO_CART,
        payload: id,
    }
}

export const clearCart = ()  => {
    return  {
            type:CLEAR_CART  
    }
}


//? FUNCIONES DE LA LISTA DE DESEADOS

export const addWhishList = (game) => {
    return function (dispatch) {
        //console.log(game);
        dispatch({
            type: ADD_TO_WHISH_LIST,
            payload: game
        })
    }
}

export const removeWhishList = (id) => {
    return function (dispatch) {
        dispatch({
            type: REMOVE_TO_WHISH_LIST,
            payload: id
        })
    }
}

// Action de Create User

export const postCreateUser = (data) => {
    return async function (dispatch) {
        try {
           const user = await axios.post("http://localhost:3001/crearCuenta",data)

           console.log(user.data)

        } catch (error) {
            console.log(error)
        }
    }
}

//Accion de Loguear Usuario

export const postLogin = (datos) =>{
    return async function (dispatch) {
        try {
            const userTwo = await axios.post("http://localhost:3001/iniciarSesion",datos)

            console.log(userTwo.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export const clearWhishList = () => {
     return function (dispatch) {
        dispatch({
            type: CLEAR_WHISH_LIST,
        })
     }

    }
