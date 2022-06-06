import React, {useContext} from "react";
import "./SplashScreen.css";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <img alt="비둘기" src={require("../../assets/images/비둘기.gif")}/>
      </div>
    </div>
  );
}
