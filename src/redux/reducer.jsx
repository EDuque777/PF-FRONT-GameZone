import * as act from "./actions"

const initialState = {
    games: [],
    cart: [],
    gameList: [],
};

const rootReducer=(state = initialState, action)=>{
    switch(action.type) {


        default:
            return {...state};
    }
};

export default rootReducer;