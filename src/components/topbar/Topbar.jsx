import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            francis
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span> (510) 921-9892</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span> tflesui@gmail.com</span>
          </div>
        </div>
        <div className='right'>Right Side</div>
      </div>
    </div>
  );
}
