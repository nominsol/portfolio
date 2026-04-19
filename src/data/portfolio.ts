export const profile = {
  name: "노민솔",
  role: `프론트엔드를 중심으로
  서비스 전반을 이해하는 개발자`,
  intro: `기술만을 위한 개발이 아닌, 실제 사용자가 사용하는 서비스를 만드는 것에 가치를 둡니다.
  이러한 가치관을 바탕으로 사용자에게 의미 있는 가치를 전달하는 개발자가 되고자 합니다.`,
  resumeUrl: "#",
  githubUrl: "#",
};

export const strengths = [
  {
    title: "데이터 정합성 확보 역량",
    description:
      "이기종 DB(Oracle, PostgreSQL, SQLite) 간의 데이터 동기화 프로세스를 설계하고, 결제 전문 분석을 통해 금융 거래의 무결성을 입증한 경험이 있습니다.",
  },
  {
    title: "병목 지점 추적 및 최적화",
    description:
      "원인 불명의 시스템 지연 발생 시, 800여 건의 로그 데이터를 전수 분석하여 타임스탬프 단위로 병목을 찾아내고 로직을 30% 이상 개선했습니다.",
  },
  {
    title: "비즈니스 가치를 기술로 치환하는 가교 역할",
    description:
      "기술적 정답에 매몰되지 않고 사업적 목표와 사용자 편의 사이의 최적점을 찾아내어, 팀 전체의 목표 달성에 기여하는 협업 능력을 갖췄습니다.",
  },
];

export const skillCategories = [
  {
    name: "프론트엔드",
    items: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Delphi",
    ],
  },
  {
    name: "백엔드",
    items: ["Go", "REST API", "Kafka"],
  },
  {
    name: "데이터베이스",
    items: ["SQLite", "Oracle", "PostgreSQL"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Vite", "Vercel"],
  },
];

export type ProjectType = {
  title: string;
  type: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  people: string;
  period: string;
  summary: string;
  details: ProjectDetail[];
};

export type ProjectDetail = {
  title: string;
  contents: string[];
};

