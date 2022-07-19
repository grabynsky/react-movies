import React, { Component } from "react";

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    }
handleKey= (event) => {
    if(event.key === 'Enter') {
        this.props.searchMovies(this.state.search, this.state.type);
    }
}

handleFilter = (event) => {
    this.setState(()=>({type: event.target.dataset.type}), ()=>{this.props.searchMovies(this.state.search, this.state.type)})
    
}
    render(){
        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input 
                            className="validate"
                            placeholder='Search' 
                            type="search" 
                            value={this.state.search}
                            onChange={(event)=>this.setState({search: event.target.value})}
                            onKeyDown={this.handleKey}
                        />
                            <button onClick={() =>  this.props.searchMovies(this.state.search, this.state.type)} className="btn search-btn">Search</button>
                    </div>
                </div>

                <div>
                    <label>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio"  
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio"  
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input 
                            className="with-gap" 
                            name="type" 
                            type="radio" 
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
          </div>
        )
    }
}
export default Search;