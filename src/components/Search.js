import React from "react"

function Search({setSearch}) {

function handleChange(event){
    setSearch(event.target.value)
}
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;