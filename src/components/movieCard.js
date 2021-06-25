import React from 'react';
class MovieCard extends React.Component{
    render(){
        const {movie,addFavourite,isFavourite,removeFavourite} = this.props ;
        return(
          <div className="movie-card">
            <div className="left">
                <img alt="movie-poster" src={movie.Poster}/>
            </div>
            <div className="right">
              <div className="title">{movie.Title}</div>
              <div className="plot">{movie.Plot}</div>
              <div className="footer">
              <div className="rating">{movie.imdbRating}</div>
               {isFavourite(movie)?
                <button className="unfavourite-btn" onClick={()=>removeFavourite(movie)}>Unfavourite</button>:
                <button className="favourite-btn" onClick={()=>addFavourite(movie)}>Favourite</button>
               }
              </div>
            </div>
          </div>
        )
    }
}
export default MovieCard ;