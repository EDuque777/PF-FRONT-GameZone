import * as act from "./actions"

const initialState = {
    games: [],
    search: [],
    total: 0,
    counter: 0,
    cart: [],
    whishList: [],
    gameDetail: null,
    gameComingSoon: null,
    gameOffer: null,
    gamesTopSellers: null,
    gamesNewReleases: null,
    gamesFiltered: null,
    gamesPlatforms: [],
    languagesGames: [],
    categoriesGames: [],
    developersGames: [],
    publishersGames: [],
    genresGames: [],


};
const rootReducer=(state = initialState, action) => {
    switch(action.type) {

//? CASOS DE PETICIONES
        case act.GET_GAMES:
            return {
                ...state,
                games: action.payload
            }
        
        case act.GET_BY_NAME:
            //console.log(action.payload)
            return {
                ...state,
                search: action.payload
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

//?CASOS DEL CARRITO
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
            const updateTotalPrice = state.total - gameRemoved.price;

            return {
                ...state,
                cart: updateGameRemoveCart,
                total: updateTotalPrice
            }

        case act.CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0
            }
        
//? CASOS DE LA LISTA DE DESEADOS
        case act.ADD_TO_WHISH_LIST:
            return {
                ...state,
                whishList: [...state.whishList, action.payload],
                counter: ++ state.counter,
            }

        case act.REMOVE_TO_WHISH_LIST:
            return{
                ...state,
                whishList: state.whishList.filter( game => game.id !== action.payload),
                counter: -- state.counter,
            }

        case act.CLEAR_WHISH_LIST:
            return {
                ...state,
                whishList: [],
                counter: 0
            }

        case act.PLATFORMS:
            return {
                ...state,
                gamesPlatforms: action.payload
            }

        case act.LANGUAGES:
            return {
                ...state,
                languagesGames: action.payload
            }

        case act.CATEGORIES:
            return {
                ...state,
                categoriesGames: action.payload
            }

        case act.DEVELOPERS:
            return {
                ...state,
                developersGames: action.payload
            }

        case act.PUBLISHERS:
            return {
                ...state,
                publishersGames: action.payload
            }

        case act.GENRES:
            return {
                ...state,
                genresGames: action.payload
            }

        default:
            return {...state};
    }
};

export default rootReducer;