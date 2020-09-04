import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatIcon from "@material-ui/icons/Chat";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import CodeIcon from "@material-ui/icons/Code";
import ForumIcon from "@material-ui/icons/Forum"; // Collaborate?
import FunctionsIcon from "@material-ui/icons/Functions"; //Teach?
import HomeIcon from "@material-ui/icons/Home";
import BlurOnIcon from "@material-ui/icons/BlurOn";

const drawerWidth = 440;

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const MuiDrawer = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickAway = () => {
    setMobileOpen(false);
  };

  const itemList = [
    {
      id: 1,
      text: "Home",
      link: "home",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      text: "Code",
      link: "entry",
      icon: <CodeIcon />,
    },
    {
      id: 3,
      text: "Teach",
      link: "rate",
      icon: <FunctionsIcon />,
    },
    {
      id: 4,
      text: "Predict",
      link: "predict",
      icon: <BlurOnIcon />, // or possibly allInclusive icon
    },
    // {
    //   id: 5,
    //   text: "Collaborate",
    //   link: "collaborate",
    //   icon: <ForumIcon />,
    // },

    // {
    //   id: 6,
    //   text: "My Submissions",
    //   link: "submissions",
    //   icon: <AssignmentIcon />,
    // },
  ];

  const drawer = (
    <div onClick={handleDrawerToggle}>
      <List>
        {itemList.map((page) => (
          <ListItem button key={page.id} component={Link} to={`/${page.link}`}>
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {drawer}
      </SwipeableDrawer>
    </div>
  );
};

export default MuiDrawer;
