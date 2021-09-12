import './contact.scss';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
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
