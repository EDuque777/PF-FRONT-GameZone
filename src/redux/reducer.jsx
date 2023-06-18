import * as act from "./actions"

const initialState = {
    games: [],
    total: 0,
    cart: [],
    gameDetail: null,
    gameComingSoon: null,
    gameOffer: null,
    gamesTopSellers: null,
    gamesNewReleases: null,
    gamesFiltered: [],
    gamesNameDb:[]

};
const rootReducer=(state = initialState, action) => {
    switch(action.type) {

        case act.GET_GAMES:
            return {
                ...state,
                games: action.payload
            }

        case act.GET_DETAIL:
            console.log(action.payload);
            return {
                ...state,
                gameDetail: action.payload
            }

        case act.CLEAR_DETAIL:
            return {
                ...state,
                gameDetail: null
            }

        case act.GET_GAMES_OFFER:
            return {
                ...state,
                gameOffer: action.payload
            }

        case act.GET_GAMES_COMING_SOON:
            return {
                ...state,
                gameComingSoon: action.payload
            }
        
        case act.GET_GAMES_NEW_RELEASES:
            return {
                ...state,
                gamesNewReleases: action.payload
            }

        case act.GET_GAMES_TOP_SELLERS:
            return {
                ...state,
                gamesTopSellers: action.payload
            }

        //?casos del carrito de compra
        case act.ADD_TO_CART:
            const addGame = action.payload
            const updateCart = [...state.cart, addGame]
            const updatePrice = state.total + addGame.price

            return {
                ...state,
                cart: updateCart,
                total: updatePrice
            }

        case act.REMOVE_TO_CART:
            const removeGameId = action.payload
            const updateGameRemoveCart = state.cart.filter((game) => game.id !== removeGameId)
            const gameRemoved = state.cart.find(game => game.id === removeGameId)
            const updateTotalPrice = state.total - gameRemoved.price

            return {
                ...state,
                cart: updateGameRemoveCart,
                total: updateTotalPrice
            }

        // case act.REMOVE_ALL_TO_CART:

        case act.CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }

            case act.FILTER_DB:
                const allGamesFilteredDb = state.games.filter(game => {
                  if (action.payload === "allGames") {
                    return true; 
                  } else {
                    return game.includes(action.payload) 
                  }
                });
                return {
                  ...state,
                  gamesFiltered: allGamesFilteredDb
            };
            
            case act.GAMES_NAME:
                return {
                    ...state,
                    gamesNameDb: action.payload
                }

        default:
            return {...state};
    }
};

export default rootReducer;