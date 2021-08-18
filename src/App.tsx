import React, { useState } from "react";
import styles from "./App.module.scss";
import Chart from "./components/Chart";

const App: React.FC = () => {
  const [pref, setPref] = useState<number>(0);
  const handlePrefCheck = (number: number) => {
    setPref(number);
  };
  return (
    <div className={styles.app}>
      <label className={styles.app_check}>
        <input
          type="radio"
          name="pref"
          value=""
          onChange={() => {
            handlePrefCheck(1);
          }}
        />
        <p>北海道</p>
      </label>
      <label className={styles.app_check}>
        <input
          type="radio"
          name="pref"
          value=""
          onChange={() => {
            handlePrefCheck(2);
          }}
        />
        <p>青森県</p>
      </label>
      <label className={styles.app_check}>
        <input
          type="radio"
          name="pref"
          value=""
          onChange={() => {
            handlePrefCheck(3);
          }}
        />
        <p>岩手県</p>
      </label>
      <Chart pref={pref} />
    </div>
  );
};

export default App;
