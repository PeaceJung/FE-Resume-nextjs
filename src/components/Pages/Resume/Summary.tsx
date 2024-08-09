const me = {
  name: "정화평",
  email: "hopuo132@naver.com",
  text: [
    "6년간 React, Typescript 기반의 프론트엔드 개발을 하고 있는 정화평입니다.",
    <br />,
    "확장 가능한 시스템 설계, 유지보수와 가독성 좋은 코드에 관심이 많습니다.",
    <br />,
    "팀과 프로젝트를 리딩하며 다양한 팀과 협업합니다.",
    <br />,
    "코드리뷰를 통해 일관된 코드와 좋은 품질을 만들어가고 있습니다.",
    <br />,
    "팀원들과 함께 성장해 나갈 수 있는 환경을 만들기 위해 노력하고 있습니다.",
    // <br />,
    // <br />,
    // "현재 부산지사에서 근무하고 있으며, 서울 본사와 거리감없이 소통하며 일하고 있습니다.",
    // <br />,
    // "팀 내 세부 조직인 파트의 파트장으로 서울과 부산에 있는 파트원들과 팀원들 모두 즐겁게 일하고 있습니다.",
  ],
};

const Summary = () => {
  return (
    <div className="row gx-5 summary">
      <div className="col">
        <div className="p-3">
          <h1 className="text-center fs-1 mb-0">
            프로필 <strong>{me.name}</strong>
          </h1>
          <p className="text-center mb-3">
            Email: <a href={`mailto:${me.email}`}>{me.email}</a>
          </p>
          <p className="text-center">{me.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
