import './portfolio.scss';
import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio, webPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'all',
      title: 'All Apps',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'all':
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((item) => (
          <div className='item'>
            <img src={item.img} alt='' />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
