import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 7000 },
  { month: "Jul", revenue: 6500 },
  { month: "Aug", revenue: 7200 },
  { month: "Sep", revenue: 8100 },
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* ================= KPI CARDS ================= */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <h4>Total Customers</h4>
          <h2>12,450</h2>
          <span className="positive">+4.5%</span>
        </div>

        <div className="kpi-card">
          <h4>Total Loans</h4>
          <h2>₹8.4 Cr</h2>
          <span className="positive">+2.1%</span>
        </div>

        <div className="kpi-card">
          <h4>Pending Approvals</h4>
          <h2>134</h2>
          <span className="warning">-1.2%</span>
        </div>

        <div className="kpi-card">
          <h4>Default Rate</h4>
          <h2>1.8%</h2>
          <span className="negative">+0.3%</span>
        </div>

      </div>


      {/* ================= AREA CHART ================= */}
      <div className="chart-section">
        <div className="chart-header">
          <h3>Revenue Overview</h3>
          <span className="chart-value">₹8.4 Cr</span>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      {/* ================= TRANSACTION TABLE ================= */}
      <div className="table-section">
        <h3>Recent Transactions</h3>

        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Loan Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>₹2,50,000</td>
              <td className="status approved">Approved</td>
              <td>11 Feb 2026</td>
            </tr>
            <tr>
              <td>Anita Verma</td>
              <td>₹1,20,000</td>
              <td className="status pending">Pending</td>
              <td>10 Feb 2026</td>
            </tr>
            <tr>
              <td>Mohit Singh</td>
              <td>₹3,00,000</td>
              <td className="status rejected">Rejected</td>
              <td>08 Feb 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
