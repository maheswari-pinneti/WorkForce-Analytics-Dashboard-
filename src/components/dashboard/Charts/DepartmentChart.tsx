import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { departmentData } from "./ChartData";
import "./Charts.css";

const COLORS = [
  "#6366F1",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
];

const DepartmentChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Department Distribution</h3>
        <span>Employees</span>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={departmentData}
            dataKey="value"
            nameKey="name"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={4}
            animationDuration={1200}
          >
            {departmentData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="chart-legend">
        {departmentData.map((item, index) => (
          <div key={item.name} className="legend-item">
            <span
              className="legend-dot"
              style={{
                background: COLORS[index],
              }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentChart;