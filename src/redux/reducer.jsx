import Swal from "sweetalert2";
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

    createAccount : [],
    user : null,

    orderCreated: false,
    error: null,
    gamesPlatforms: [],
    languagesGames: [],
    categoriesGames: [],
    developersGames: [],
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
        case act.CLEAR_SEARCH:
            return {
                ...state,
                search: []
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
            const existingGame = state.cart.find(game => game.id === addGame.id)
            if (existingGame) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'the game is already in the cart',
                    showConfirmButton: false,
                    timer: 2000
                   })
                return state; 
            }
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Game added successfully",
                showConfirmButton: false,
                timer: 2000
            }) 
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

        case act.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderCreated: true,
                error: null
            }

        case act.CREATE_ORDER_FAILURE:
            return {
                ...state,
                orderCreated: false,
                error: action.payload
            }
        
//? CASOS DE LA LISTA DE DESEADOS
        case act.ADD_TO_WHISH_LIST:
            const addList = action.payload
            const gameInWhishList = state.whishList.find(game => game.id === addList.id);
            if (gameInWhishList) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'the game is already in the list',
                showConfirmButton: false,
                timer: 2000
            });
            return state;
            }   
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Game added successfully",
                showConfirmButton: false,
                timer: 2000
            })
            return {
                ...state,
                whishList: [...state.whishList, addList],
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
// CASOS DEL USUARIO 
        case act.CREATE_USER: 
            return {
                ...state,
                createAccount : action.payload
            }
        case act.LOGIN_USER:
            return {
                ...state,
                user : action.payload
            }
        case act.LOGOUT_USER:{
            return{
                ...state,
                user : null
            }
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

        case act.GENRES:
            return {
                ...state,
                genresGames: action.payload
            }


        case act.CLEANDETAIL:
            return {
                ...state,
                user: null,
            };

            case act.EDITNAME:
                return {
                  ...state,
                  user: {
                    ...state.user,
                    name: action.payload.name,
                  },
                };

            case act.EDITUSERNAME:
                return {
                    ...state,
                    user: {
                    ...state.user,
                    user_name: action.payload.user_name,
                      },
                    };

            case act.EDITCOUNTRY:
                return {
                    ...state,
                    user: {
                    ...state.user,
                    country: action.payload.country,
                        },
                    };
            //  case act.EDITPROFILEIMAGE:
            //     return {
            //         ...state,
            //         user: {
            //         ...state.user,
            //         profileImage: action.payload.profileImage,
            //           },
            //         };
            
            
        default:
            return {...state};
    }
};

export default rootReducer;