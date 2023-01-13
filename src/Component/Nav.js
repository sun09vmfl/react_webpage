import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Nav() {
  const Path = process.env.PUBLIC_URL;
  const [navSize, setnavSize] = useState('10rem');
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('rgba(0,0,0,.8)') : setnavColor('transparent');
    // window.scrollY > 10 ? setnavSize('5rem') : setnavSize('10rem');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const menus = [
    { id: 1, menu: '회사소개', sub1: '회사소개', sub2: 'CEO 인삿말', sub3: '회사연혁', sub4: '비전과가치', sub5: '홍보영상', sub6: '오시는길' },
    { id: 2, menu: '사업소개', sub1: '사업분야', sub2: '사업분야2', sub3: '사업분야3', sub4: '인증서', sub5: '파트너' },
    { id: 3, menu: '제품소개', sub1: '제품01', sub2: '제품02', sub3: '제품03', sub4: '제품04', sub5: '제품5' },
    { id: 4, menu: '커뮤니티', sub1: '고객상담', sub2: '공지사항', sub3: '문의게시판', sub4: 'FAQ', sub5: '전화연결' },
    { id: 5, menu: '고객센터', sub1: '갤러리', sub2: '매장안내', sub3: '이벤트', sub4: '이벤트2', sub5: '이벤트3' },
  ];

  return (
    <div
      className="header"
      style={{
        backgroundColor: navColor,
        transition: 'all 1s',
        fontWeight: '400',
      }}
    >
      <h1 style={{ paddingLeft: '20px' }}>
        <img src={Path + '/images/logo.png'} />
      </h1>
      <ul className="menu">
        {menus.map(list => (
          <li key={list.id}>
            <Link to="#">{list.menu}</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">{list.sub1}</Link>
              </li>
              <li>
                <Link to="#">{list.sub2}</Link>
              </li>
              <li>
                <Link to="#">{list.sub3}</Link>
              </li>
              <li>
                <Link to="#">{list.sub4}</Link>
              </li>
              <li>
                <Link to="#">{list.sub5}</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <ul className="login" style={{ fontSize: '12px', marginRight: '15px' }}>
        <li>
          <Link to="#">LOGIN</Link>
        </li>
        <li>
          <Link to="#">JOIN</Link>
        </li>
        <li>
          <Link to="#">ENG</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
