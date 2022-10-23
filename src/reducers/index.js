import {ADD_MOVIES,ADD_FAVOURITES,REMOVE_FORM_FAVORITES,SET_SHOW_FAVOURITES} from '../actions/index';


const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false

}
export default function movies(state=initialMoviesState,action){
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

        default :
        return state;
    }
}

