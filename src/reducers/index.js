import {ADD_MOVIES} from '../actions/index';
import {ADD_FAVOURITES} from '../actions/index';

const initialMoviesState={
    list:[],
    favourites:[]

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

        default :
        return state;
    }
}

