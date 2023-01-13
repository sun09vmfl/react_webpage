import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import useScrollFadeIn from './useScrollFadeIn';

function Service() {
  const Path = process.env.PUBLIC_URL;
  const animatedItem = useScrollFadeIn('up', 1);

  const services = [
    { id: 1, img: '/images/service1.jpg', title: '플랫폼', des: '소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.', btn: 'DETAIL VIEW >>' },
    { id: 2, img: '/images/service2.jpg', title: '솔루션', des: '소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.', btn: 'DETAIL VIEW >>' },
    { id: 3, img: '/images/service3.jpg', title: '서비스', des: '소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.', btn: 'DETAIL VIEW >>' },
    { id: 4, img: '/images/service4.jpg', title: '기술지원', des: '소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.', btn: 'DETAIL VIEW >>' },
  ];
  return (
    <div className="service" {...animatedItem}>
      <h1>SERVICE</h1>
      <p>최고의 prestige와 공간가치를 창조하는 global partner, 건축물과 주변환경을 생각하는 개발 소비자의 품격 있는 삶을 위한 주거문화 창달에 노력하고 있습니다.</p>
      <ul>
        {services.map(item => {
          return (
            <li key={item.id}>
              <div className="servicebox">
                <div className="imgwrapper">
                  <img src={Path + item.img} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.des}</p>
                <button>
                  <Link to="/">{item.btn}</Link>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Service;
