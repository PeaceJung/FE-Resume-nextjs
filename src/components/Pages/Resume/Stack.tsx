const stacks = [
  {
    stack: "React",
    description: `React와 TypeScript를 사용하여 컴포넌트 개발 및 서비스 개발/배포/운영하는 업무를 담당하였습니다.
      팀원과 함께 협력하여 Frontend 개발을 원활히 진행할 수 있습니다.`,
    level: "★★★★☆",
  },
  {
    stack: "JavaScript",
    description:
      "ES2015 이전과 이후 모두의 문법에 익숙하며, JavaScript 프레임워크들을 사용하여 개발할 수 있습니다.",
    level: "★★★★",
  },
  {
    stack: "TypeScript",
    description:
      "기본적인 타입을 정의하여 개발할 수 있습니다. 능숙하게 사용하기 위해 노력하고 있습니다.",
    level: "★★★☆",
  },
  {
    stack: "React Native",
    description: `전반적인 구동 원리를 이해하고 있으며, React를 사용하여 앱을 개발할 수 있습니다.
      ios/android 네이티브 기능을 직접적으로 다루기는 어려우나 다양한 라이브러리를 활용하여 원하는 결과물을 만들 수 있습니다.`,
    level: "★★★☆",
  },
  {
    stack: "Next.js",
    description: `SSR에 대하여 이해하고 있으며, Next.js를 사용하여 서비스를 운영 경험이 있습니다.
      능숙하게 업무에 적용시킬 수 있습니다.`,
    level: "★★★★",
  },
  {
    stack: "Node.js",
    description: `빠르게 API 서버 구축을 위해 Node.js와 Express, Graphql을 사용하여 서버를 개발한 경험이 있습니다.
      PostgreSQL과 연동하여 CRUD API를 개발하여 서비스를 운영하였습니다.`,
    level: "★★★★",
  },
];

const Stack = () => {
  return (
    <div className="row gx-5 stack">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">기술 스택</h2>
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">기술</th>
                <th scope="col">설명</th>
                <th scope="col">평가</th>
              </tr>
            </thead>
            <tbody>
              {stacks.map((s) => (
                <tr key={s.stack}>
                  <th scope="row">{s.stack}</th>
                  <td>{s.description}</td>
                  <td style={{ color: "#ffc107" }}>{s.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stack;
