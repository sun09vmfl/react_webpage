import React from 'react';
import { Link } from 'react-router-dom';

function Footet() {
  const Path = process.env.PUBLIC_URL;
  return (
    <div className="footer" style={{ fontSize: '.7em', backgroundColor: '#2e2e2e', color: '#999999' }}>
      <div className="footer_top">
        <div className="footer_top_left">
          <ul>
            <li>
              <img src={Path + '/images/copyright_logo.png'} />
            </li>
            <li>
              <Link to="/">회사소개</Link>
            </li>
            <li>
              <img src={Path + '/images/ft_line.png'} />
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <img src={Path + '/images/ft_line.png'} />
            </li>
            <li>
              <Link to="/">관리자페이지</Link>
            </li>
          </ul>
        </div>
        <div className="footer_top_right">
          <select>
            <option>패밀리 사이트</option>
            <option>카페24</option>
            <option>디자인센터</option>
            <option>네이버</option>
          </select>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <ul>
            <Link to="/" style={{ margin: '0' }}>
              <li>상호 : DESIGN COCO</li>
            </Link>
            <Link to="/">
              <li> 주소 : 대구광역시 OOO OOOO</li>
            </Link>
            <Link to="/">
              <li> TEL : 010-9951-9925</li>
            </Link>
            <Link to="/">
              <li>사업자 등록번호 : 511-53-00340</li>
            </Link>
          </ul>
          <p>Copyright(c) DESIGN COCO. All Rights Reserved.</p>
        </div>
        <div class="footer_bottom_right">
          <ul>
            <li>
              <img src={Path + '/images/kakao.png'} />
            </li>
            <li>
              <img src={Path + '/images/facebook.png'} />
            </li>
            <li>
              <img src={Path + '/images/insta.png'} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footet;
