import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const LanguageButtons = (props) => {
  const { language, handleLanguage } = props;
  const languagesAvailable = [
    {
      id: 1,
      language: "javascript",
      color: "#F0DB4F",
    },
    {
      id: 2,
      language: "ruby",
      color: "#9b111e",
    },
    {
      id: 4,
      language: "python",
      color: "#4b8bbe",
    },
  ];

  const buttons = languagesAvailable.map((i) => {
    return (
      <ToggleButton key={i.id} value={i.language} aria-label={i.language}>
        {i.language}
      </ToggleButton>
    );
  });

  return (
    <div>
      <ToggleButtonGroup
        value={language}
        onChange={handleLanguage}
        aria-label="language-selector"
        exclusive
      >
        {buttons}
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageButtons;
