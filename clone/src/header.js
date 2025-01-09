import React, {useEffect,useState} from 'react';
import './index.scss';
import './Header.scss';

function Header() {
  const [hasClass , setHasClass] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [placeholderText, setPlaceholderText] = useState('검색어를 입력해 주세요');
  
  // 핸들 검색창
  useEffect(() => {
    const scroll = () => {
      const scrollhold = 300;
      if (window.scrollY > scrollhold) {
        setHasClass(true);
      } else {
        setHasClass(false);
      }
    };
  
    window.addEventListener("scroll", scroll);
    
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  // 검색창 플레이스 홀더
  
  const handleFocus = () => {
    if (!inputValue) {
      setPlaceholderText('검색어를 입력해 주세요');
    }
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setPlaceholderText('검색어를 입력해 주세요');
    } else {
      setPlaceholderText('');
    }
  };
  
  
  return (
    <div className="Header">
      <div className="top-area">
        <div className="top-icon-area1 top-icon-area">
          <div className="icon">
            <div className="paner">
              바로가기
            </div>
          </div>
          <div className="icon">
          <div className="paner">
              네이버 페이
            </div>
          </div>
        </div>
        <div className="top-icon-area2 top-icon-area">
          <div className="icon">
          <div className="paner">
              네이버톡
            </div>
          </div>
          <div className="icon">
          <div className="paner">
              알림*혜택
            </div>
          </div>
          <div className="icon">
          <div className="paner">
              장바구니
            </div>
          </div>
        </div>
      </div>
      <div className={`search-area ${hasClass ? "sticky" : ""}`}>
        <div className="search-logo">
          <div className="av"></div>
          {/* <img src="" alt="" /> */}
        </div>
        <input type="text" className="search-input" onFocus={handleFocus} onChange={handleInput} placeholder={placeholderText}  />
        <div className="search-bt">
          <button className="icon keybord"></button>
          <button className="icon more"></button>
          <button className="icon search"></button>
        </div>
      </div>
      <div className="bottom-area">
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            기능 명
          </p>          
        </div>
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            메일
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            카페
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            블로그
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            스토어
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            뉴스
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            증권
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            부동산
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            지도
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            웹툰
          </p>          
        </div> 
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>
          <p>
            치지직
          </p>          
        </div>
        <div className="function-bt function-bt1">          
          <div className="bt-box"></div>                    
        </div> 
      </div> 
    </div>
  );
}

export default Header;