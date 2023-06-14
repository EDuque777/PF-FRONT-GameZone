import * as act from "./actions"

const initialState = {
    games: [],
    cart: [],
    //gameList: [],
};

const rootReducer=(state = initialState, action) => {
    switch(action.type) {


        //casos del carrito de compra
        case act.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
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