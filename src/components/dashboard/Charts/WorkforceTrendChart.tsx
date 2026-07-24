import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { workforceTrendData } from "./ChartData";
import "./Charts.css";

const WorkforceTrendChart: React.FC = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h3>Workforce Trend</h3>
          <p className="chart-subtitle">
            Employee growth over the last 7 months
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <AreaChart
          data={workforceTrendData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="employeeGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#6366F1"
                stopOpacity={0.45}
              />
              <stop
                offset="95%"
                stopColor="#6366F1"
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="employees"
            stroke="#6366F1"
            strokeWidth={4}
            fill="url(#employeeGradient)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkforceTrendChart;