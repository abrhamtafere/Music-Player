//In the Navbar.js file
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Button } from "../../Globalstyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "./Navbar.styles";
import { useDispatch, useSelector } from "react-redux";
import { setformStatus } from "../../state/musicSlice";

const Navbar = () => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);
  const [button, buttonClick] = useState(false);
   
  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);
  //myself
  // const closeMenu = () => {};
  const handleButton = () => buttonClick(!button);

  const { formStatus } = useSelector(state => state.music);
const dispatch = useDispatch();

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        {" "}
        {/* //turns the menu icon to white */}
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Addis Music
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
              <a href="#playlist"></a> 
                <MenuLink to="/audio">
                  Audio Musics
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="/video">
                  Video Musics
                </MenuLink>
              </MenuItem>
              <MenuItemBtn onClick={handleButton}>
                {button ? (   // here i will handle all or remove all styles
                  <MenuLinkBtn to="/addmusic">
                    <Button primary onClick = {() => dispatch(setformStatus(!formStatus))}>Add Musics</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/addmusic">
                    <Button primary bigFont  onClick = {() => dispatch(setformStatus(!formStatus))}>
                      Add Musics
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
