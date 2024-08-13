import { ReactNode } from "react";

import styles from "../../../../public/css/Common.module.css";

type Project = {
  key: string;
  term: ReactNode;
  people?: string;
  company: string;
  projectName: string;
  stacks: string[];
  detail: ReactNode;
  image?: string;
};

const projects_nhn: Project[] = [
  {
    key: "shopby admin",
    term: "2022.03 ~ ",
    people: "개발 5~7명",
    company: "NHN 커머스",
    projectName: "쇼핑몰 어드민 통합 프로젝트 (Lead Developer)",
    stacks: [
      "React",
      "TypeScript",
      "Nx",
      "Webpack Module Federation",
      "PostCSS",
      "Story Book",
    ],
    detail: [
      <b>업무 내용</b>,
      <br />,
      "⦁ 분산된 여러 쇼핑몰 어드민 시스템을 통합하는 프로젝트를 리드하여, 프로젝트 초기 세팅부터 현재까지 전반적인 개발을 주도.",
      <br />,
      "⦁ 대규모 서비스의 원활한 전환을 위해 화면 별로 개발을 진행하고, 기존 서비스 중단 없이 새로운 기능을 부분적으로 배포 및 적용할 수 있도록 구현.",
      <br />,
      <br />,
      <b>주요 성과</b>,
      <br />,
      "1. 코드 통합",
      <br />,
      <span className={styles["span-t4"]}>
        멀티레포에서 모노레포로 전환(Nx 활용)하여, 코드 관리의 효율성을 크게
        향상.
      </span>,
      <br />,
      "2. 무중단 배포",
      <br />,
      <span className={styles["span-t4"]}>
        Webpack Module Federation을 활용하여, 기존 서비스 중단 없이 새로운
        기능을 개발 및 배포.
      </span>,
      <br />,
      "3. 기술 스펙 통일",
      <br />,
      <span className={styles["span-t4"]}>
        분산된 서비스의 기술 스펙을 통일하여, 유지보수성과 협업 효율성을 높임.
      </span>,
      <br />,
      "4. 디자인 시스템 도입",
      <br />,
      <span className={styles["span-t4"]}>
        Storybook을 통해 UI 컴포넌트 디자인 시스템을 도입, 일관된 UI/UX 제공 및
        재사용성 극대화.
      </span>,
    ],
  },
  {
    key: "shopby admin legacy",
    term: "2022.03 ~ ",
    people: "개발 2~7명",
    company: "NHN 커머스",
    projectName: "샵바이 어드민",
    stacks: ["Vue2", "TypeScript"],
    detail: [
      <b>업무 내용</b>,
      <br />,
      "⦁ 쇼핑몰을 관리할 수 있는 어드민 개발 및 유지보수",
      <br />,
      "⦁ 서비스 플랜 별로 어드민이 존재하여 기능 구현 및 유지보수를 위해 각 프로젝트 별로 중복된 작업을 필요로 함",
    ],
  },
];

