import React , {useState} from 'react';
import Stand from './stand';
import Rest from './rest';
import "./section.scss";

function News() {
  const [activeComponent, setActiveComponent] = useState('stand'); // 초기값을 'stand'로 설정

  const handleClick = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className='news frame'>
        <div className="news-nav">
          <button onClick={() => handleClick('stand')}>뉴스스탠드</button>
          <button onClick={() => handleClick('rest')}>언론사편집</button>
          <button onClick={() => handleClick('rest')}>엔터</button>
          <button onClick={() => handleClick('rest')}>스포츠</button>
          <button onClick={() => handleClick('rest')}>경제</button>
          <button onClick={() => handleClick('rest')}>쇼핑투데이</button>
        </div>
        <div className="news-title"></div>
        <div className="news-content">
          {activeComponent === 'stand' ? <Stand /> : <Rest />}
        </div>       
    </div>
  );
}
export default News;
