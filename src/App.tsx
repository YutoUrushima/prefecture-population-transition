import React, { useState } from "react";
import styles from "./App.module.scss";
import Chart from "./components/Chart";

const App: React.FC = () => {
  const [pref, setPref] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const handlePrefCheck = (number: number, name: string) => {
    setPref(number);
    setName(name);
  };
  return (
    <div className={styles.app}>
      <label className={styles.app_check}>
        <input
          type="radio"
          name="pref"
          value=""
          onChange={() => {
            handlePrefCheck(1, "北海道");
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
            handlePrefCheck(2, "青森県");
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
            handlePrefCheck(3, "岩手県");
          }}
        />
        <p>岩手県</p>
      </label>
      <Chart pref={pref} name={name} />
    </div>
  );
};

export default App;
