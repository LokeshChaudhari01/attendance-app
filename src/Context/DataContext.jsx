import { createContext, useState } from "react";

const dataArr = [
  {
    subject: "DAA",
    totalLecs: 0,
    attendedLecs: 0,
    id: 1,
    attendance: 99,
  },
  {
    subject: "SE",
    totalLecs: 0,
    attendedLecs: 0,
    id: 2,
    attendance: 74,
  },
  {
    subject: "OS",
    totalLecs: 0,
    attendedLecs: 0,
    id: 3,
    attendance: 75,
  },
  {
    subject: "DPPL",
    totalLecs: 0,
    attendedLecs: 0,
    id: 4,
    attendance: 0,
  },
  {
    subject: "DMGT",
    totalLecs: 0,
    attendedLecs: 0,
    id: 5,
    attendance: 0,
  },
  {
    subject: "ITW-2",
    totalLecs: 0,
    attendedLecs: 0,
    id: 6,
    attendance: 0,
  },
];

const DataContext = createContext();

function DataProvider({ children }) {
  const [dataObj, setdataObj] = useState(() => {
    try {
      const data = localStorage.getItem("data");
      return data ? JSON.parse(data) : dataArr;
    } catch (err) {
      console.error("Error parsing the stored data:", err);
      return dataArr;
    }
  });
  
  return (
    <DataContext.Provider value={{ dataObj, setdataObj }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
