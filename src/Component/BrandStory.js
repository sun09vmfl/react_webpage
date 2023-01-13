import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


function BrandStory() {
  return (
    <div className="brand">
      <h1>BRAND STORY</h1>
      <p>
        사람과의 긍정적인 호흡을 할 수 있는 자연의 재료로 만드는 것, 인체에 유해한 화학품을 사용하지 않는 것, 사람에게 시각적인 안정을 제공하는 것 등의 실천을 통해 <br />
        모두가 편안히 호흡하며 쉴 수 있는 공간을 제공하려 합니다.
      </p>
      <button>
        <Link to="#">자세히 보기</Link>
      </button>
    </div>
  );
}

export default BrandStory;
