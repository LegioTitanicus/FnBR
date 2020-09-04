import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

const ThemeButtons = (props) => {
  const { editorTheme, handleThemeChange } = props;
  const themes = [
    {
      id: 1,
      theme: "monokai",
    },
    {
      id: 2,
      theme: "github",
    },
    {
      id: 3,
      theme: "terminal",
    },
  ];

  const themeButtonList = themes.map((i) => {
    return (
      <ToggleButton key={i.id} value={i.theme} aria-label={i.theme}>
        {i.theme}
      </ToggleButton>
    );
  });

  return (
    <div>
      <ToggleButtonGroup
        value={editorTheme}
        exclusive
        onChange={handleThemeChange}
        aria-label="theme-selector"
      >
        {themeButtonList}
      </ToggleButtonGroup>
    </div>
  );
};

export default ThemeButtons;
