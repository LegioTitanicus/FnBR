import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Paper, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    marginTop: "8%",
  },
  blurb: {
    marginTop: "3%",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography align="center" variant="h3" className={classes.title}>
        Welcome to FnBuilder9k!
      </Typography>
      <Paper>
        <Typography align="center" variant="h5" className={classes.blurb}>
          Help build a machine learning model that can (eventually) write our
          code for us.
        </Typography>
        <Typography align="center" variant="h5" className={classes.blurb}>
          Go to{" "}
          <Link component={RouterLink} to="/entry" color="inherit">
            "Code"
          </Link>{" "}
          to submit translations,{" "}
          <Link component={RouterLink} to="/rate" color="inherit">
            "Teach"
          </Link>{" "}
          to rate other users submissions and{" "}
          <Link component={RouterLink} to="/predict" color="inherit">
            "Predict"
          </Link>{" "}
          to have FnBuilder write your code.
        </Typography>
        <br />
      </Paper>
    </div>
  );
};

export default LandingPage;
