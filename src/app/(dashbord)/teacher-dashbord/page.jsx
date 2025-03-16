import DashboardCard from "@/app/components/dashboard/DashboardCard";

export default function InstructorDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <DashboardCard title="Enrolled Students" value="320" />
        <DashboardCard title="Total Courses" value="10" />
        <DashboardCard title="Earnings" value="$25K" />
      </div>
    </div>
  );
}
