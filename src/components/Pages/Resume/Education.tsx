import styles from "../../../../public/css/Common.module.css";

const Education = () => {
  return (
    <div className="row gx-5 education">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">
            <span className={styles["h2-title"]}>학력</span>
          </h2>

          <ul>
            <li>(부산소재) 동서대학교 컴퓨터공학전공 (2013.03 ~ 2019.02)</li>
            <li>(서울소재) 영등포고등학교 (2010.03 ~ 2013.02)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
