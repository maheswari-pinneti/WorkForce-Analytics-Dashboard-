import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import type{ KPICardData } from "./KPITypes";
import "./KPICards.css";

interface Props {
  card: KPICardData;
  onClick?: () => void;
}

const KPICard: React.FC<Props> = ({ card, onClick }) => {
  const Icon = card.icon;

  const chartData = card.chartData.map((value, index) => ({
    name: index,
    value,
  }));

  return (
    <motion.div
      className="kpi-card"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
    >
      {/* Decorative Gradient */}
      <div
        className="kpi-card-gradient"
        style={{
          background: card.gradient,
        }}
      />

      {/* Header */}
      <div className="kpi-card-header">
        <div
          className="kpi-icon-wrapper"
          style={{
            background: card.iconBg,
          }}
        >
          <Icon className="kpi-icon" />
        </div>

        <div className="kpi-menu">
          ⋮
        </div>
      </div>

      {/* Title */}
      <p className="kpi-title">
        {card.title}
      </p>

      {/* Value */}
      <h2 className="kpi-value">
        {card.value}
      </h2>

      {/* Description */}
      <p className="kpi-description">
        {card.description}
      </p>

      {/* Footer */}
      <div className="kpi-footer">
        <div
          className={
            card.trendType === "up"
              ? "trend-up"
              : "trend-down"
          }
        >
          {card.trendType === "up" ? (
            <FiArrowUpRight />
          ) : (
            <FiArrowDownRight />
          )}

          {card.trend}%
        </div>

        <span className="kpi-last-month">
          vs last month
        </span>
      </div>

      {/* Sparkline */}
      <div className="kpi-chart">
        <ResponsiveContainer
          width="100%"
          height={70}
        >
          <AreaChart data={chartData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              fill="#EEF2FF"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default KPICard;