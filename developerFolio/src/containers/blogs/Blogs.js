import React, {useContext} from "react";
import "./Blog.scss";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "main dark-mode" : "main"} id="blogs">
      <h1>블로그</h1>
      <a href="http://떵유.site" target="_blank" className={isDark ? "blog-box dark-mode-blog-box" : "blog-box"}>
        <div className="blog-img-box">
          <img alt="떵유" src={require("../../assets/images/떵유.png")} />
        </div>
        <div className="blog-text-box">
          <h3>
            떵유.site
          </h3>
          <p>
            Django를 배우고, 직접 만들었던 사이트! <br/>
            SSAFY에서 1학기에 배웠던, Algorithm과 Django 학습 내용 정리
          </p>
        </div>
      </a>
    </div>
  );
}
