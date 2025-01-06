import React from 'react';
import "./section.scss";

function Stand() {
  return (
    <div className='stand frame'>
        <div className="stand-grid"></div>
        <div className="stand-grid"></div>
        <div className="stand-grid"></div>
        <div className="stand-grid">
          {/* <img src="" alt="" /> */}
          <div className="bt-area">
            <button>구독</button>
            <button>기사보기</button>
          </div>
        </div>        

    </div>
  );
}
export default Stand;
