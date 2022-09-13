import React from 'react';
import Slider from 'react-slick';
import Video from './VideoPlayer';
import Slider1 from '../../assets/slider1.png';
// import Slider2 from '../../assets/slider2.png';
// import posterimg from '../../assets/posterimg.jpg';

const videoList = [
  {
    video: 'https://www.youtube.com/watch?v=AJutapx7JIw',
    photo: Slider1,
  },
  {
    video: 'https://www.youtube.com/watch?v=HNlbndpQEZY',
    photo: Slider1,
  },
  {
    video: 'https://www.youtube.com/watch?v=AJutapx7JIw',
    photo: Slider1,
  },
  {
    video: 'https://www.youtube.com/watch?v=HNlbndpQEZY',
    photo: Slider1,
  },
];

const VideoSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: 'center',
    arrows: false,
    speed: 500,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    centerMode: true,
    initialSlide: 1,

    // centerMode: true,
    // slidesToShow: 3,
    // dots: true,
    // arrows: true,
    // swipe: true,
    // infinite: true,
    // swipeToSlide: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='conatainer'>
        <p className='peoplevoice'>People’s voice</p>

        <p className='videosectionheading'>
          You know when you’ve been glue-ed!
        </p>

        <p className='videosectionsebhead'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus id
          integer in et vesti
        </p>
      </div>

      <Slider {...settings}>
        {videoList.map((val) => (
          <div className='mr-5 p-5 w-75'>
            <Video val={val} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default VideoSection;
