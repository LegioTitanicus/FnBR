import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Link, Paper } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©
      <Link color="inherit" href="https://www.linkedin.com/in/alex-bernstein/">
        Alex Bernstein
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          Want to help?{" "}
          <Link href="mailto:alexbernstein7170@gmail.com" color="inherit">
            Please reach out!
          </Link>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <Copyright />
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
