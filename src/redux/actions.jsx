import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_TO_CART"
export const REMOVE_ALL_TO_CART = "REMOVE_ALL_TO_CART"
export const CLEAR_CART = "CLEAR_CART"

export const addCart = (game) => {
    return function(dispatch){
        dispatch({
            type: ADD_TO_CART,
            payload: game,
        })
    }
}

export const removeCart = (gameId) => {
    return {
        type: REMOVE_TO_CART,
        payload: gameId,
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

