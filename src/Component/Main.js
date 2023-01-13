import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper';
import styled from 'styled-components';

import './style.scss';
import './style.css';

const Container = styled.div`
  color: #ddd;
  font-size: 3em;
  position: absolute;
  font-weight: 600;
  letter-spacing: -3px;
  left: 50%;
  vertical-align: middle;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;

  h1 {
    z-index: 3;
    padding: 20px;
  }
  h2 {
    z-index: 4;
    font-size: 0.5em;
    padding: 10px;
  }
  button {
    z-index: 4;
    font-size: 0.5em;

    font-size: 17px;
    border: 2px solid #fff;
    width: 150px;
    background-color: transparent;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;
    }
    transition: all 0.4s;
    animation-name: title;
  }
`;

const dataList = [
  { id: 1, URL: '/images/main_img1.jpg', alt: '1' },
  { id: 2, URL: '/images/main_img2.jpg', alt: '2' },
  { id: 3, URL: '/images/main_img3.jpg', alt: '3' },
];

function Swiper1() {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(dataList);

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        navigation
        loop={true}
        className="mySwiper size"
        style={{ height: '1079px' }}
      >
        {data.map(img => (
          <SwiperSlide key={img.id} style={{ display: 'relative' }}>
            <img src={path + img.URL} alt={img.title} />
            <Container className="ani">
              <h1>기술과 경험의 융합, 미래를 위한 변화</h1>
              <h2>언제나 고객과 함께하는 디자인코코의 새로운 비전</h2>
              <button>바로가기</button>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mainBox">
        <div className="box1">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm-2.15-3.05v-4.1q-1.75 0-2.95-1.3-1.2-1.3-1.2-3.05v-2.2L7.45 20.05q-.25 1-.35 1.975Q7 23 7 24q0 6.5 4.225 11.35t10.625 5.6Zm14.7-5.4q1.1-1.2 1.925-2.55.825-1.35 1.4-2.825t.85-3.025Q41 25.6 41 24q0-5.3-2.9-9.625T30.35 8.05v.9q0 1.75-1.2 3.05-1.2 1.3-2.95 1.3h-4.35v4.35q0 .85-.675 1.4-.675.55-1.525.55H15.5V24h12.9q.85 0 1.4.65.55.65.55 1.5v6.35h2.15q1.45 0 2.55.85 1.1.85 1.5 2.2Z" />
          </svg>
          <h5>비전과 가치</h5>
          <p>언제나 고객과 함께하는 디자인코코의 새로운 비전입니다.</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
          </svg>
        </div>
        <div className="box2">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M2.9 43.4q-.75 0-1.25-.525t-.5-1.275q0-.8.5-1.275.5-.475 1.25-.475h42.25q.7 0 1.2.5t.5 1.25q0 .75-.5 1.275-.5.525-1.2.525Zm4.3-6.55q-1.65 0-2.9-1.25t-1.25-2.9V9.15q0-1.7 1.25-2.95 1.25-1.25 2.9-1.25h33.6q1.65 0 2.9 1.25t1.25 2.95V32.7q0 1.65-1.25 2.9t-2.9 1.25Zm0-4.15h33.6V9.15H7.2V32.7Zm0 0V9.15 32.7Z" />
          </svg>
          <h5>사업소개</h5>
          <p>언제나 고객과 함께하는 디자인코코의 사업을 소개합니다.</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Swiper1;
