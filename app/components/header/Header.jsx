"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useInterval from "../../../utils/hooks/useInterval";
import { FaPlayCircle, FaBars } from "react-icons/fa";
import "./HeaderStyles.scss";

import Link from "next/link";

const Header = ({ bgSlides }) => {
  const [rottenTomatoes, setRottenTomatoes] = useState(0);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const [imdb, setImdb] = useState(0);
  const [movieBgSlides, setMovieBGSlides] = useState([]);
  const [currentBGSlideIndex, setCurrentBGSlideIndex] = useState(-1);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  function rating(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  useInterval(
    () => {
      const rottenRT = rating(75, 100);
      const imdbRT = rating(4.0, 10.0);
      setRottenTomatoes(rottenRT);
      setImdb(imdbRT);
      const nextIndex =
        currentBGSlideIndex >= bgSlides.length - 1
          ? 0
          : currentBGSlideIndex + 1;
      setCurrentBGSlideIndex(nextIndex);
    },
    movieBgSlides.length ? 30000 : null
  );

  const fetchBGSlides = () => {
    const slides = Object.values(bgSlides)
      .map(({ acf }) => acf)
      .sort((a, b) => a.sort_index - b.sort_index);
    setMovieBGSlides(slides);
  };

  useEffect(() => {
    fetchBGSlides();
  }, []);

  return (
    <>
      <main>
        <div className='hero-container'>
          <div className='hero-container_header'>
            <div className='logo'>
              <img src='/images/home/tv.png' alt='logo' />
              MovieBox
            </div>
            <div className='search-container'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  className='search-input'
                  placeholder='What do you want to watch?'
                />
              </form>
            </div>
            <div className='sign-in'>
              Sign in{" "}
              <span>
                <FaBars />
              </span>
            </div>
          </div>
          <div className='hero-container_content'>
            <div>Now Playing:</div>
            <div className='hero-container_content_title'>
              {bgSlides[currentBGSlideIndex]?.title}
            </div>
            <div className='hero-container_content_ratings'>
              <img
                src='/images/home/imdb.ico'
                className='imdb-icon'
                alt='imdb'
              />{" "}
              {imdb}/10
              <img src='/images/home/rt.png' className='rt-icon' alt='rt' />
              {rottenTomatoes}%
            </div>
            <div className='hero-container_content_overview'>
              {bgSlides[currentBGSlideIndex]?.overview}
              <div className='poster'>
                <img
                  src={
                    IMAGE_BASE_URL + bgSlides[currentBGSlideIndex]?.poster_path
                  }
                  alt={bgSlides[currentBGSlideIndex]?.title}
                />
              </div>
            </div>
            <button className='hero-container_content_button'>
              <FaPlayCircle className='play' />
              <Link href='#'>Watch trailer</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
