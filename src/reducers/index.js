import {Add_Movies,Add_to_Favourites,Add_to_Unfavourites,Change_Tabs,Add_Search_Result,Add_Movie_To_List} from '../actions';
const initialMovieState = {
    list : [],
    favourites:[],
    showMovie:true
}
export function movieReducer(state = initialMovieState,action){
    console.log("movie reducer");
    switch(action.type){
        case Add_Movies:
            return{
                ...state,
            list:action.movies
            }
        case Add_to_Favourites:
            return {
               ...state,
               favourites :[action.movie,...state.favourites],
            }
        case Add_to_Unfavourites :
            return{
                ...state ,
                favourites :state.favourites.filter(movie => movie !== action.movie),
            }
        case Change_Tabs:
            return{
                ...state,
                showMovie:action.val
            }
        case Add_Movie_To_List:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
            default:
                return state
    }
}
const initialSearchState={
result:[],
showSearchDropdown:false 
}
export function searchReducer(state = initialSearchState,action){
    switch(action.type){
     case Add_Search_Result:
         return {
             ...state,
             result : action.movies,
             showSearchDropdown:true
         }
    case Add_Movie_To_List:
        return{
            ...state,
            showSearchDropdown:false
        }
         default:
             return state 
    }
    
}
const initialRootState = {
    movies : initialMovieState,
    search : initialSearchState
}
export default function rootReducer(state = initialRootState,action){
    console.log("root reducer");
    return {
        movies:movieReducer(state.movies,action),
        search:searchReducer(state.search,action)
    }
}