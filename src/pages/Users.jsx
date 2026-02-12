import { useState } from "react";
import "./Users.css";

const usersData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Anita Verma",
    email: "anita@gmail.com",
    role: "Customer",
    status: "Pending",
  },
  {
    id: 3,
    name: "Mohit Singh",
    email: "mohit@gmail.com",
    role: "Agent",
    status: "Blocked",
  },
];

export default function Users() {
  const [search, setSearch] = useState("");

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-page">

      {/* ================= HEADER ================= */}
      <div className="users-header">
        <h2>Users Management</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      {/* ================= SUMMARY CARDS ================= */}
      <div className="users-summary">
        <div className="summary-card">
          <h4>Total Users</h4>
          <h3>1,245</h3>
        </div>

        <div className="summary-card">
          <h4>Active</h4>
          <h3 className="active-text">1,120</h3>
        </div>

        <div className="summary-card">
          <h4>Blocked</h4>
          <h3 className="blocked-text">35</h3>
        </div>
      </div>


      {/* ================= TABLE ================= */}
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
