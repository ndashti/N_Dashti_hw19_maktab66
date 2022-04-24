import React,{useContext} from "react";
import { ThemeContext } from "../context/themeContext";
import Button from "./Button";
export default function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme}-theme`} id="header">
      <p>
        <i className="far fa-moon"></i>
        <Button className="button" id="button" onClick={toggleTheme} />
      </p>
      <h1>Where in the world?</h1>
      
    </div>
  );
}
