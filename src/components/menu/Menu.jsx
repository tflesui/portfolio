import './menu.scss';

import MenuItem from './MenuItem';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <MenuItem
          setMenuOpen={setMenuOpen}
          MenuText={'Home'}
          MenuLink={'intro'}
        />
        <MenuItem
          setMenuOpen={setMenuOpen}
          MenuText={'Portfolio'}
          MenuLink={'portfolio'}
        />
        <MenuItem
          setMenuOpen={setMenuOpen}
          MenuText={'Works'}
          MenuLink={'works'}
        />
        <MenuItem
          setMenuOpen={setMenuOpen}
          MenuText={'Testimonials'}
          MenuLink={'testimonials'}
        />
        <MenuItem
          setMenuOpen={setMenuOpen}
          MenuText={'Contact'}
          MenuLink={'contact'}
        />
      </ul>
    </div>
  );
}