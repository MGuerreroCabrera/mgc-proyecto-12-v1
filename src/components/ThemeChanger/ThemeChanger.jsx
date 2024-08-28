import "./ThemeChanger.css";
import { useState } from "react";
import { useThemeContext } from "../../hooks/useThemeContext";
import ReactSwitch from "react-switch";

const ThemeChanger = () => {
    const { themeContext, setThemeContext } = useThemeContext();

    const [theme, setTheme] = useState("./assets/icons/moon.svg");
    const [checked, setChecked] = useState(false);

    const handleSwitch = (nextChecked) => {
        setThemeContext((state)=> (state === "light" ? "dark" : "light"));
        setChecked(nextChecked);
        setTheme((theme) => (theme === "./assets/icons/sun.svg" ? "./assets/icons/moon.svg" : "./assets/icons/sun.svg"));
        
    }
  return (
    <div id="theme-changer">
      <img src={ theme } alt="Theme icon" />
      <ReactSwitch
      onChange = { handleSwitch }
      checked = { checked }
      onColor = "#ff9900"
      onHandleColor = "#ffffff"
      handleDiameter = { 20 }
      uncheckedIcon = { false }
      checkedIcon ={ false }
      boxShadow = "0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow = "0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height = { 20 }
      width = { 40 }
      className = "react-switch"
      id = "material-switch"
      />
    </div>
  )
}

export default ThemeChanger