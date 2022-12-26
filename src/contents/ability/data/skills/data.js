const parts = ["Language", "FrontEnd", "BackEnd", "Others"];

const skills = {
    Language: [
        {
            name: "C",
            imgUrl: 'images/icons/c.png',
            contents: ["포인터와 메모리 동적할당을 사용해 자유롭게 코드 구현"],
            level: 4
        },
        {
            name: "C++",
            imgUrl: 'images/icons/cpp.png',
            contents: ["코드 이해 및 간단한 코드 작성"],
            level: 2
        },
        {
            name: "C#",
            imgUrl: 'images/icons/csharp.png',
            contents: ["Unity에서 어려움 없이 사용"],
            level: 3
        },
        {
            name: "Python",
            imgUrl: 'images/icons/python.png',
            contents: ["Django, Tensorflow를 사용하는데 어려움 없이 사용", "함수와 클래스를 사용해 자유롭게 코드 구현"],
            level: 4
        },
        {
            name: "Java",
            imgUrl: 'images/icons/java.png',
            contents: ["컬렉션, 스레드, 인터페이스 등을 사용"],
            level: 3
        },
        {
            name: "Javascript",
            imgUrl: 'images/icons/javascript.png',
            contents: ["closure, promise 등의 개념을 사용해 자유롭게 코드 구현", "Vue.js, React 등에서 어려움 없이 사용"],
            level: 4
        }
    ],
    FrontEnd: [
        {
            name: "Vue.js",
            imgUrl: 'images/icons/vue.png',
            contents: ["오류 없이 동작하는 웹페이지 제작"],
            level: 3
        },
        {
            name: "React",
            imgUrl: 'images/icons/react.png',
            contents: ["다양한 라이브러리를 사용해 빠르게 웹 페이지 제작"],
            level: 4
        },
        {
            name: "Redux",
            imgUrl: 'images/icons/redux.png',
            contents: ["dispatch, subscribe 등의 개념을 사용해 React 상태관리에 사용"],
            level: 3
        },
        {
            name: "Next.js",
            imgUrl: 'images/icons/next.png',
            contents: ["SSR을 적용한 웹페이지 제작"],
            level: 3
        }
    ],
    BackEnd: [
        {
            name: "Django",
            imgUrl: 'images/icons/django.png',
            contents: ["웹페이지 개발", "drf를 사용한 웹서버 개발"],
            level: 4
        },
        {
            name: "Express",
            imgUrl: 'images/icons/express.png',
            contents: ["웹 서버 개발", "SocketIO를 사용한 소켓 서버 개발"],
            level: 4
        }
    ],
    Others: [
        {
            name: "SocketIO",
            imgUrl: 'images/icons/socketio.png',
            contents: ["클라이언트 상태, 채팅, 화상 채팅 등의 실시간 동기화 구현"],
            level: 4
        },
        {
            name: "Kurento",
            imgUrl: 'images/icons/kurento.png',
            contents: ["WebRTC의 이해와 웹페이지 적용"],
            level: 3
        },
        {
            name: "Tensorflow",
            imgUrl: 'images/icons/tensorflow.png',
            contents: ["머신러닝의 이해와 KoBERT 모델 사용"],
            level: 2
        },
        {
            name: "Unity",
            imgUrl: 'images/icons/unity.png',
            contents: ["Photon Cloud, 소켓 통신 적용", "오브젝트와 카메라 엔진 개발"],
            level: 4
        }
    ]
};

export {
    parts,
    skills
}