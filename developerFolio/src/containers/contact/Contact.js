import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
      <div id="contact" className="footer">
        <div className="icons">
          <a target="_blank" href="https://github.com/DongYu-Kim">
            <img alt="깃허브" src={require("../../assets/images/logos/github.png")}/>
          </a>
          <a target="_blank" href="mailto:ehddb2252@gmail.com">
            <img alt="깃허브" src={require("../../assets/images/logos/gmail.png")}/>
          </a>
          <a target="_blank" href="https://open.kakao.com/o/sBHwj8cd">
            <img alt="카카오" src={require("../../assets/images/logos/kakao.png")}/>
          </a>
        </div>
      </div>
  );
}
