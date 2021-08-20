import './topbar.scss';
import { Laptop, Mail } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            francis
          </a>
          <div className='itemContainer'>
            <Laptop className='icon' />
            <span> github.com/tflesui</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span> tflesui@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
