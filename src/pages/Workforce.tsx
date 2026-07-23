import { useSearchParams } from "react-router-dom";


function Workforce() {
  const [searchParams, setSearchParams] = useSearchParams();

  const department = searchParams.get("department") || "all";
  const location = searchParams.get("location") || "all";
  const employmentType = searchParams.get("employmentType") || "all";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>Workforce Analytics</h1>

      {/* Department */}
      <select
        value={department}
        onChange={(e) =>
          updateFilter("department", e.target.value)
        }
      >
        <option value="all">All Departments</option>
        <option value="engineering">Engineering</option>
        <option value="hr">HR</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) =>
          updateFilter("location", e.target.value)
        }
      >
        <option value="all">All Locations</option>
        <option value="zurich">Zurich</option>
        <option value="london">London</option>
        <option value="new-york">New York</option>
      </select>

      {/* Employment Type */}
      <select
        value={employmentType}
        onChange={(e) =>
          updateFilter("employmentType", e.target.value)
        }
      >
        <option value="all">All Types</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="contract">Contract</option>
      </select>

      <button onClick={clearFilters}>
        Clear Filters
      </button>

      <hr />

      <p>Department: {department}</p>
      <p>Location: {location}</p>
      <p>Employment Type: {employmentType}</p>
    </div>
  );
}

export default Workforce;