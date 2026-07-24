import type{ Employee } from "../models/Employee";

export interface KPIResult {
  title: string;
  value: number | string;
  trend: number;
  trendType: "up" | "down";
}

export const getTotalEmployees = (
  employees: Employee[]
): KPIResult => {
  return {
    title: "Total Employees",
    value: employees.length,
    trend: 5.4,
    trendType: "up",
  };
};

export const getActiveEmployees = (
  employees: Employee[]
): KPIResult => {
  const active = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  return {
    title: "Active Employees",
    value: active,
    trend: 3.2,
    trendType: "up",
  };
};

export const getAttritionRate = (
  employees: Employee[]
): KPIResult => {
  const inactive = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const rate =
    ((inactive / employees.length) * 100).toFixed(1);

  return {
    title: "Attrition Rate",
    value: `${rate}%`,
    trend: 1.1,
    trendType: "down",
  };
};

export const getHighRiskEmployees = (
  employees: Employee[]
): KPIResult => {
  const risk = employees.filter(
    (emp) => emp.risk === "High"
  ).length;

  return {
    title: "High Risk Employees",
    value: risk,
    trend: 4.7,
    trendType: "up",
  };
};

export const getDepartments = (
  employees: Employee[]
): KPIResult => {
  const departments = new Set(
    employees.map((emp) => emp.department)
  );

  return {
    title: "Departments",
    value: departments.size,
    trend: 0,
    trendType: "up",
  };
};

export const getLocations = (
  employees: Employee[]
): KPIResult => {
  const locations = new Set(
    employees.map((emp) => emp.location)
  );

  return {
    title: "Locations",
    value: locations.size,
    trend: 2.0,
    trendType: "up",
  };
};

export const getNewJoinees = (
  employees: Employee[]
): KPIResult => {
  const today = new Date();

  const joined = employees.filter((emp) => {
    const joining = new Date(emp.joiningDate);

    const days =
      (today.getTime() - joining.getTime()) /
      (1000 * 60 * 60 * 24);

    return days <= 30;
  }).length;

  return {
    title: "New Joinees",
    value: joined,
    trend: 8.5,
    trendType: "up",
  };
};

export const getPerformanceScore = (
  employees: Employee[]
): KPIResult => {
  const total = employees.reduce(
    (sum, emp) => sum + emp.performanceScore,
    0
  );

  const average = (
    total / employees.length
  ).toFixed(1);

  return {
    title: "Performance Score",
    value: `${average}%`,
    trend: 2.8,
    trendType: "up",
  };
};

export const getAllKPIs = (
  employees: Employee[]
): KPIResult[] => [
  getTotalEmployees(employees),
  getActiveEmployees(employees),
  getAttritionRate(employees),
  getHighRiskEmployees(employees),
  getDepartments(employees),
  getLocations(employees),
  getNewJoinees(employees),
  getPerformanceScore(employees),
];