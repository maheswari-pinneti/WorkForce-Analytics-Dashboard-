import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

import { locationData } from "./ChartData";
import "./Charts.css";

const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
];

const LocationChart: React.FC = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Employees by Location</h3>
          <p className="chart-subtitle">
            Workforce distribution across offices
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={locationData}
          layout="vertical"
          margin={{
            top: 10,
            right: 25,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
          />

          <XAxis type="number" />

          <YAxis
            dataKey="location"
            type="category"
            width={90}
          />

          <Tooltip
            cursor={{ fill: "#F8FAFC" }}
          />

          <Bar
            dataKey="employees"
            radius={[0, 12, 12, 0]}
            animationDuration={1400}
          >
            {locationData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LocationChart;