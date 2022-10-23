// {
//     type:'ADD_MOVIES'
// }

//action types
 export const ADD_MOVIES ='ADD_MOVIES';
 export const ADD_FAVOURITES ='ADD_FAVORITES';
 export const REMOVE_FORM_FAVORITES = 'REMOVE_FROM_FAVORITE'
 export const SET_SHOW_FAVOURITES ='SET_SHOW_FAVOURITES'

 //action creators
 export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
 }


 export function addFavourites(movie){
    return {
        type:ADD_FAVOURITES,
        movie
    }
 }

 export function removeFromFavorite(movie){
    return {
        type:REMOVE_FORM_FAVORITES,
        movie
    };
 }

 export function showFavourites(val){

    return{
        type:SET_SHOW_FAVOURITES,
        val
    }
 }