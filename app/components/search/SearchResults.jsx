"use client";
import Card from "../card/Card";
import './SearchResultsStyles.scss';

const SearchResults = ({ query, movies }) => {

  return (
    <div>
      <h1 className='search-title'>Search Results for &quot;{query}&quot;</h1>
      <div className='search-content'>
        {movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
