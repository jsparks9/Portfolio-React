import { useState } from "react";
import styled from "styled-components";
import { GitButton, Left, LinkedInButton, Logo, PortfolioInd, linkedInURL } from "./NavBarContent";
import { useNavigate } from "react-router-dom";
import GitProfile from "../../models/GitProfile";

const MenuToggle = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 1000; 
  border-radius: 0.75em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
  padding: 1em;
  padding-top: 0.7em;
  width: 2em;
  height: 2em;
  cursor: pointer;
  background-color: ${props => props.menuOpen ? '#ecf2f6' : 'inherit'};
  transition: background-color 0.5s ease-out;
`;

const MenuLine = styled.div`
  z-index: 1001; 
  position: relative;
  margin-top: 0.35rem;
  display: flex;
  flex-direction: column;
  height: 0.2rem;
  background-color: black;
  transition: transform 0.3s, opacity 0.3s;
`

const SlideMenu = styled.div<{ menuOpen: boolean }>`
  border-radius: 0.75em;
  z-index: 1000; 
  position: fixed;
  padding: 1em;
  top: 6em;
  left:1em;
  height: 20em;
  width: 20em; 
  background-color: #ecf2f6;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(${props => props.menuOpen ? '0' : '-100%'});
  opacity: ${props => props.menuOpen ? '0.875' : '0'};
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
`;

const Right = styled.div`
  margin-top: 4em;
  display: block;
  user-select: none;
`;

const MenuItem = styled.a`
  display: block;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1.5em;
  font-weight: 500;
  &:hover { text-shadow: 
    0 0 0.5px black, 
    0 0 0.5px black, 
    0 0 0.5px black, 
    0 0 0.5px black
  ;}
`;


const MiniNavContent: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setMenuOpen(s => !s);
  const handleClickAndScroll = () => {handleClick(); scrollToTop();};
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
  <>
    <MenuToggle menuOpen={menuOpen} onClick={handleClick}>
        <MenuLine id='line1' style={(menuOpen) ? 
          {transform:'translate( -0px, 0.55rem) rotate(45deg)'} : {transform:'none'}}/>
        <MenuLine id='line2' style={(menuOpen) ? 
          {opacity:0, transform:'scale(0)'} : {opacity:1, transform:'none'}}/>
        <MenuLine id='line3' style={(menuOpen) ? 
          {transform:'translate( -0px, -0.55rem) rotate(-45deg)'} : {transform:'none'}}/>
    </MenuToggle>
    <SlideMenu menuOpen={menuOpen}>
      <Left>
        {/* Left Side of Navbar*/}
        <Logo
            id='logo' 
            onClick={() => {
                navigate('/Portfolio-React'); handleClickAndScroll();
            }}
        >
          Josiah&nbsp;Sparks
        </Logo>

        <GitButton
              id='gitLink' 
              href={profile.html_url}
              target='_blank'
              onClick={() => handleClick()}
          />
        <LinkedInButton
              id='gitLink' 
              href={linkedInURL}
              target='_blank'
              onClick={() => handleClick()}
          />
      </Left>
      <PortfolioInd>A&nbsp;Portfolio&nbsp;Site</PortfolioInd>
      <Right>
        <MenuItem
            id='home-btn' 
            onClick={() => {navigate('/Portfolio-React'); handleClickAndScroll()}}
        > Home </MenuItem>
        <MenuItem
            id='about-btn' 
            onClick={() => {navigate('/Portfolio-React/about'); handleClickAndScroll()}}
        > About </MenuItem>
        <MenuItem
            id='projects-btn' 
            onClick={() => {navigate('/Portfolio-React/projects'); handleClickAndScroll()}}
        > Projects </MenuItem>
        <MenuItem
            id='contact-btn' 
            onClick={() => {navigate('/Portfolio-React/contact'); handleClickAndScroll()}}
        > Contact </MenuItem>
        </Right>
    </SlideMenu>
  </>);
}

export default MiniNavContent;