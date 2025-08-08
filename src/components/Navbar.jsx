
import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: <Link to="/"> Home </Link>,
      icon: <Link to="/"><HomeIcon /></Link>,
    },
    {
      text: <Link to="/About"> About </Link>,
      icon: <Link to="/About"><InfoIcon /></Link>,
    },
    {
      text: <Link to="/Gallery"> Gallery </Link>,
      icon: <Link to="/Gallery"> <CollectionsIcon /> </Link>,
    },
    {
      text: <Link to="/Contact"> Contact </Link>,
      icon: <Link to="/Contact"> <PhoneRoundedIcon /> </Link >,
    },
    {
      text: <Link to="/Join"> Join </Link>,
      icon: <Link to="/Join"><VolunteerActivismOutlinedIcon /></Link>,
    },
  ];

  return (
    <nav>
      <div className="nav-name-container">
        <h1><Link to="/">EDUSKILLS</Link></h1>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="./Gallery">Gallery</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Join"><button className="primary-button">Become a Volunteer</button></Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;