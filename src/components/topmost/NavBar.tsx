import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBarContent from './NavBarContent';
import GitProfile from '../../models/GitProfile';
import MiniNavContent from './MiniNavContent';

const Container = styled.div`
  box-shadow: 0 1px 2px 1px #00000026;
  overflow: hidden;
  background-color: #f9f7f1;
`;

const Navbar: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [origOffset, setOrigOffset] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elem = document.getElementById("navbar");
    if (elem == null) return;
    const currentOffset = elem.offsetTop;
    setOrigOffset(prevOffset => Math.max(prevOffset, currentOffset));
    if (Math.max(origOffset, currentOffset) > 0) 
      setIsSticky(window.scrollY >= Math.max(origOffset, currentOffset));
  }, [scrollOffset]);

  return (
    <>
      {(windowWidth > 670) ? 
        <>
          <Container id='navbar'
          style={isSticky ? {opacity: 0, zIndex: -100} : {zIndex: 1000}}>
            <NavBarContent profile={profile}/>
          </Container>
          <Container 
          style={isSticky ? {position: 'fixed', top: 0, left: 0, width:'100%', zIndex: 1000} : 
          {opacity: 0, height:'0px'}}>
            <NavBarContent profile={profile}/>
          </Container>
        </> : 
        <MiniNavContent/>}
    </>
  );
}

export default Navbar;
