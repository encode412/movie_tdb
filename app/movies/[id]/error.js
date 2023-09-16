"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className='container'>
        <div className='gif'>
          <img src='/images/giphy.webp' alt='gif_ing' />
        </div>
        <div className='content'>
          <h1 className='main-heading'>Something went wrong!.</h1>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .gif {
            display: flex;
            justify-content: center;
          }

          .content {
            text-align: center;
            margin: 3rem 0;
          }

          .content .main-heading {
            font-size: 2.5rem;
            font-weight: 700;
          }
          p {
            font-size: 1.3rem;
            padding: 0.7rem 0;
          }

          button {
            padding: 1rem;
            border-radius: 15px;
            outline: none;
            border: none;
            background: #BE123C;
            color: #fff;
            font-size: 1.3rem;
            cursor: pointer;
          }
        `}
      </style>
    </>
    // <div>
    //   <h2>Something went wrong!</h2>
    //   <button
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    // </div>
  );
}
