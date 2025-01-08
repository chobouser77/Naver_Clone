import React , {useRef , useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Pagination , Navigation } from 'swiper';
import {  Navigation } from 'swiper/modules';


function Login() {
  const swiperRef = useRef(null);  
  const prevRef = useRef(null);    
  const nextRef = useRef(null);

  useEffect(() => {
    // Swiper 인스턴스를 swiperRef로부터 가져오고 외부 버튼을 연결
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.update();  // 설정을 업데이트
    }
  }, []);

  return (    
    <div className='login'>
      <div className="naver-login frame">
        <p className="lo-t">
          네이버를 더 안전하고 편리하게 이용하세요
        </p>
        <button className='log-bt'>
          로그인
        </button>
        <div className="bts">
          <button>로그인</button>
          <p>|</p>
          <button>비밀번호 찾기</button>
          <p>|</p>
          <button>회원가입</button>
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
        <div className="ad5-right">
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={12}
            // navigation={
            //   // true
            //   {
            //     prevEl: prevRef.current, 
            //     nextEl: nextRef.current,
            //   }
            // }
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination , Navigation]}
            modules={[ Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='slide'>
              <div className="img-box">
                <img src="/img/download.jpg" alt="스와이퍼 임시이미지" />
              </div>              
              <p>리본 네일 스티</p>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className="img-box">
                  <img src="/img/download.jpg" alt="스와이퍼 임시이미지" />
                </div>              
                <p>리본 네일 스티</p>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className="img-box">
                  <img src="/img/download.jpg" alt="스와이퍼 임시이미지" />
                </div>              
                <p>리본 네일 스티</p>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className="img-box">
                  <img src="/img/download.jpg" alt="스와이퍼 임시이미지" />
                </div>              
                <p>리본 네일 스티</p>
            </SwiperSlide>
            <SwiperSlide className='slide'>
              <div className="img-box">
                  <img src="/img/download.jpg" alt="스와이퍼 임시이미지" />
                </div>              
                <p>리본 네일 스티</p>
            </SwiperSlide>           
          </Swiper>
          <div ref={prevRef} className="swiper-button-prev"></div>
          <div ref={nextRef} className="swiper-button-next"></div>
        </div>
      </div>
      <div className="weather frame">
        <div className="weather-title">날씨</div>
        <div className="weather-in">
          <div className="weather-in-1"></div>
          <div className="weather-in-2"></div>
        </div>
      </div>
    </div>             
  );
}
export default Login;
