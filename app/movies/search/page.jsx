import './pageStyles.scss';
import { getMovies } from '@/utils/apiRequests';
import SearchResults from '@/app/components/search/SearchResults';

const SearchPage = async ({searchParams}) => {
    const query = searchParams.query;
    
    const movies = await getMovies(query)
  return (
    <SearchResults query={query} movies={movies}/>
  )
}

export default SearchPage;