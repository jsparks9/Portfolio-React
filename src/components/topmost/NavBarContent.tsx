import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GitProfile from '../../models/GitProfile';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  padding: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-top: 0.5em;
  margin-bottom: 1em;
  flex: 1;
  display: block;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 2em;
  font-weight: bold;
`;

const Right = styled.div`
  display: block;
  align-items: left;
  user-select: none;
`;

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const PortfolioInd = styled.a`
  font-size: 1.5em;
  font-weight: 400;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: 'Garamond', serif; 
`;

const GitButton = styled.a`
  margin-left: 1em;
  display: inline-block;
  width: 2em;
  height: 2em;
  background-image: url("https://raw.githubusercontent.com/jsparks9/Portfolio-React/main/images/gitHubLogo.png");
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
`

const LinkedInButton = styled.a`
  margin-left: 0.5em;
  display: inline-block;
  width: 2em;
  height: 2em;
  background-image: url("https://raw.githubusercontent.com/jsparks9/Portfolio-React/main/images/linkedInLogo.png");
  background-size: cover;
  background-position: center;
  filter: blur(0.35px);
  -webkit-filter: blur(0.35px);
  opacity: 0.87;
  border: none;
  cursor: pointer;
`

const linkedInURL = 'https://www.linkedin.com/in/josiah-sparks-a9b48928b/';

const NavBarContent: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Wrapper>
        <Left>
          {/* Left Side of Navbar*/}
          <Logo
              id='logo' 
              onClick={() => {
                  navigate('/Portfolio-React');
              }}
          >
            Josiah&nbsp;Sparks
          </Logo>

        <GitButton
              id='gitLink' 
              href={profile.html_url}
              target='_blank'
          />
        <LinkedInButton
              id='gitLink' 
              href={linkedInURL}
              target='_blank'
          />

        </Left>
        {(windowWidth >= 800) ? <PortfolioInd>A&nbsp;Portfolio&nbsp;Site</PortfolioInd> : <></>}
        
        <Right>
            <MenuItem
                id='home-btn' 
                onClick={() => navigate('/Portfolio-React')}
            > Home </MenuItem>
            <MenuItem
                id='about-btn' 
                onClick={() => navigate('/Portfolio-React/about')}
            > About </MenuItem>
            <MenuItem
                id='projects-btn' 
                onClick={() => navigate('/Portfolio-React/projects')}
            > Projects </MenuItem>
            <MenuItem
                id='contact-btn' 
                onClick={() => navigate('/Portfolio-React/contact')}
            > Contact </MenuItem>
        </Right>
      </Wrapper>
    </>
  );
}

export default NavBarContent;
