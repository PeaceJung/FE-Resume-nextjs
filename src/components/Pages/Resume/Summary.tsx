const me = {
  name: "정화평",
  email: "hopuo132@gmail.com",
  text: [
    "React와 TypeScript를 사용하는 3년차 Frontend 개발자 입니다.",
    <br />,
    "React 서비스 개발, React Native 앱개발, React UI 컴포넌트 개발 경험이 있습니다.",
    <br />,
    "사내에 적용하지 않은 새로운 기술들을 사용하여 서비스 운영단계까지 적용시키고,",
    <br />,
    "부서 내에 경험을 공유함으로 함께 일하는 사람들이 함께 성장할 수 있도록 개발해 왔습니다.",
    <br />,
    "TypeScript와 기존 개발 기술을 고도화하여 개발역량을 강화하고 있습니다.",
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
          <p className="text-center mb-1">
            <a href={`mailto:${me.email}`}>{me.email}</a>
          </p>
          <p className="text-center">{me.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
