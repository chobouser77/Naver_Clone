import React , {useState} from 'react';
import Shop from './shop';
import One from './one';
import Live from './live';
import "./section.scss";

function Shopping() {
  const [activeComponent, setActiveComponent] = useState('shop'); 
  const [title , setTitle] = useState('쇼핑');
  
  const handleClick = (component , title) => {
    setActiveComponent(component);
    setTitle(title);
  };

  return (
    <div className='shop frame'>
        <div className="shop-nav">
          <button onClick={() => handleClick('shop' , '쇼핑')}>쇼핑</button>
          <button onClick={() => handleClick('shop' , '맨즈')}>맨즈</button>
          <button onClick={() => handleClick('one' , '원쁠딜')}>원쁠딜</button>
          <button onClick={() => handleClick('live' , '쇼핑라이브')}>쇼핑라이브</button>          
        </div>        
        <div className="shop-content">
          {activeComponent === 'shop' 
          ? <Shop /> 
          : activeComponent === 'one' 
          ? <One />  
          : <Live /> }
        </div>
        <div className="page-nation">
          <button className="Prev-bt"> &lt; </button>          
          <p><span>{title}</span>더보기</p>
          <button className="next-bt"> &gt; </button>
        </div>       
    </div>
  );
}
export default Shopping;
