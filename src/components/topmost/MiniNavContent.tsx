import { useState } from "react";
import styled from "styled-components";

const MenuToggle = styled.div`
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
`;

const MenuLine = styled.div`
  position: relative;
  margin-top: 0.35rem;
  display: flex;
  flex-direction: column;
  height: 0.2rem;
  background-color: black;
  transition: transform 0.3s, opacity 0.3s;
`


const MiniNavContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(s => !s);

  return (
  <>
    <MenuToggle onClick={handleClick}>
        <MenuLine id='line1' style={(menuOpen) ? 
          {transform:'translate( -0px, 0.55rem) rotate(45deg)'} : {transform:'none'}}/>
        <MenuLine id='line2' style={(menuOpen) ? 
          {opacity:0, transform:'scale(0)'} : {opacity:1, transform:'none'}}/>
        <MenuLine id='line3' style={(menuOpen) ? 
          {transform:'translate( -0px, -0.55rem) rotate(-45deg)'} : {transform:'none'}}/>
    </MenuToggle>
  </>);
}

export default MiniNavContent;