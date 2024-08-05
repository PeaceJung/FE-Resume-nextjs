import Header from "./Header";
import Career from "./Career";
import Education from "./Education";
import Military from "./Military";
import Project from "./Project";
import Stack from "./Stack";
import Summary from "./Summary";

import styles from "../../../../public/css/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles["resume-container"]}>
      <div className="container p-3">
        <Header />
        <Summary />
        <Career />
        <Project />
        {/* <Stack /> */}
        <Military />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
