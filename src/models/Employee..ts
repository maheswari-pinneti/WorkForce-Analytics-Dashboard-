export interface Employee {
  id: number;
  employeeId: string;
  name: string;
  department: string;
  role: string;
  location: string;

  status: "Active" | "Inactive";
  risk: "Low" | "Medium" | "High";

  joiningDate: string;
  performanceScore: number;
}