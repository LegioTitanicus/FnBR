import React, { useState, cloneElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Switch,
  Button,
  useScrollTrigger,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";

import MuiDrawer from "./SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
  },
}));

const Topnav = (props) => {
  const classes = useStyles();
  const { handleDarkMode, darkMode } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  //   const isBig = useMediaQuery(theme.breakpoints.up("md"));

  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  // const inOut = !!document.getElementById("sign_in") ? "in" : "out";

  const loginLogout = () => {
    const inOut = !!document.getElementById("sign_in") ? "in" : "out";
    return (
      <Button
        color="inherit"
        // href={`/users/sign_${inOut}`}
        onClick={() => {
          document.getElementById(`sign_${inOut}`).click();
        }}
      >
        Log{inOut}
      </Button>
    );
  };

  const handleDrawerToggle = () => {
    console.log("toggle menu");
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <MuiDrawer className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
              {" "}
              FnBuilder
            </Typography>
            {darkMode ? <Brightness2Icon /> : <BrightnessMediumIcon />}
            <Switch
              checked={darkMode}
              onChange={handleDarkMode}
              color="secondary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            {loginLogout()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Topnav;
