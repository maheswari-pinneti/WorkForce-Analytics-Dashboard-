import type{ IconType } from "react-icons";

export interface KPICardData {
  id: number;
  title: string;
  value: string | number;
  trend: number;
  trendType: "up" | "down";
  icon: IconType;

  gradient: string;
  iconBg: string;

  description: string;

  chartData: number[];
}