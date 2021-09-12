import './contact.scss';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className='contact' id='contact'>
      {/* <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='user_name' placeholder='Name' />
          <input type='email' name='user_email' placeholder='Email' />
          <textarea name='message' placeholder='Message' />
          <button type='submit'>Send</button>
          {message && <span>Thanks! I'll reply ASAP</span>}
        </form>
      </div> */}
      <h1>Let's get in touch...</h1>
      <div className='links'>
        <div className='line'>
          <FontAwesomeIcon icon={['fab', 'github']} /> github.com/tflesui
        </div>
        <div className='line'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          {'  '}
          linkedin.com/in/tflesui
        </div>
        <div className='line'>
          <FontAwesomeIcon icon={['fab', 'twitter']} /> @tflesui
        </div>
      </div>
    </div>
  );
}
