import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { Grid, makeStyles } from "@material-ui/core";

import ThemeButtons from "./ThemeButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  editor: {
    marginLeft: "10%",
    marginRight: "10%",
  },
}));

const CodeEditor = (props) => {
  const { language, codeBlock, onEditorChange, readOnly } = props;
  const classes = useStyles();
  const [editorTheme, setEditorTheme] = useState("monokai");

  const handleThemeChange = (event, nextTheme) => {
    setEditorTheme(nextTheme);
  };

  return (
    <>
      <ThemeButtons
        editorTheme={editorTheme}
        handleThemeChange={handleThemeChange}
      />
      <Grid container className={classes.editor}>
        <Grid item xs={12}>
          <AceEditor
            mode={language}
            theme={editorTheme}
            onChange={onEditorChange}
            value={codeBlock}
            placeholder="code here..."
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            height="45vh"
            width="80vw"
            fontSize={14}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: true,
            }}
            readOnly={readOnly || false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CodeEditor;
