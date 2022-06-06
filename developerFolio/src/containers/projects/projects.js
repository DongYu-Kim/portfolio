import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  return (
      <div className="main" id="projects">
        <h1>프로젝트</h1>
        <div>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">

            {/* <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/떵유얼굴.png")}
                  alt="떵유싸이트"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  떵유.site
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  처음 웹서버개발을 배우고 만들었던 사이트 입니다.
                  django로 만들었습니다.
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        떵유사이트
                      </span>
                  </div>
              </div>
            </div> */}

            <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/MCDJ.png")}
                  alt="MCDJ"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  MCDJ 영화추천 서비스
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  "Movie Chronology by Dongyu & Jooyoon" <br/>
                  인기있는 영화들을 년도별로 나누어 소개하여, 해당년도에 인기있었던 장르와 추억을 떠올릴 수 있습니다. 
                  유저 생일을 입력받아, 별자리 성향과 유저가 자주 조회한 영화를 기반으로 영화를 추천해줍니다. <br/>
                  django를 사용하여 유저정보와 영화데이터를 처리했고, 
                  vue를 사용하여 연대기별 영화소개, 영화추천, 세부소개, 게시판 페이지를 만들었습니다. 
                  carousel, infinite scroll, pagination, animation을 적용시켜 다채롭게 웹 페이지를 꾸몄습니다. 
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        세부설명
                      </span>
                  </div>
              </div>
            </div>

            <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/싸피레이스.jpg")}
                  alt="싸피레이스"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  싸피레이스
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  263팀이 참가한, gamification을 적용한 자동차 레이싱 1등! <br/>
                  도로 상태와 차량 상태 api가 주어지고, 주어진 정보를 기반으로 0.1초마다 차량을 제어해야 합니다.
                  수많은 장애물을 피해, 결승점까지 누가 더 빨리 도착하는지, 레이싱 경주에서 1등을 했습니다. <br/>
                  속도제어에 PID제어를 사용했고, 
                  경로마다 점수를 부여하고 DP알고리즘을 사용해 최적경로를 찾았습니다. 
                  해당 경로를 차량이 따라갈 수 있도록, stanley_method를 적용했고, 
                  장애물과 부딪힘 방지를 위한 충돌방지 로직을 구현했습니다.
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        세부설명
                      </span>
                  </div>
              </div>
            </div>

            <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/당당이.png")}
                  alt="당당이"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  당당!하게 면접보자
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  면접 연습을 도와주는 면접 스터디 플랫폼! <br/>
                  혼자 면접 연습을 할 수 있고, 면접 질문을 카테고리별로 볼 수 있고 추가 할 수 있습니다. 
                  스터디를 구하고, 자소서 공유, 피드백 등 자유롭게 소통 할 수 있고, 스터디원들끼리 면접관-지원자가 되어 모의면접을 진행 할 수 있습니다. <br/>
                  React, Nextjs, Redux, WebRTC를 적용해, 혼자 면접 연습하는 기능과 같이 면접연습하는 기능을 구현했습니다. 
                  Kurento서버와 소통해, 답변 녹화 기능, 채팅, 화상채팅, 화면 공유, 장치 변경 등을 구현했습니다. 
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        세부설명
                      </span>
                  </div>
              </div>
            </div>

            <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/노티스.png")}
                  alt="노티스"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  Notis
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  머신러닝을 활용한 Notification 통합 관리 시스템! <br/>
                  여러 알림으로부터 데이터를 수집하고, 머신러닝을 통해 알림들에게 새로운 가치를 부여합니다. 
                  기본적으로 6개의 카테고리에 대해 알림을 분류하고, 모아볼 수 있는 어플리케이션입니다. <br/>
                  스마트폰 이용실태를 분석하여, 가장 많이 사용하는 알림 종류를 정하고, 메신저, 메일 게시글 등 모바일 알림을 모았습니다. 
                  한국어 자연어 처리를 위한 여러 KoBERT모델을 사용하여, 성능을 테스트하고, KoELECTRA모델을 선정하여, 알림 데이터를 메신저, SNS, 게임, 금융, 쇼핑, 광고로 분류했습니다. 
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        세부설명
                      </span>
                  </div>
              </div>
            </div>

            <div className={isDark?"dark-mode project-card project-card-dark":"project-card project-card-light"}>
              <div className="project-image">
                <img
                  src={require("../../assets/images/project/싸피스쿨.jpg")}
                  alt="싸피스쿨"
                  className="card-image"
                ></img>
              </div>
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                  싸피스쿨
                </h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                  같이 모여 즐길 수 있는, 메타버스 캠퍼스! <br/>
                  삼성전자 광주캠퍼스의 강의장을 그대로 옮겨와 더 현실감 있는 체험을 할 수 있습니다. 
                  프로젝트를 위한 테이블과 강의를 할 수 있는 강의실에서 채팅, 화상채팅, 화면 공유 등을 할 수 있습니다. 
                  아이템을 구매하고, 실시간으로 아이템을 변경할 수 있습니다. 
                  다양한 캐릭터 동작과 카메라 움직임으로 자유로운 조작이 가능합니다. 
                  당구에 gamification을 적용해, 당구게임을 즐길 수 있습니다. 
                  <br/>
                  캐릭터 이동과 애니메이터, 카메라 조작을 구현했습니다. 
                  Photon과 Node서버 실시간 통신으로 실시간 동기화, 채팅, 화상채팅 등을 구현했습니다. 
                  쾌적한 조작감을 위해, 활동하지 않는 공간의 리소스를 지우는 로직을 구현했습니다. 
                  자연스러운 공의 움직임을 위해, 당구게임의 물리엔진을 직접 개발했습니다. 
                </p>
                  <div className="project-card-footer">
                      <span className={isDark ? "dark-mode project-tag" : "project-tag"}
                        onClick={() => openUrlInNewTab("")}
                      >
                        세부설명
                      </span>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
