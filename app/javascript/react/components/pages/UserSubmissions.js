import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    width: "80%",
  },
});

const UserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const response = fetch("/api/v1/submissions")
      .then((res) => res.json())
      .then((body) => {
        debugger;
        setSubmissions(body.submissions);
      });
  }, []);

  let mappedSubmissions = submissions.map((submission) => {
    return (
      <div key={submission.id}>
        <p>{submission.codeBlock}</p>
      </div>
    );
  });
  return (
    <div>
      <Paper className={classes.paper}>{mappedSubmissions}</Paper>
    </div>
  );
};

export default UserSubmissions;
