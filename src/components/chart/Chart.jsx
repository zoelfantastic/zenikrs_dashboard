import React from "react";
import "./chart.css";
import {
  Bar,
  BarChart,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKeys, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data}>
          <XAxis
            dataKey={dataKeys.dataKeyX}
            tick={{ fontSize: 12 }}
            stroke="#5550bd"
          />
          <YAxis dataKey={dataKeys.dataKeyY} tick={{ fontSize: 12 }} />
          {/* <Line  dataKey="penjualan" stroke="#5550bd" /> */}
          <Bar
            dataKey={dataKeys.dataKeyBar}
            tick={{ fontSize: 12 }}
            fill="#5550bd"
          />
          <Tooltip />
          {/* {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />} */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
