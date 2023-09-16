import Link from "next/link";
import "./CardStyles.scss";
import rating from "../../../utils/rating";
import {AiFillHeart} from 'react-icons/ai'
import movieGenres from "../../../utils/genre";
import MovieDetailsPage from "../../movies/[id]/page";

const Card = ({ movie }) => {
  const imdb = rating(1, 10);
  const rt = rating(50, 100);
  const year = movie.release_date;
  // .substring(0, 4);

  const genre_ = movie.genre_ids.map((genreId) => {
    return movieGenres[genreId] + " ";
  });

  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <div className='card_container' data-testid='movie-card'>
      <span className='heart-container'><AiFillHeart color="#eee" className='heart-icon'/></span>
      <Link href={"/movies/" + movie.id}>
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.poster} data-testid='movie-poster' />
        <div className='card_container-content'>
          <span className='country'>USA,</span>{' '}
          <span className='date' data-testid='movie-release-date'>{year}</span>
          <h5 data-testid='movie-title'>{movie.title}</h5>
          <div className='card-icons'>
            <span className='imdb-content'>
              <img
                src='/images/home/imdb.ico'
                className='imdb-icon'
                alt='imdb'
              />
              {imdb}/10
            </span>

            <span className='rt-content'>
              <img src='/images/home/rt.png' className='rt-icon' alt='rt' />
              {rt}%
            </span>
          </div>
          <span className='genre'>{genre_}{" "}{" "}{" "}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
