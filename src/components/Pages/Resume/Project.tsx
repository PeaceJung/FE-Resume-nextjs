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
    projectName: "샵바이 어드민 통합",
    stacks: [
      "React",
      "Typescript",
      "Nx",
      "Webpack Module Federation",
      "PostCSS",
      "Story Book",
    ],
    detail: [
      "분산된 여러 개의 쇼핑몰 어드민을 통합하는 업무를 진행하고 있음",
      <br />,
      "프로젝트 초기 세팅부터 현재까지 리드하고 있음",
      <br />,
      "대규모의 서비스를 통합/전환하기 위하여 화면 별로 개발 후 부분적으로 배포/적용할 수 있도록 함",
      <br />,
      <br />,
      <b>주요성과</b>,
      <br />,
      "- 분산된 어드민 코드 통합 (멀티레포 -> 모노레포 with Nx)",
      <br />,
      "- 기존 서비스 중단없이 새로운 기능 개발 및 배포 (Module Federation)",
      <br />,
      "- 기술 스펙 통일",
      <br />,
      "- 디자인 시스템 도입 (Story Book)",
      <br />,
    ],
  },
  {
    key: "shopby admin legacy",
    term: "2022.03 ~ ",
    people: "개발 2~7명",
    company: "NHN 커머스",
    projectName: "샵바이 어드민",
    stacks: ["Vue2", "Typescript"],
    detail: [
      "쇼핑몰을 관리할 수 있는 어드민 개발 및 유지보수",
      "서비스 플랜 별로 어드민이 있어서 기능 구현 및 유지보수를 위해 각 프로젝트 별로 중복된 작업을 필요로 함",
    ],
  },
];

const projects_douzone: Project[] = [
  {
    key: "westudio",
    term: "2020.03 ~ 2022.02",
    people: "개발 2~3명",
    company: "더존비즈온",
    projectName: "WEHAGO WE Studio",
    stacks: ["React", "Typescript", "Next.js", "Node.js", "Graphql", "AWS"],
    detail: [
      "WE Studio는 LIVE 스트리밍 서비스",
      <br />,
      "개별 영상업로드 및 실시간 라이브 스트리밍 기능 개발",
      <br />,
      <br />,
      <b>개발 상세</b>,
      <br />,
      "- AWS Elemental MediaLive를 이용하여 파이프라인 시스템을 만들었고, RTMP를 사용하여 영상송출",
      // <br />,
      // "시청자들에게는 HLS 프로토콜을 이용하여 서비스 하고 있습니다.",
      <br />,
      "- AWS MediaConvert를 사용하여 업로드된 영상을 다양한 화질옵션로 제공하도록 개발",
      <br />,
      "- Graphql Subscription을 이용하여 실시간 채팅 기능을 개발",
      <br />,
      <br />,
      <b>회고</b>,
      <br />,
      "- 프론트엔드 개발자이기 때문에 모든 기능을 구현하기 어려워 AWS 서비스를 적극 활용",
      <br />,
      "- 기술에 대한 경험은 자산이 되기 때문에 다양한 시도를 해볼 수 있는 계기가 되었음",
      <br />,
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
    projectName: "WEHAGO 전자결재 모바일",
    stacks: ["React Native", "Expo", "Typescript", "Redux", "iOS", "Android"],
    detail: [
      "WEHAGO 전자결재 웹 서비스와 실시간 연동하여 언제 어디서든 전자결재 업무를 지원하는 앱 서비스",
      <br />,
      "대시보드를 통해 처리가 필요한 결재정보를 한눈에 확인하고 빠르게 처리",
      <br />,
      <br />,
      <b>개발 상세</b>,
      <br />,
      "- Expo를 사용하여 기본 세팅",
      <br />,
      "- API로 데이터를 불러오고 Redux(LocalStorage)로 데이터 관리",
      <br />,
      "- Expo Notification을 통해 알림을 받도록 개발",
      <br />,
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
    projectName: "WEHAGO Meet (화상회의 모바일)",
    stacks: ["React Native", "Javascript", "Redux", "iOS", "Android"],
    detail: [
      "WEHAGO Meet는 온라인 화상회의 앱 서비스",
      <br />,
      <br />,
      <b>개발 상세</b>,
      <br />,
      "- Jitsi 라이브러리를 사용하여 Web-RTC 화상회의를 개발",
      <br />,
      "- Jitsi App은 오픈소스로 공개되어 있고, 커스터마이징 하여 개발",
      <br />,
      "- 통신에 관한 부분은 Jitsi에서 담당하고 있고, 대화방 리스트를 불러오고 화상회의 화면과 전반적인 UI 개발을 담당",
      <br />,
      "- 여러 사용자와 동시에 회상회의를 진행하는 화면을 개발하였고, 문서공유 기능을 더하여 회의를 진행할 수 있도록 개발",
      <br />,
      "- 백그라운드에서는 PIP모드 지원",
      <br />,
      "- 사용자 데이터를 유지하고 화면간 데이터를 공유해야하는 부분은 Redux를 사용하여 데이터를 관리",
      <br />,
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
      "비즈니스 플랫폼 위하고(WEHAGO) 서비스 개발을 위한 공통 컴포넌트 개발에 참여",
      <br />,
      "손쉽게 재사용 가능한 UI 컴포넌트를 제공",
      <br />,
      "신규 컴포넌트 개발과 여러 프로젝트에서 유기적으로 동작하고 퍼포먼스가 떨어지지 않도록 유지보수",
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
      <p className="fs-6">{project.detail}</p>

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
        </div>
      </div>
    </div>
  );
};

export default Project;
