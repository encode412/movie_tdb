import { getMovieDetails } from "@/utils/apiRequests";
import movieGenres from "../../../utils/genre";
import "./pageStyles.scss";
import Sidebar from "@/app/components/sidebar/Sidebar";
const MovieDetailsPage = async ({ params }) => {
  const movieDetails = await getMovieDetails(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const genre_ = movieDetails?.genres.map((genreId) => {
    return movieGenres[genreId.id].split(' ');
  });
  

  return (
    <>
      <Sidebar />
      <div className='movie-details_container'>
        <div className='movie-details_container_image'>
          <img src={IMAGE_BASE_URL + movieDetails?.backdrop_path} />
        </div>
        <div className='movie-details_container_heading'>
          <span className='title' data-testid='movie-title'>{movieDetails.title}</span>
          <span className='title' data-testid='movie-release-date'>{movieDetails.release_date}</span>
          <span className='title'>PG-13</span>
          <span className='title' data-testid='movie-runtime'>{movieDetails.runtime}mins</span>
          <span className='title'>{movieDetails.status}</span>
          <span className='genre'>{genre_}{' '}{' '}</span>
        </div>
        <div className='movie-details_container_overview'>
          <span data-testid='movie-overview'>{movieDetails.overview}</span>
          <div className='credits'>
            <div>Director:</div>
            <div>Writer:</div>
            <div>Stars:</div>
          </div>
        </div>
        <div>
          <span>Top rated movie #65</span>
          <span>Awards 9 nominations</span>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
