import React from 'react';
import { Link } from 'react-router-dom';
import useScrollFadeIn from './useScrollFadeIn';

function Info() {
  const animatedItem = useScrollFadeIn('up', 1);
  const infos = [
    { id: 1, title: '디자인코코의 공지사항 테스트글입니다.', date: '2023-01-01' },
    { id: 2, title: '디자인코코의 공지사항 테스트글입니다.', date: '2023-01-01' },
    { id: 3, title: '디자인코코의 공지사항 테스트글입니다.', date: '2023-01-01' },
    { id: 4, title: '디자인코코의 공지사항 테스트글입니다.', date: '2023-01-01' },
    { id: 5, title: '디자인코코의 공지사항 테스트글입니다.', date: '2023-01-01' },
  ];

  return (
    <div className="info" style={{ cursor: 'pointer' }} {...animatedItem}>
      <h1>공지사항</h1>
      <p>디자인코코의 새로운 소식을 전해드립니다.</p>
      <table className="table">
        <tbody>
          {infos.map(item => {
            return (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Info;