export const projects: ProjectType[] = [
  {
    title: "P.E.T (Previous Examination Training)",
    type: "Team Project",
    description: "강의 자료를 기반으로 예상 문제를 자동 생성하는 웹 서비스",
    image: "/images/pet_web.png",
    techStack: [
      "Python",
      "Streamlit",
      "Java",
      "Spring Boot",
      "MySQL",
      "OpenAI GPT",
      "PyPDF2",
      "python_docx",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/nominsol/P.E.T",
    people: "4명",
    period: "2023.03 ~ 2023.06",
    summary:
      "강의 자료를 기반으로 예상 문제를 자동 생성하는 AI 학습 지원 서비스로, 사용자 입력부터 문제 생성 결과까지 이어지는 흐름을 구현하고 문제 생성 로직을 직접 설계했습니다.",
    details: [
      {
        title: "AI 기반 문제 생성 로직 설계 및 구현",
        contents: [
          "사용자가 입력한 학습 내용을 기반으로 예상 문제를 생성하는 기능을 구현했습니다.",
          "문제 유형과 개수를 설정할 수 있도록 하여 사용자 맞춤형 문제 생성이 가능하도록 설계했습니다.",
          "OpenAI GPT를 활용해 입력 데이터를 분석하고 문제와 답을 분리하는 구조를 구현했습니다.",
        ],
      },
      {
        title: "메인 화면 및 사용자 흐름 UI/UX 구현",
        contents: [
          "메인 화면부터 입력, 결과 화면까지 이어지는 사용자 흐름을 설계했습니다.",
          "입력 → 설정 → 결과 구조로 UI를 개선하여 사용자 경험을 향상시켰습니다.",
        ],
      },
      {
        title: "문제 생성 결과 화면 구성 및 UX 개선",
        contents: [
          "문제와 정답을 구분하여 가독성을 높이는 구조로 설계했습니다.",
          "생성된 결과를 반복적으로 확인할 수 있도록 화면 흐름을 개선했습니다.",
        ],
      },
    ],
  },
  {
    title: "Couch Potato's Plan",
    type: "Team Project",
    description:
      "사용자의 일정과 시간을 효율적으로 관리할 수 있도록 설계한 안드로이드 계획 관리 앱",
    image: "/images/couch_app.png",
    techStack: [
      "Java",
      "Android Studio",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "RecyclerView",
      "Fragment",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/nominsol/Couch-Potato-s-plan",
    people: "5명",
    period: "2022.09 ~ 2022.11",
    summary:
      "주간·당일·월간 단위로 일정을 관리할 수 있는 안드로이드 앱으로, 사용자 입력을 기반으로 일정 관리 UI를 구현하고 Firebase를 활용한 데이터 연동, 알림 기능, 테마 설정 기능을 개발했습니다. 또한 고정 일정과 제외 시간을 고려하여 일정을 재배치하는 reroll 기능을 구현했습니다.",
    details: [
      {
        title: "일정 관리 UI 및 사용자 흐름 구현",
        contents: [
          "주간, 당일, 월간 화면을 Fragment 구조로 분리하여 일정 관리 기능을 구현했습니다.",
          "RecyclerView를 활용해 일정 리스트를 구성하고, 사용자 입력부터 조회까지의 흐름을 설계했습니다.",
          "사용자가 직관적으로 일정을 확인하고 관리할 수 있도록 UI/UX를 개선했습니다.",
        ],
      },
      {
        title: "Firebase 기반 데이터 연동",
        contents: [
          "Firebase Authentication을 활용해 사용자 인증 기능을 구현했습니다.",
          "Firebase Realtime Database를 사용해 사용자별 일정 데이터를 저장하고 조회하는 기능을 개발했습니다.",
          "사용자 UID를 기준으로 데이터를 분리하여 개인별 일정 관리가 가능하도록 구성했습니다.",
        ],
      },
      {
        title: "알림 및 테마 설정 기능 구현",
        contents: [
          "일정에 맞춰 알림이 동작하도록 알림 기능을 구현했습니다.",
          "사용자가 앱의 색상 테마를 변경할 수 있도록 테마 설정 기능을 개발했습니다.",
          "사용자 설정에 따라 UI가 동적으로 변경되도록 구성했습니다.",
        ],
      },
      {
        title: "일정 재배치(reroll) 로직 구현",
        contents: [
          "사용 가능한 시간대를 기반으로 일정을 재배치하는 reroll 기능을 구현했습니다.",
          "고정 일정과 제외 시간을 고려하여 충돌이 발생하지 않도록 시간 배정 로직을 설계했습니다.",
          "단순 랜덤이 아닌 조건 기반으로 일정이 배치되도록 하여 실사용성을 높였습니다.",
        ],
      },
    ],
  },
  {
    title: "POS 시스템 삼성월렛 모바일 현금IC 결제 기능 개발",
    type: "Company Project",
    description:
      "POS 시스템에서 삼성월렛 기반 모바일 현금IC 결제 기능을 개발하여 새로운 결제 수단을 지원",
    image: "/images/cashic.png",
    techStack: ["Delphi"],
    liveUrl: "#",
    githubUrl: "#",
    people: "1명",
    period: "2025.07 ~ 2025.07",
    summary:
      "POS 시스템에서 삼성월렛을 활용한 모바일 현금IC 결제 기능을 개발하여 기존 결제 방식 외에 새로운 결제 수단을 지원하고 결제 프로세스를 확장했습니다.",
    details: [
      {
        title: "모바일 현금IC 결제 기능 개발",
        contents: [
          "POS 시스템에서 삼성월렛 기반 모바일 현금IC 결제 기능을 구현했습니다.",
          "기존 결제 흐름에 새로운 결제 수단을 추가하여 결제 프로세스를 확장했습니다.",
          "사용자 입력 및 결제 요청부터 승인 결과 처리까지 전체 흐름을 구현했습니다.",
        ],
      },
      {
        title: "외부 결제 시스템 연동",
        contents: [
          "외부 결제 API와 연동하여 결제 요청 및 응답 처리 로직을 구현했습니다.",
          "결제 승인, 실패, 예외 상황을 고려한 처리 로직을 설계했습니다.",
        ],
      },
      {
        title: "데이터 처리 및 안정성 고려",
        contents: [
          "결제 데이터의 정확성과 안정성을 고려하여 처리 로직을 구현했습니다.",
          "예외 상황 발생 시 오류를 방지하기 위한 로직을 적용했습니다.",
        ],
      },
    ],
  },
  {
    title: "POS 관리자 웹사이트 기능 개발",
    type: "Company Project",
    description:
      "POS 운영을 위한 관리자 웹사이트 기능을 개발하여 데이터 관리 및 운영 효율성을 개선",
    image: "/images/admin_web.png",
    techStack: [
      "JavaScript",
      "Vue.js",
      "REST API",
      "PostgreSQL",
      "Oracle",
      "SQLite",
    ],
    liveUrl: "#",
    githubUrl: "#",
    people: "1명",
    period: "2025.08 ~ 2025.09",
    summary:
      "POS 시스템 운영을 위한 관리자 웹사이트 기능을 개발하여 데이터 관리 및 운영 효율성을 개선하고, 사용자 편의성을 고려한 UI를 구현했습니다.",
    details: [
      {
        title: "관리자 웹 기능 구현",
        contents: [
          "POS 버전 변경, 영수증 문구 변경 등 POS 설정을 관리할 수 있는 관리자 웹사이트 기능을 개발했습니다.",
          "데이터 조회, 수정, 관리 기능을 구현하여 운영 효율성을 개선했습니다.",
        ],
      },
      {
        title: "프론트엔드 UI 및 사용자 흐름 구현",
        contents: [
          "사용자가 데이터를 쉽게 확인하고 관리할 수 있도록 UI를 설계했습니다.",
          "사용자 흐름을 고려하여 직관적인 인터페이스를 구현했습니다.",
        ],
      },
      {
        title: "API 연동 및 데이터 처리",
        contents: [
          "백엔드 API와 연동하여 데이터를 조회 및 처리하는 기능을 구현했습니다.",
          "데이터 상태에 따라 UI가 동적으로 변경되도록 구성했습니다.",
        ],
      },
    ],
  },
];

export const education = [
  {
    title: "아성 다이소 근무",
    subtitle: "POS 시스템 및 관리자 웹사이트 개발 및 운영",
    period: "2024.11 ~ 2025.11",
    bullets: [
      "POS 시스템과 관리자 웹사이트의 프론트엔드, 백엔드 개발 및 운영",
      "POS 시스템: Delphi를 이용한 매장 결제 로직 및 하드웨어(카드 단말기, 프린터) 제어 개발",
      "관리자 웹사이트: Vue.js 기반의 전사 백오피스 기능 개발",
      "백엔드 및 인프라: GO 기반의 API 서버 개발 및 Kafka를 활용한 비동기 메시징 처리",
    ],
  },
  {
    title: "명지대학교",
    subtitle: "컴퓨터공학 전공",
    period: "2020.03 ~ 2024.02",
    bullets: [
      "학점 4.19/4.5로 차석 졸업",
      "웹 프로그래밍, 운영체제, 데이터베이스 설계 등 컴퓨터공학 핵심 과목 이수",
    ],
  },
];

export const certifications = [
  {
    title: "SQL개발자(SQLD) 취득",
    subtitle: "",
    period: "2025.04.04",
    bullets: [],
  },
  {
    title: "정보처리기사 취득",
    subtitle: "",
    period: "2024.06.18",
    bullets: [],
  },
  {
    title: "캡스톤디자인 경진대회 은상 수상",
    subtitle: "",
    period: "2023.06.12",
    bullets: [
      "강의 자료를 기반으로 예상 시험 문제를 자동 생성하는 AI 기반 웹 서비스를 개발한 팀 프로젝트로 은상 수상",
    ],
  },
  {
    title: "한국게임학회 춘계 학술발표대회 우수발표상 수상",
    subtitle: "",
    period: "2021.06.19",
    bullets: [
      "세로 화면형 모바일 게임의 서비스 타당성을 분석한 연구 논문을 작성하여 학회에서 발표 후 발표 우수상 수상",
      "닌텐도의 모바일 게임 4종을 대상으로 UI/UX 구조와 한 손 조작 편의성, 공통 조작 구역, 정보 UI 배치 요소를 분석하여 세로형 게임 서비스 설계 시 고려해야 할 UX 요소 도출",
    ],
  },
];

export const contact = {
  phone: "010-4916-3851",
  email: "xmxmxm3577@naver.com",
};
