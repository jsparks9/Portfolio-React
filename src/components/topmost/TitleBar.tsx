import { useEffect, useState } from 'react';
import DateComponent from './DateComponent'

const TitleBar = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return(
  <>
    <div className="head">
      <div className="headerobjectswrapper">
        <header
          style={(windowWidth > 800) ? {} : (windowWidth > 670) ? 
          {fontSize:'60px'} : {fontSize:'35px'}}
        >The&nbsp;Tech&nbsp;Times</header>

      </div>
      <div className="subhead">
        San Antonio, TX - <DateComponent /> - Seven Pages
      </div>
    </div>
  </>)
}

export default TitleBar;
