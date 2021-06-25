import React from 'react';
import '../App.css';
import {data} from '../data';
import NavbarWrapper from './Navbar';
import MovieCard from './movieCard';
import {addMovies,addFavourites,addUnfavourites,changeTabs} from '../actions';
import {connect} from 'react-redux' ;
class App extends React.Component{
  componentDidMount=()=>{
     const {dispatch} = this.props ;
     dispatch(addMovies(data));
  }
  addFavourite=(movie)=>{
    const {dispatch} = this.props ;
    dispatch(addFavourites(movie));
  }
  isFavourite=(movie)=>{
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index === -1){
      return false ;
    }
    else{
      return true ;
    }
  }
  removeFavourite=(movie)=>{
    const {dispatch} = this.props ;
    dispatch(addUnfavourites(movie));
  }
  onChangeTab=(val)=>{
    const {dispatch} = this.props ;
    dispatch(changeTabs(val));
  }
  render(){
    const {movies} = this.props;
    const {list,showMovie,favourites} = movies ;
    const displayMovies = showMovie ? list : favourites ;
    return(
      <div className="App">
     <NavbarWrapper/>
     <div className="main">
       <div className="tabs">
         <div className={`tab ${showMovie ? 'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>Movie</div>
         <div className={`tab ${showMovie ? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Favourites</div>
       </div>
     </div>
     <div className="list">
       {displayMovies.map((movie,index)=>{
         return <MovieCard movie={movie} key={`movie-${index}`} addFavourite = {this.addFavourite} isFavourite={this.isFavourite} removeFavourite={this.removeFavourite}/>
       })}
     </div>
    </div>
    )
  }
}
// function AppWrapper(){
//   return (
//     <StoreContext.Consumer>
//       {(store)=>{
//           return <App store ={store}/>
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }
// function withHoverOver(Component){
//   class WithHover extends React.Component{
//     constructor(){
//       this.state={
//         hovering:false 
//       }
//     }
//     mouseOver = ()=>{
//       this.setState({hovering:true});
//     }
//     mouseOut = ()=>{
//       this.setState({hovering:false});
//     }
//     render(){
//       return(
//         <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
//           <Component hovering={this.state.hovering}/>
//         </div>
//       )
//     }
//   }
// } 
function mapStatetoProps({movies}){
  return {
    movies  
  }
}
const connectAppComponent = connect(mapStatetoProps)(App);
export default connectAppComponent;
