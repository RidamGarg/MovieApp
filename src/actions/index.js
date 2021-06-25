export const Add_Movies = 'Add_Movies';
export const Add_to_Favourites = 'Add_to_Favourites';
export const Add_to_Unfavourites = 'Add_to_Unfavourites';
export const Change_Tabs = 'Change_Tabs';
export const Add_Search_Result = 'Add_Search_Result';
export const Add_Movie_To_List = 'Add_Movie_To_List'; 
export  function addMovies (movies) {
return {
type:Add_Movies,
movies
}
}
export function addFavourites(movie){
    return {
        type:Add_to_Favourites,
        movie
    }
}
export function addUnfavourites(movie){
    return {
        type:Add_to_Unfavourites ,
        movie 
    }
}
export function changeTabs(val){
    return {
        type : Change_Tabs,
        val
    }
}
export function addMovieToList(movie){
    return {
       type : Add_Movie_To_List,
       movie
    }
}
export function getMovie(result){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=1e3ddfa3&t=${result.Title}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            dispatch(addMovieToList(movie))
        })
    }
}
export function searchResult(movie){
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=1e3ddfa3&s=${movie}`;
    return function(dispatch){
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        const movies = data.Search
        dispatch({type : Add_Search_Result,movies})
    })
    }
}