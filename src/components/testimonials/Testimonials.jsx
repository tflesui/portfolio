import './testimonials.scss';

export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>About Me</h1>
      <div className='container'>
        <div className='card'>
          <div className='top'>
            <p>
              I am <strong>Francis Lesui</strong> and I am a web developer
            </p>
            <img src='./assets/family1.png' alt='francis with wife' id='pic1' />
            <p>
              From a young age I have had a love for computers and coding. My
              goal is to turn that love into a career.
            </p>
            <p>
              With the help of various undergrad courses, an immersive bootcamp,
              courtesy{' '}
              <a href='https://fullstackacademy.com'>Fullstack Academy</a>, and
              my own studies, I proudly have knowledge of frontend and backend
              web technologies.
            </p>
            <p>
              Some languages and technologies I currently use are: ReactJS,
              NodeJS, HTML5/CSS3, & SQL
            </p>
            <p>I'm also a family man who is led by his faith in God.</p>
            <p>
              When I am not coding you can catch me cheering for my 49ers,
              Oakland Athletics, Golden State Warriors, or the Arsenal Football
              Club.
            </p>
          </div>
          <div className='bottom'></div>
        </div>
      </div>
    </div>
  );
}
