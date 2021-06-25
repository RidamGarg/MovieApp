import React from 'react';
import {searchResult} from '../actions';
import Dropdown from './searchDropdown';
import {connect} from 'react-redux' ;
class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            reqMovie : ''
        }
    }
    handleSearch = ()=>{
         const{reqMovie} = this.state ;
        this.props.dispatch(searchResult(reqMovie));
    }
    handleChange =(e)=>{
        this.setState({
            reqMovie:e.target.value 
        })
    }
    render(){
        const {result,showSearchDropdown} = this.props.search;
        return(
           <div className="nav">
             <div className="search-container">
                 <input onChange={this.handleChange}/>
                 <button id="search-btn" onClick ={this.handleSearch}>Search</button>
             </div>
             <div className={`${showSearchDropdown?'search-results':''}`}>
             {showSearchDropdown && 
                 result.map(movie=>{
                     return <Dropdown movie={movie} key={movie.imdbID}/>
                 })
             }
             </div>
           </div>
        )
    }
}
// function NavbarWrapper(){
//     return (
//         <StoreContext>
//             {(store)=><Navbar store={store}></Navbar>}
//         </StoreContext>
//     )
// }
const mapStatetoProps = ({search})=>{
    return {
        search 
    }
}
const NavbarWrapper = connect(mapStatetoProps)(Navbar);
export default NavbarWrapper ;