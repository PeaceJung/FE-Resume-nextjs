import styles from "../../../../public/css/Common.module.css";

const Career = () => {
  return (
    <div className="row gx-5 career">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">
            <span className={styles["h2-title"]}>경력 요약</span>
          </h2>

          <ul>
            <li>NHN 커머스 (2022.03 ~ 재직중)</li>
            <li>더존비즈온 (2019.01 ~ 2022.02)</li>
            <li>레드모바일 (2018.10 ~ 2018.12)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Career;
