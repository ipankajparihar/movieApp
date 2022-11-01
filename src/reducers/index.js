import {combineReducers} from 'redux';
import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FORM_FAVORITES,SET_SHOW_FAVOURITES,ADD_SEARCH_RESULT,ADD_MOVIE_TO_LIST} from '../actions/index';


const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:true

};
export function movies(state=initialMoviesState,action){
    console.log('movise reducers')
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state ;


    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list : action.movies
            }

        case ADD_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie,...state.favourites]
            }

        case REMOVE_FORM_FAVORITES:

            const filteredMovie = state.favourites.filter(
                movie => movie.Title !==action.movie.Title
            );
            return{
                ...state,
                favourites:filteredMovie
            }

        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            };

        default :
        return state;
    }
};



const initialSearchState={
    result:{},
    showSearchResult:false
};

export function search(state=initialSearchState,action){

    
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult:true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                    ...state,
                    showSearchResult:false
                };
    

        default :
          return state;
    }
    
};


const initialRootState = {
    movies:initialMoviesState,
    search: initialSearchState
};

// export default function rootReducer (state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action),
        
//     }
// };

export default combineReducers({
    movies,
    search
})