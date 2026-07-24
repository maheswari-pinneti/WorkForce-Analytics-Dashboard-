import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { FiX } from "react-icons/fi";
import { drillDownData } from "./DrillDownData";
import "./KPIDrillDown.css";

interface Props {
  selectedKPI: string | null;
  onClose: () => void;
}

const KPIDrillDown: React.FC<Props> = ({
  selectedKPI,
  onClose,
}) => {
  if (!selectedKPI) return null;

  const data =
    drillDownData[
      selectedKPI as keyof typeof drillDownData
    ];

  if (!data) return null;

  const chart = data.monthly.map((value, index) => ({
    month: `M${index + 1}`,
    value,
  }));

  return (
    <aside className="drill-panel">
      <div className="drill-header">
        <h2>{selectedKPI}</h2>

        <button onClick={onClose}>
          <FiX />
        </button>
      </div>

      <div className="drill-stats">
        <div>
          <h4>Current</h4>
          <span>{data.current}</span>
        </div>

        <div>
          <h4>Previous</h4>
          <span>{data.previous}</span>
        </div>

        <div>
          <h4>Growth</h4>
          <span className="growth">
            {data.growth}
          </span>
        </div>
      </div>

      <div className="drill-chart">
        <ResponsiveContainer
          width="100%"
          height={220}
        >
          <AreaChart data={chart}>
            <defs>
              <linearGradient
                id="trend"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#6366F1"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="#6366F1"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#trend)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="breakdown">
        <h3>Department Breakdown</h3>

        {data.departments.map((item) => (
          <div
            className="break-row"
            key={item.name}
          >
            <span>{item.name}</span>

            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default KPIDrillDown;