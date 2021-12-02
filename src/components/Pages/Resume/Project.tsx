const projects = [
  {
    key: "westudio",
    term: "2020.03 ~ ",
    people: "개발 2~3명",
    company: "더존비즈온",
    projectName: "WEHAGO WE Studio",
    stacks: ["React", "Typescript", "Next.js", "Node.js", "Graphql", "AWS"],
    detail: [
      "WE Studio는 LIVE 스트리밍 서비스입니다. 개별 영상업로드 및 실시간 라이브 스트리밍 기능을 개발하였습니다.",
      <br />,
      "AWS Elemental MediaLive를 이용하여 파이프라인 시스템을 만들었고, RTMP 프로토콜을 영상송출 하는 용도로 사용하였습니다.",
      <br />,
      "시청자들에게는 HLS 프로토콜을 이용하여 서비스 하고 있습니다.",
      <br />,
      "AWS MediaConvert를 사용하여 업로드된 영상을 다양한 화질옵션로 제공하도록 개발했습니다.",
      <br />,
      "Graphql Subscription을 이용하여 실시간 채팅 기능을 개발하였습니다.",
      <br />,
      <br />,
      "프론트엔드 개발자이기 때문에 모든 기능을 구현하기 어려워 AWS 서비스를 적극 활용하여 프로덕트를 개발했습니다.",
      <br />,
      "기술에 대한 경험은 저의 자산이 되기 때문에 다양한 시도를 해볼 수 있는 계기가 되었습니다.",
    ],
    image: "images/WESTUDIO.png",
    // image: "images/WESTUDIO.jpg",
  },
  {
    term: "2019.09 ~ 2020.06",
    key: "eapproval",
    people: "개발 1명",
    company: "더존비즈온",
    projectName: "WEHAGO 전자결재 모바일",
    stacks: ["React Native", "Expo", "Typescript", "Redux", "iOS", "Android"],
    detail: [
      "WEHAGO 전자결재 웹 서비스와 실시간 연동하여 언제 어디서든 전자결재 업무를 지원합니다.",
      <br />,
      "대시보드를 통해 처리가 필요한 결재정보를 한눈에 확인하고 빠르게 처리할 수 있습니다.",
      <br />,
      "Axios를 사용하여 데이터를 불러오고 Redux(LocalStorage)와 State에 저장하여 데이터를 관리하였습니다.",
      <br />,
      "결재 검색기능을 개발하였고, SelectBox를 구현하여 다중결재처리 기능도 개발하였습니다.",
      <br />,
      "Expo Notification을 통해 알림을 받도록 개발하였고, 결재알림이 오면 빠르게 결재를 확인하고 결재를 진행할 수 있도록 개발했습니다.",
    ],
    image: "images/eapprovals.png",
    // image: "images/eapprovals.jpg",
  },
  {
    term: ["2019.03 ~ 2020.07", <br />, "(2019.06월 정식 서비스)"],
    key: "meet",
    people: "개발 2명",
    company: "더존비즈온",
    projectName: "WEHAGO Meet (화상회의 모바일)",
    stacks: ["React Native", "Javascript", "Redux", "iOS", "Android"],
    detail: [
      "WEHAGO Meet는 온라인 화상회의 및 협업 어플리케이션입니다.",
      <br />,
      "Jitsi 라이브러리를 사용하여 Web-RTC 화상회의를 개발했습니다.",
      <br />,
      "통신에 관한 부분은 Jitsi에서 담당하고 있고, 대화방 리스트를 불러오고 화상회의 화면과 전반적인 UI 개발을 담당했습니다.",
      <br />,
      "여러 사용자와 동시에 회상회의를 진행하는 화면을 개발하였고, 문서공유 기능을 더하여 회의를 진행할 수 있도록 개발했습니다.",
      <br />,
      "사용자 데이터를 유지하고 화면간 데이터를 공유해야하는 부분에서 Redux를 사용하여 데이터를 관리하였습니다.",
    ],
    image: "images/meet.png",
    // image: "images/meet.jpg",
  },
  {
    term: "2019.01 ~ 2019.07",
    key: "uicomponent",
    company: "더존비즈온",
    projectName: "WEHAGO 공통 UI 컴포넌트",
    stacks: ["React", "Javascript"],
    detail: [
      "비즈니스 플랫폼 위하고 서비스 개발을 위한 공통 컴포넌트 개발에 참여했습니다.",
      <br />,
      "손쉽게 재사용 가능한 UI 컴포넌트를 제공합니다.",
      <br />,
      "신규 컴포넌트 개발과 여러 프로젝트에서 유기적으로 동작하고 퍼포먼스가 떨어지지 않도록 유지보수 업무를 했습니다.",
    ],
  },
];

const Project = () => {
  return (
    <div className="row gx-5 project">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">프로젝트</h2>

          {projects.map((project) => (
            <div key={project.key} className="row pb-3 mb-3 border-bottom">
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
                  [{project.company}]&nbsp;{project.projectName}
                </h3>
                <div className="mb-2">
                  {project.stacks.map((stack) => (
                    <span className="badge bg-primary me-1">{stack}</span>
                  ))}
                </div>
                <p className="fs-6">{project.detail}</p>

                {project.image && (
                  <img
                    src={project.image}
                    className="img-fluid"
                    alt="위스튜디오 이미지"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
