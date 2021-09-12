import './works.scss';
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Brute Force Alliance',
      desc: 'A full e-Commerce website built with ReactJS and powered by Google Firestore',
      img: './assets/BFA Thumbnail.png',
      link: 'https://grace-shopper-6d1e0.firebaseapp.com/',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Todo Application',
      desc: 'A CRUD Todo App with PostgreSQL database and ReactJS frontend with Bootstrap',
      img: './assets/Todo Screenshot.PNG',
      link: 'https://powerful-anchorage-49942.herokuapp.com/',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Fire Trackr',
      desc: 'Global Wildfire tracking site using NASA data and Google Maps',
      img: './assets/FireTrackr Thumbnail.png',
      link: 'https://firetrackr.netlify.app/',
    },
  ];

  const handleClick = (direction) => {
    direction === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  {/* <div className='imgContainer'>
                    <img src='assets/code.svg' alt='' />
                  </div> */}
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <a href={`${item.link}`}>See it live</a>
                </div>
              </div>
              <div className='right'>
                <img src={`${item.img}`} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='assets/arrow.svg'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='assets/arrow.svg'
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  );
}
