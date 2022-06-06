import React, {useContext} from "react";
import "./Skills.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <h1>소개</h1>
      <div className="skills-main-div">
        <div className="skills-image-div">
          <img
            alt="싸피떵유"
            src={require("../../assets/images/싸피떵유.jpg")}
          />
        </div>
        <div className="skills-text-div">
          <p style={{margin: "0"}}>
            <h3 style={{margin: "0 auto auto auto"}}>안녕하세요! 프론트 개발자, 무등산 호랑이 떵유 입니다.</h3>
            <p>저는 작년 여름 SW분야에 관심을 가져야겠다 느껴, 지금까지 소프트웨어 교육을 받으며 성장하고 있습니다.<br/>
              새로운 도전을 좋아해, 프로젝트에서 WebRTC, 머신러닝, 유니티를 사용한 개발 경험이 있습니다.<br/>
              문제에 직면했을 때, 문제의 원리를 파악해 끝까지 해결하는 것에 강점이 있습니다.<br/>
              그리고, 취미로 달리기와 알고리즘 문제 푸는 것을 좋아합니다.
            </p>
            <p>
              <a href="https://www.acmicpc.net/user/ehddb2252">
                <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=ehddb2252"></img>
              </a>
            </p>
            <p>사용가능한 기술 스텍은 다음과 같습니다.</p>
            <div className="icon-box">
              <p className="icons">
                <img alt="파이썬" src={require("../../assets/images/logos/python.png")}></img>
                <img alt="자바스크립트" src={require("../../assets/images/logos/javascript.png")}></img>
                <img alt="씨샤프" src={require("../../assets/images/logos/csharp.png")}></img>
              </p>
              <p className="icons">
                <img alt="쟝고" src={require("../../assets/images/logos/django.png")}></img>
                <img alt="뷰" src={require("../../assets/images/logos/vue.png")}></img>
                <img alt="리액트" src={require("../../assets/images/logos/react.png")}></img>
                <img alt="리덕스" src={require("../../assets/images/logos/redux.png")}></img>
                <img alt="넥스트" src={require("../../assets/images/logos/next.png")}></img>
                <img alt="쿠렌토" src={require("../../assets/images/logos/kurento.png")}></img>
              </p>
              <p className="icons">
                <img alt="유니티" src={require("../../assets/images/logos/unity.png")}></img>
                <img alt="쏘켓아이오" src={require("../../assets/images/logos/socketio.png")}></img>
                <img alt="익스프레스" src={require("../../assets/images/logos/express.png")}></img>
              </p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
