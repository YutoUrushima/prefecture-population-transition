import React from "react";
import styles from "./App.module.scss";
import Chart from "./Chart";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Chart />
    </div>
  );
};

export default App;
