//In the Navbar.js file
import { useEffect, useState } from "react";
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
import { setCurrentSong, setformStatus, setSongs } from "../../state/musicSlice";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

  // to get the current nav link
  const location = useLocation();
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);
  const [button, buttonClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);
  //myself
  // const closeMenu = () => {};
  const handleButton = () => buttonClick(!button);

  const { formStatus, songs, currentSong, updateStatus } = useSelector((state) => state.music);
  const dispatch = useDispatch();

  //from server
  // useEffect(() => {
  //  axios
  //     .get(`http://127.0.0.1:5000/api/songs`)
  //     .then((res) => {
  //       dispatch(setSongs(res.data.songs))
  //       dispatch(setCurrentSong(songs[0]))
  //       currentSong.active = true;
  //     })
  //     .catch((err) => console.log(err));
  //   }, [updateStatus]);
  //   console.log(songs);

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
                <MenuLink  className={location.pathname === '/' ? 'active' : ''} to="/">Home</MenuLink>
              </MenuItem>
              <MenuItem>
                <a href="#playlist"></a>
                <MenuLink  className={location.pathname === '/audio' ? 'active' : ''} to="/audio">Audio Musics</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink className={location.pathname === '/video' ? 'active' : ''} to="/video">Video Musics</MenuLink>
              </MenuItem>
              {location.pathname === '/' ?
              <MenuItemBtn onClick={handleButton}>
                {button ? ( // here i will handle all or remove all styles
                  <MenuLinkBtn to="#">
                    <Button
                      primary
                      onClick={() => dispatch(setformStatus(!formStatus))}
                    >
                      Add Musics
                    </Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="#">
                    <Button
                      primary
                      bigFont
                      onClick={() => dispatch(setformStatus(!formStatus))}
                    >
                      Add Musics
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn>
              : ''}
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
