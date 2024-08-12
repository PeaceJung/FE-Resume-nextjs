const me = {
  name: "정화평",
  email: "hopuo132@naver.com",
  text: [
    "저는 6년간 React와 TypeScript를 기반으로 프론트엔드 개발을 해온 정화평입니다.",
    <br />,
    "확장 가능한 시스템 설계와 유지보수성이 뛰어나고 가독성이 좋은 코드 작성에 깊은 관심을 가지고 있습니다.",
    <br />,
    "다양한 프로젝트에서 팀을 리딩하며, 여러 팀과의 협업을 통해 성공적인 결과를 도출해 왔습니다.",
    <br />,
    "코드 리뷰를 통해 일관된 코드 스타일과 높은 품질을 유지하며,",
    <br />,
    "팀원들과 함께 성장할 수 있는 환경을 만들기 위해 항상 노력하고 있습니다.",
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
