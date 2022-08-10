// {
//     type:'ADD_MOVIES'
// }

//action types
 export const ADD_MOVIES ='ADD_MOVIES';
 export const ADD_FAVOURITES ='ADD_MOVIES';

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