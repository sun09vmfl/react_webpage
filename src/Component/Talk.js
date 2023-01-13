import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function Talk() {
  const animatedItem = useScrollFadeIn('up', 1);
  return (
    <div className="talk" {...animatedItem} style={{ cursor: 'pointer' }}>
      <h1>고객상담</h1>
      <p>디자인코코의 새로운 소식을 전해드립니다.</p>
      <div className="mapBox">
        <div className="minimap" style={{ backgroundColor: '#ddd' }}>
          <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '400px' }}>
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
          </Map>
        </div>
        <div className="colorbox">
          <dl style={{ fontSize: '16px', fontWeight: '300' }}>
            <dt>· 주소</dt>
            <dd>대구광역시 OOO OOOO</dd>
            <dt>· 전화</dt>
            <dd>010-9951-9925</dd>
            <dt>· 팩스</dt>
            <dd>012-345-6789</dd>
            <dt>· 상담시간</dt>
            <dd>09:00-18:00 (주말, 공휴일 휴무)</dd>
            <dt>· 문의메일</dt>
            <dd>designcoco_c@naver.com</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Talk;
