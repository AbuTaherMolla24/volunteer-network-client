import React from 'react';

const SearchBar = () => {
    return (
        <div>
        <div className="text-center mt-5">
        <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
    </div>
    <form class="form-inline d-flex justify-content-center mt-4">
    <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success btn-primary text-white my-2 my-sm-0" type="submit">Search</button>
  </form>
    
</div>
    );
};

export default SearchBar;