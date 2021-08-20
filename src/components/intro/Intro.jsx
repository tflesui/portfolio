import './intro.scss';

import { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed: 80,
      strings: ['Web Developer', 'Leader', 'Team Player'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/headshot.jpg' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hello! &nbsp;I'm</h2>
          <h1>Francis Lesui</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
