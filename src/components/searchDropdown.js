import React from 'react';
import {getMovie} from '../actions';
import {connect} from 'react-redux' ;
class Dropdown extends React.Component{
    addOnClick=(movie)=>{
     this.props.dispatch(getMovie(movie));
    }
    render(){
        const {movie} = this.props ;
        return(
            <div className="search-result">
                  <img src={movie.Poster} alt="search-pic"/>
                  <div className="movie-info">
                   <span>{movie.Title}</span>
                   <button onClick={()=>this.addOnClick(movie)}>Add to Movies</button>
                  </div>
                </div>
      )
    }
}
const mapStatetoProps = ()=>{
  return {}
}
const DropdownWrapper = connect(mapStatetoProps)(Dropdown);

export default DropdownWrapper 