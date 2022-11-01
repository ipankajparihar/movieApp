import React from "react";

import { connect } from "react-redux";
import { addMoviesToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResult: true,
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviesToList(movie));
    this.setState({
      showSearchResult: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { result: movie, showSearchResult } = this.props.search;

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResult && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component{

//   render(){
//     return(
//       <StoreContext.Consumer>

//         {(store)=><Navbar dispatch={StoreContext.dispatch} search={this.props.search}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }

function MapStateToState({ search }) {
  return {
    search,
  };
}

export default connect(MapStateToState)(Navbar);
