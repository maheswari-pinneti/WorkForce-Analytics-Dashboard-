import React, { useState } from "react";

import KPICards from "./KPICards/KPICards";

import DepartmentChart from "./Charts/DepartmentChart";
import WorkforceTrendChart from "./Charts/WorkforceTrendChart";
import LocationChart from "./Charts/LocationChart";

import KPIDrillDown from "./DrillDown/KPIDrillDown";

import "./DashboardAnalytics.css";

const DashboardAnalytics: React.FC = () => {
  const [selectedKPI, setSelectedKPI] = useState<string | null>(null);

  return (
    <div className="dashboard-analytics">

      {/* Page Header */}

      <div className="dashboard-header">

        <div>

          <h1>Workforce Analytics</h1>

          <p>
            Monitor workforce performance, employee trends and
            organizational insights in real time.
          </p>

        </div>

      </div>

      {/* KPI Cards */}

      <KPICards
  onCardClick={(title) => {
    console.log("Clicked KPI:", title);
    setSelectedKPI(title);
  }}
/>

      {/* Charts */}

      <div className="charts-grid">

        <DepartmentChart />

        <WorkforceTrendChart />

        <div className="chart-full">

          <LocationChart />

        </div>

      </div>

      {/* Drill Down */}

      <KPIDrillDown
        selectedKPI={selectedKPI}
        onClose={() => setSelectedKPI(null)}
      />

    </div>
  );
};

export default DashboardAnalytics;