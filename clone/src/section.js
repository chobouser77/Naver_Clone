import React from 'react';
import Ad1 from './ad1';
import News from './news';
import Shopping from './shopping';
import Login from './login';

function Section() {
  return (
    <div className='section'>
        <div className="section-left">
          <Ad1 />
          <News />
          <Shopping />
        </div>
        <div className="section-right">
          <Login />
        </div>
    </div>
  );
}
export default Section;
