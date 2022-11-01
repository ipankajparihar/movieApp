// {
//     type:'ADD_MOVIES'
// }

//action types
 export const ADD_MOVIES ='ADD_MOVIES';
 export const ADD_FAVOURITES ='ADD_FAVORITES';
 export const REMOVE_FORM_FAVORITES = 'REMOVE_FROM_FAVORITE'
 export const SET_SHOW_FAVOURITES ='SET_SHOW_FAVOURITES'
 export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
 export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

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

 export function addMoviesToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie
    }
 }

 export function handleMovieSearch(movie){

    const url = `http://www.omdbapi.com/?apikey=7ff267b9&t=${movie}`;

    return function (dispatch){
    fetch(url)
      .then(response => response.json())
      .then(movie =>{
        console.log('movie',movie);

        //dispatch an action
        dispatch(addMovieSearchResult(movie));

      });

    }

   

 }

 export function addMovieSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
 }

