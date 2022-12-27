const projects = [
    {
        name: "SSAFY SCHOOL",
        period: "2022.04.11 ~ 2022.05.20",
        description: "삼성청년SW아카데미(SSAFY) 광주 캠퍼스를 만나볼 수 있는 메타버스 플랫폼",
        videoUrl: "videos/ssafyschool.mp4",
        skills: ["Unity", "Photon", "Node.js", "Django", "React", "Spring", "MySQL"],
        mainFuncs: [
            "강의와 프로젝트 수행을 위한 화면공유, 화상채팅",
            "활발한 커뮤니케이션을 위한 다양한 캐릭터 커스텀과 동작 표현",
            "Gamification이 적용된 당구 게임"
        ],
        roles: [
            "캐릭터와 카메라의 이동, 애니메이터 구현",
            "Photon과 Node.js Express를 사용해 실시간 동기화, 채팅, 화상채팅 구현",
            "당구 게임 물리엔진 개발"
        ],
        results: [
            "삼성 청년 SW 아카데미 자율 프로젝트 우수상(1등) & 결선발표회 입상",
            "멀티플레이어 게임 프로그래밍의 이해",
            "Unity와 Photon, 소켓 통신의 학습과 적용",
        ],
    },
    {
        name: "Notis",
        period: "2022.02.21 ~ 2022.04.08",
        description: "머신러닝을 활용한 Notification 통합 관리 시스템",
        videoUrl: "videos/notis.mp4",
        skills: ["Kotlin", "Python", "KoELECTRA-small"],
        mainFuncs: [
            "모바일 기기의 알림 저장, 모아보기",
            "6가지 카테고리(메신저, SNS, 게임, 금융, 쇼핑, 광고)로 알림 자동 분류",
            "알림 키워드 검색, 즐겨찾기 추가"
        ],
        roles: [
            "Python을 사용해 메신저 크롤링",
            "알림 데이터 라벨링",
            "KoBERT 모델 성능 개선"
        ],
        results: [
            "삼성 청년 SW 아카데미 전자연계 프로젝트 우수상(1등)",
            "Tensorflow와 Jupyter Notebook 사용법",
            "자연어 처리의 이해와 KoBERT 모델 학습"
        ],
    },
    {
        name: "당당!하게 면접보자",
        period: "2022.01.04 ~ 2022.02.18",
        description: "면접 연습을 도와주는 면접 스터디 플랫폼",
        videoUrl: "videos/dangdang.mp4",
        skills: ["Next.js", "Redux", "Kurento", "Spring", "MySQL", "MongoDB", "Redis"],
        mainFuncs: [
            "혼자 면접 연습",
            "일대다 면접 연습",
            "자소서 공유, 피드백 등 스터디원들과 소통",
            "면접 질문 추가 및 카테고리별로 모아보기"
        ],
        roles: [
            "FrontEnd 기술 스택 선행 학습과 선정",
            "Redux 상태관리와 Next.js hydrate 설정",
            "React에서 WebRTC 기술 적용"
        ],
        results: [
            "삼성 청년 SW 아카데미 공통 프로젝트 우수상(1등)",
            "SPA, CSR, SSR의 이해",
            "Redux state, dispatch, subscribe의 이해와 적용",
            "WebRTC 기술의 이해와 적용"
        ],
    },
    {
        name: "싸피레이스",
        period: "2021.12.01 ~ 2022.01.07",
        description: "gamification이 적용된 레이싱 알고리즘 대회",
        videoUrl: "videos/ssafyrace.mp4",
        skills: [
            "Python", "stanley method"
        ],
        mainFuncs: [
            "경로 생성",
            "주행 제어",
            "충돌 제어"
        ],
        roles: [
            "DP를 사용한 경로 탐색",
            "PID를 사용한 속도 제어와 충돌 방지 알고리즘 개발",
            "다양한 횡 방향 제어 알고리즘 적용 및 개선"
        ],
        results: [
            "삼성 청년 SW 아카데미 263개 팀 중 1등",
            "자율 주행의 이해와 적용",
            "pure pursuit, stanley method의 이해와 적용"
        ],
    },
    {
        name: "MCDJ",
        period: "2021.11.17 ~ 2021.11.26",
        description: "연대기별 영화 추천 서비스",
        videoUrl: "videos/mcdj.mp4",
        skills: ["Django", "Vue.js"],
        mainFuncs: [
            "연도별로 인기 영화 소개",
            "별자리와 조회수 기반 장르 및 영화 추천"
        ],
        roles: [
            "drf를 사용한 영화 데이터 처리",
            "Vuex를 사용한 Vue.js 상태관리",
            "carousel, infinite scroll, pagination, animation의 적용"
        ],
        results: [
            "server-client 모델의 이해",
            "Django ORM의 이해와 적용",
            "http status의 이해",
            "Vuex getters와 mutations의 이해와 적용"
        ],
    }
];

export {
    projects
};