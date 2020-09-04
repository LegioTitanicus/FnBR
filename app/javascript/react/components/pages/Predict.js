import React, { useState } from "react";
import {
  Typography,
  Button,
  LinearProgress,
  Zoom,
  Paper,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Aug_11_GCP_api_calls from "../images/Aug_11_GCP_api_calls.png";
import LanguageButtons from "../ui/LanguageButtons";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "5%",
    textAlign: "center",
  },
  button: {
    marginTop: "3%",
  },
  pageContent: {
    textAlign: "center",
  },
  progress: {
    height: "50px",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: "10%",
  },
  textField: {
    marginLeft: "3vw",
    marginRight: "3vw",
    marginBottom: "3vh",
  },
  pic: {
    maxWidth: "80%",
    marginTop: "3%",
    marginBottom: "3%",
  },
}));

const Predict = () => {
  const classes = useStyles();
  const [translationField, setTranslationField] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`https://automl.googleapis.com/v1beta1/{parent}/datasets`, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({
        language: language,
        codeBlock: codeBlock,
        translation: translationField,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setNotice(body.notice);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const think = () => {
    setShowProgress(!showProgress);
  };

  const handleChange = (event) => {
    setTranslationField(event.target.value);
  };

  return (
    <div className={classes.pageContent}>
      <Typography variant="h4" className={classes.title}>
        Feature in development, exciting things await!
      </Typography>
      <img className={classes.pic} src={Aug_11_GCP_api_calls} />
      <div className={classes.textField}>
        <TextField
          id="outlined-multiline-flexible"
          label="Describe the code you want"
          multiline
          rowsMax={8}
          value={translationField}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          disabled
        />
      </div>
      <Typography>Choose a language</Typography>
      <LanguageButtons />
      <Button
        className={classes.button}
        variant="contained"
        onClick={think}
        disabled
      >
        Write my code!
      </Button>
      <br />
      <br />
      {showProgress && (
        <div className={classes.progress}>
          <Zoom in={showProgress}>
            <Paper elevation={0}>
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
            </Paper>
          </Zoom>
        </div>
      )}
      <br />
    </div>
  );
};

export default Predict;
