import React, { useState } from "react";
import styles from "./App.module.scss";
import Chart from "./components/Chart";

const prefArray = [
  { number: 1, name: "北海道" },
  { number: 2, name: "青森県" },
  { number: 3, name: "岩手" }
];

const App: React.FC = () => {
  const [pref, setPref] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const handlePrefCheck = (number: number, name: string) => {
    setPref(number);
    setName(name);
  };
  return (
    <div className={styles.app}>
      {prefArray.map((pref) => {
        return (
          <label key={pref.number} className={styles.app_check}>
            <input
              type="radio"
              name="pref"
              value=""
              onChange={() => {
                handlePrefCheck(pref.number, pref.name);
              }}
            />
            <p>{pref.name}</p>
          </label>
        );
      })}
      <Chart pref={pref} name={name} />
    </div>
  );
};

export default App;
