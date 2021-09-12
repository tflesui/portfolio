import './app.scss';

import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';

library.add(fab);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