const projects_douzone: Project[] = [
  {
    key: "westudio",
    term: "2020.03 ~ 2022.02",
    people: "개발 2~3명",
    company: "더존비즈온",
    projectName: "WE Studio : 라이브 스트리밍 서비스 개발",
    stacks: ["React", "TypeScript", "Next.js", "Node.js", "Graphql", "AWS"],
    detail: [
      <b>업무 내용</b>,
      <br />,
      "⦁ WE Studio는 개별 영상 업로드 및 실시간 라이브 스트리밍 기능을 제공하는 서비스로, 실시간 소통과 고품질 영상 제공을 목표로 개발.",
      <br />,
      <br />,
      <b>주요 개발 내용</b>,
      <br />,
      "1. 라이브 스트리밍",
      <br />,
      <span className={styles["span-t4"]}>
        AWS Elemental MediaLive를 활용해 파이프라인 시스템을 구축, RTMP를
        사용하여 영상 송출 기능을 구현.
      </span>,
      <br />,
      "2. 영상 처리",
      <br />,
      <span className={styles["span-t4"]}>
        AWS MediaConvert를 사용해 업로드된 영상을 다양한 화질 옵션으로 변환 및
        제공, 사용자에게 최적의 시청 경험을 제공.
      </span>,
      <br />,
      "3. 실시간 채팅",
      <br />,
      <span className={styles["span-t4"]}>
        GraphQL Subscription을 이용해 실시간 채팅 기능을 개발, 사용자 간 실시간
        소통 가능.
      </span>,
      <br />,
      <br />,
      <b>회고 및 성찰</b>,
      <br />,
      "⦁ 프론트엔드 개발자로서 모든 기능을 직접 구현하기 어려운 부분을 AWS 서비스를 적극 활용하여 해결하였고, 클라우드 기반 솔루션의 장점을 경험할 수 있었음.",
      <br />,
      "⦁ 새로운 기술을 시도하고 경험하면서, 이를 자산으로 삼아 다양한 도전에 대한 자신감을 얻음.",
      <br />,
      <br />,
      <b>출시 및 배포</b>,
      <br />,
      <span>
        Link :{" "}
        <a
          className="link-primary"
          href="https://wehago.com/westudio"
          target="_blank"
        >
          https://wehago.com/westudio
        </a>
      </span>,
    ],
    image: "images/WESTUDIO.png",
  },
  {
    term: "2019.09 ~ 2020.06",
    key: "eapproval",
    people: "개발 1명",
    company: "더존비즈온",
    projectName: "WEHAGO 전자결재 모바일 앱 개발",
    stacks: ["React Native", "Expo", "TypeScript", "Redux", "iOS", "Android"],
    detail: [
      <b>업무 내용</b>,
      <br />,
      "⦁ WEHAGO 전자결재 웹 서비스와 실시간 연동하여, 언제 어디서나 전자결재 업무를 처리할 수 있는 모바일 앱을 개발.",
      <br />,
      "⦁ 대시보드를 통해 처리해야 할 결재 정보를 한눈에 확인하고 신속하게 처리할 수 있는 기능 제공.",
      <br />,
      <br />,
      <b>주요 개발 내용</b>,
      <br />,
      "1. 앱 초기 세팅",
      <br />,
      <span className={styles["span-t4"]}>
        Expo를 사용하여 프로젝트를 신속하게 세팅하고, React Native 기반의 앱을
        구축.
      </span>,
      <br />,
      "2. 데이터 관리",
      <br />,
      <span className={styles["span-t4"]}>
        API를 통해 서버로부터 데이터를 불러오고, Redux(LocalStorage)를 활용하여
        데이터 상태를 관리.
      </span>,
      <br />,
      "3. 실시간 알림",
      <br />,
      <span className={styles["span-t4"]}>
        Expo Notification을 이용해 결재 요청 및 업데이트에 대한 실시간 알림 기능
        구현.
      </span>,
      <br />,
      <br />,
      <b>출시 및 배포</b>,
      <br />,
      <span>
        Link :{" "}
        <a
          className="link-primary"
          href="https://apps.apple.com/us/app/wehago-%EC%A0%84%EC%9E%90%EA%B2%B0%EC%9E%AC/id1485842855"
          target="_blank"
        >
          앱스토어
        </a>{" "}
        /{" "}
        <a
          className="link-primary"
          href="https://play.google.com/store/apps/details?id=com.douzone.android.eapprovals&hl=ln&pli=1"
          target="_blank"
        >
          구글플레이스토어
        </a>
      </span>,
    ],
    image: "images/eapprovals.png",
  },
  {
    term: ["2019.03 ~ 2020.07"],
    // term: ["2019.03 ~ 2020.07", <br />, "(2019.06월 정식 서비스)"],
    key: "meet",
    people: "개발 2명",
    company: "더존비즈온",
    projectName: "WEHAGO Meet : 온라인 화상회의 앱 개발",
    stacks: ["React Native", "Javascript", "Redux", "iOS", "Android"],
    detail: [
      <b>업무 내용</b>,
      <br />,
      <span className={styles["span-t4"]}>
        ⦁ WEHAGO Meet는 온라인 화상회의를 위한 앱 서비스로, 여러 사용자와 동시에
        화상회의를 진행할 수 있는 기능을 제공하며, 문서 공유와 PIP(그림 속 그림)
        모드를 지원.
      </span>,
      <br />,
      <br />,
      <b>주요 개발 내용</b>,
      <br />,
      "1. 화상회의 구현",
      <br />,
      <span className={styles["span-t4"]}>
        Jitsi 라이브러리를 사용하여 WebRTC 기반의 화상회의 기능을 개발.
      </span>,
      <br />,
      <span className={styles["span-t4"]}>
        오픈소스 Jitsi 앱을 커스터마이징하여 서비스에 최적화.
      </span>,
      <br />,
      "2. UI 및 기능 개발",
      <br />,
      <span className={styles["span-t4"]}>
        대화방 리스트를 불러오고, 화상회의 화면과 전반적인 UI를 개발.
      </span>,
      <br />,
      <span className={styles["span-t4"]}>
        동시에 여러 사용자가 참여하는 회의 화면을 구성하고, 문서 공유 기능을
        추가하여 회의 중에 실시간 협업이 가능하도록 구현.
      </span>,
      <br />,
      "3. PIP 모드 지원",
      <br />,
      <span className={styles["span-t4"]}>
        백그라운드에서도 회의를 계속 진행할 수 있도록 PIP 모드를 지원.
      </span>,
      <br />,
      "4. 데이터 관리",
      <br />,
      <span className={styles["span-t4"]}>
        사용자 데이터 유지와 화면 간 데이터 공유는 Redux를 사용하여 효과적으로
        관리.
      </span>,
      <br />,
      <br />,
      <b>출시 및 배포</b>,
      <br />,
      <span>
        Link :{" "}
        <a
          className="link-primary"
          href="https://apps.apple.com/us/app/wehago-meet/id1455726925"
          target="_blank"
        >
          앱스토어
        </a>{" "}
        /{" "}
        <a
          className="link-primary"
          href="https://play.google.com/store/apps/details?id=com.wehago.meet&hl=ko"
          target="_blank"
        >
          구글플레이스토어
        </a>
      </span>,
    ],
    image: "images/meet.png",
  },
  {
    term: "2019.01 ~ 2019.07",
    key: "uicomponent",
    company: "더존비즈온",
    projectName: "WEHAGO 공통 UI 컴포넌트",
    stacks: ["React", "Javascript"],
    detail: [
      <b>업무 내용</b>,
      <br />,
      <span className={styles["span-t4"]}>
        ⦁ 비즈니스 플랫폼 위하고(WEHAGO) 서비스 개발을 위한 공통 컴포넌트 개발에
        참여.
      </span>,
      <br />,
      <span className={styles["span-t4"]}>
        ⦁ 손쉽게 재사용 가능한 UI 컴포넌트를 제공.
      </span>,
      <br />,
      <span className={styles["span-t4"]}>
        ⦁ 신규 컴포넌트 개발과 여러 프로젝트에서 유기적으로 동작하고 퍼포먼스가
        떨어지지 않도록 유지보수.
      </span>,
    ],
  },
];

