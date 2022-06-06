import React, {useContext} from "react";
import "./Education.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="education">
      <h1>교육</h1>
      <div className="education-card-container">
        <div className="education-card">
          <div className="img-box">
            <img alt="고려대" src={require("../../assets/images/고려대.jpg")}/>
          </div>
          <div className="text-box">
            <h3>고려대학교</h3>
            <p>2014.03 ~ 2020.08</p>
            <h4>기계공학 전공</h4>
          </div>
        </div>
        <div className="education-card">
          <div className="img-box">
            <img alt="싸피" src={require("../../assets/images/싸피.jpg")}/>
          </div>
          <div className="text-box">
            <h3>Samsung SW Academy For Youth</h3>
            <p>2021.06 ~ </p>
            <h4>알고리즘, 자료구조, 웹개발 학습</h4>
            <ul>
              <li>1학기 성적우수상</li>
              <li>gamification을 적용한 자동차 레이싱 1등</li>
              <li>웹 기반 서비스 프로젝트 우수상</li>
              <li>삼성전자 MX사업부 연계 프로젝트 우수상</li>
              <li>자율 프로젝트 우수상</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
