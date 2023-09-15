import Link from "next/link";
import "./SidebarStyles.scss";
import React from "react";

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <div className='sidebar_container-content'>
        <span className='logo'>
          <Link href='#'>
            <img src='/images/home/tv.png' alt='logo' />
            MovieBox
          </Link>
        </span>
        <span className='title'>
          <Link href='#'>Home</Link>
        </span>
        <span className='title'>
          <Link href='#'>Movie</Link>
        </span>
        <span className='title'>
          <Link href='#'>TV Series</Link>
        </span>
        <span className='title'>
          <Link href='#'>Upcoming</Link>
        </span>
        <div className='sidebar_container-content-play-border'>
          <span className='title-content'>
            Play movie quizzes and earn free tickets
          </span>
          <span className='text'>50k people are playing now</span>
          <span className='link'>
            <Link href='#'>Start Playing</Link>
          </span>
        </div>
        <span className='log-out'>
          <Link href='#'>Log out</Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