const projects_redmobile: Project[] = [
  {
    key: "gm tool",
    term: "2018.10 ~ 2018.12",
    people: "개발 1명",
    company: "레드모바일",
    projectName: "웹기반 게임 운영툴 개발",
    stacks: ["React", "Javascript", "Bootstrap", "Node.js"],
    detail: [
      <b>Frontend 개발</b>,
      <br />,
      "1. 캐릭터 커스터마이징 툴",
      <br />,
      <span className={styles["span-t4"]}>
        운영자가 캐릭터를 조회하고 커스터마이징할 수 있는 웹 기반 도구를 개발.
      </span>,
      <br />,
      "2. 서버 모니터링 대시보드",
      <br />,
      <span className={styles["span-t4"]}>
        서버 상태를 실시간으로 모니터링할 수 있는 웹 대시보드를 개발, 모니터링용
        서버로부터 소켓을 통해 실시간 데이터를 받아 UI에 시각적으로 표현.
      </span>,
      <br />,
      <br />,
      <b>Backend 개발</b>,
      <br />,
      "1. 중간 서버 개발",
      <br />,
      <span className={styles["span-t4"]}>
        Node.js를 사용하여 게임 서버에서 데이터를 받아와 가공한 후, 프론트엔드에
        필요한 형태로 제공하는 중간 서버를 개발.
      </span>,
      <br />,
      "2. API 개발",
      <br />,
      <span className={styles["span-t4"]}>
        프론트엔드와의 통신을 위한 API를 개발, 프론트엔드에서 중간 서버를 통해
        게임 서버와 데이터를 주고받도록 구현.
      </span>,
      <br />,
      "3. 소켓 통신",
      <br />,
      <span className={styles["span-t4"]}>
        각 서비스는 소켓을 통해 실시간으로 연결하여 통신을 원활하게 처리.
      </span>,
    ],
  },
];

const ProjectDetail = ({ project }: { project: Project }) => (
  <div key={project.key} className="row pb-3 mb-3">
    <div className="col-3 fw-bold">
      <div>
        <span>{project.term}</span>
      </div>
      <div>
        <span>{project.people}</span>
      </div>
    </div>
    <div className="col-9">
      <h3 className="fs-5">
        {/* [{project.company}]&nbsp; */}
        {project.projectName}
      </h3>
      <div className="mb-2">
        {project.stacks.map((stack) => (
          <span className="badge bg-primary me-1" key={stack}>
            {stack}
          </span>
        ))}
      </div>
      <p className="fs-6" style={{ whiteSpace: "pre-wrap" }}>
        {project.detail}
      </p>

      {/* {project.image && (
        <img src={project.image} className="img-fluid" alt="이미지" />
      )} */}
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="row gx-5 project">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">
            <span className={styles["h2-title"]}>프로젝트</span>
          </h2>

          <div>
            <h3 className="text-uppercase">NHN 커머스</h3>
            {projects_nhn.map((project) => (
              <ProjectDetail project={project} key={project.key} />
            ))}
          </div>

          <div>
            <h3 className="text-uppercase">더존비즈온</h3>
            {projects_douzone.map((project) => (
              <ProjectDetail project={project} key={project.key} />
            ))}
          </div>

          <div>
            <h3 className="text-uppercase">레드모바일</h3>
            {projects_redmobile.map((project) => (
              <ProjectDetail project={project} key={project.key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
