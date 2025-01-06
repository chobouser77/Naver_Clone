import React from 'react';
import Ad1 from './ad1';
import News
 from './news';
function Section() {
  return (
    <div className='section'>
        <div className="section-left">
          <Ad1 />
          <News />
        </div>
        <div className="section-right"></div>
    </div>
  );
}
export default Section;
