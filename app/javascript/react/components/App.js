import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { Paper, CssBaseline, TextField, Button } from "@material-ui/core";

import Topnav from "./ui/Topnav";

import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import Entry from "./pages/Entry";
import Predict from "./pages/Predict";
import Rate from "./pages/Rate";
import UserSubmissions from "./pages/UserSubmissions";
import Collaborate from "./pages/Collaborate";
import Footer from "./ui/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
  },
}));

export const App = (props) => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);

  // const [loginState, setLoginState] = useState({
  //   username: "",
  //   password: "",
  // });
  // const handleChangeUsername = (event) => {
  //   setLoginState({
  //     ...loginState,
  //     [loginState.username]: event.currentTarget.value,
  //   });
  // };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#263238",
      },
      secondary: {
        main: "#18ffff",
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Topnav darkMode={darkMode} handleDarkMode={handleDarkMode} />
          <Paper
            variant="outlined"
            style={{ paddingTop: "70px", minHeight: "100vh" }}
          >
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/users/sign_in" component={SignIn} />
            <Route exact path="/entry" component={Entry} />
            <Route exact path="/rate" component={Rate} />
            <Route exact path="/predict" component={Predict} />
            <Route exact path="/submissions" component={UserSubmissions} />
            <Route exact path="/collaborate" component={Collaborate} />
            <Footer />
          </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
