import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField } from "@material-ui/core";

import CodeEditor from "../ui/CodeEditor";
import LanguageButtons from "../ui/LanguageButtons";

const useStyles = makeStyles((theme) => ({
  entryPage: {
    textAlign: "center",
  },
  textField: {
    marginLeft: "3vw",
    marginRight: "3vw",
  },
  buttons: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  submit: {
    marginBottom: "5%",
  },
}));

const Entry = (props) => {
  const classes = useStyles();

  const [language, setLanguage] = useState("javascript");
  const [codeBlock, setCodeBlock] = useState("");
  const [translationField, setTranslationField] = useState("");
  const [notice, setNotice] = useState("");

  const handleChange = (event) => {
    setTranslationField(event.target.value);
  };

  const onEditorChange = (newValue) => {
    setCodeBlock(newValue);
  };

  const handleLanguage = (event, newLanguage) => {
    setLanguage("");
    setLanguage(newLanguage);
  };

  const clear = () => {
    setCodeBlock("");
    setTranslationField("");
  };

  const csrfToken = document.querySelector("[name='csrf-token']").content;

  const handleSubmit = () => {
    event.preventDefault();
    fetch(`/api/v1/submissions`, {
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
        clear();
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  return (
    <div className={classes.entryPage}>
      <LanguageButtons
        handleLanguage={handleLanguage}
        language={language}
        className={classes.buttons}
      />
      <CodeEditor
        language={language}
        codeBlock={codeBlock}
        onEditorChange={onEditorChange}
      />
      <br />
      <Typography>Enter translation below:</Typography>
      <div className={classes.textField}>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter text here"
          multiline
          rowsMax={8}
          value={translationField}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </div>
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        className={classes.submit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Entry;
