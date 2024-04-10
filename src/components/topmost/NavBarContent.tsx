import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GitProfile from '../../models/GitProfile';

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

const GitButton = styled.a`
  margin-left: 1em;
  display: inline-block;
  width: 2em;
  height: 2em;
  background-image: url("https://cdn-icons-png.flaticon.com/512/25/25231.png");
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
`

const NavBarContent: React.FC<{ profile: GitProfile }> = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Left>
          {/* Left Side of Navbar*/}
          <Logo
              id='logo' 
              onClick={() => {
                  navigate('/about');
              }}
          >
            Josiah Sparks
          </Logo>

        <GitButton
              id='gitLink' 
              href={profile.html_url}
              target='_blank'
          />

        </Left>
        <Right>
            <MenuItem
                id='home-btn' 
                onClick={() => navigate('/')}
            > Home </MenuItem>
            <MenuItem
                id='about-btn' 
                onClick={() => navigate('/about')}
            > About </MenuItem>
            <MenuItem
                id='projects-btn' 
                onClick={() => navigate('/projects')}
            > Projects </MenuItem>
            <MenuItem
                id='contact-btn' 
                onClick={() => navigate('/contact')}
            > Contact </MenuItem>
        </Right>
      </Wrapper>
    </>
  );
}

export default NavBarContent;
