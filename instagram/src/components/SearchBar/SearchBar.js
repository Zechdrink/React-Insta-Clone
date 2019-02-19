import React from 'react';

const SearchBar = props => {
    return (
        <div className = "nav-bar">
            <div className = "left-nav">
                <i class="fab fa-instagram fa-2x"></i>
                <h2>Instagram</h2>
            </div>

            <div className = "nav-search">
                <input type = "text" placeholder = "Search..."/>
            </div>
           
            <div className = "right-nav">
                <i className="far fa-compass fa-2x" /> 
                <i className="far fa-heart fa-2x" />
                <i className="far fa-user fa-2x" />
            </div>
        </div>
    )
}

export default SearchBar;