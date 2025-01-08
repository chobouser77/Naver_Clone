import React from 'react';

function Login() {
  return (    
    <div className='login'>
      <div className="naver-login frame">
        <p className="lo-t">
          네이버를 더 안전하고 편리하게 이용하세요
        </p>
        <button>
          로그인
        </button>
        <div className="bts">
          <a href="javascript:void(0)">로그인</a>
          <p>|</p>
          <a href="javascript:void(0)">비밀번호 찾기</a>
          <p>|</p>
          <a href="javascript:void(0)">회원가입</a>
        </div>
      </div>              
      <div className="ad2 frame">AD2</div>
      <div className="ad3 frame">
        <div className="ad3-in">
          <div className="from frame">헌화</div>
          <p>여객기 참사 희생자를 추모합니다</p>
        </div>        
      </div>
      <div className="ad4 frame">
          ad4
        </div>
        <div className="ad5 frame">
          <div className="ad5-left">
            <p>
              많이<br/>
              찾는 쇼핑<br/>
              아이템은?
            </p>
            <div className="">AD</div>
          </div>
          <div className="ad5-right"></div>
        </div>
    </div>             
  );
}
export default Login;
