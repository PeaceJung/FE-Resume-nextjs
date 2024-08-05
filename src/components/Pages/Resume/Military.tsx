import styles from "../../../../public/css/Common.module.css";

const Military = () => {
  return (
    <div className="row gx-5 education">
      <div className="col">
        <div className="p-3">
          <h2 className="text-uppercase">
            <span className={styles["h2-title"]}>병역</span>
          </h2>

          <ul>
            <li>육군만기전역 (2014.07 ~ 2016.04)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Military;
