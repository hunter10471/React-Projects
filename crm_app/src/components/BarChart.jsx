import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2019", 1000, 400, 200],
  ["2020", 1170, 460, 250],
  ["2021", 660, 1120, 300],
  ["2022", 1030, 540, 350],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2019-2022",
  },

};

export const BarChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
