import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <video
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          style={{ pointerEvents: 'none' }} 
          className='w-full'
        >
          <source
            src="https://www.gangarealty.com/swarnim/images/deskvideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Home;
