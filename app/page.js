import { getTopTenMovies, fetchBGSlides } from "@/utils/apiRequests";
import './pageStyles.scss'
import Card from "./components/card/Card";
import Header from "./components/Header/Header";

export default async function HomePage() {
  const movies = await getTopTenMovies();
  const slicedMovies = movies.slice(0, 10)
  // console.log(movies)
  const bgSlides = await fetchBGSlides();
  return (
    <div>
      <Header bgSlides={bgSlides} />
      <h1 className="card-title">Featured Movies</h1>
      <div className='card-content'>
        {slicedMovies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </div>
  );
}
