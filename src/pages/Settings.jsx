import { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="settings-page">

      <h2>Account Settings</h2>

      {/* ================= PROFILE SETTINGS ================= */}
      <div className="settings-card">
        <h3>Profile Information</h3>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="Rahul Sharma" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="rahul@dmfbank.com" />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" defaultValue="Admin" disabled />
          </div>

          <div className="form-group">
            <label>Branch</label>
            <input type="text" defaultValue="Mumbai Head Office" />
          </div>
        </div>

        <button className="primary-btn">Save Changes</button>
      </div>


      {/* ================= SECURITY SETTINGS ================= */}
      <div className="settings-card">
        <h3>Security</h3>

        <div className="toggle-row">
          <span>Enable Two-Factor Authentication</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="form-group">
          <label>Change Password</label>
          <input type="password" placeholder="New Password" />
        </div>

        <button className="primary-btn">Update Security</button>
      </div>


      {/* ================= NOTIFICATION SETTINGS ================= */}
      <div className="settings-card">
        <h3>Notifications</h3>

        <div className="toggle-row">
          <span>Email Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <span>SMS Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>


      {/* ================= SYSTEM SETTINGS ================= */}
      <div className="settings-card">
        <h3>System Preferences</h3>

        <div className="form-group">
          <label>Default Currency</label>
          <select>
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>

        <div className="form-group">
          <label>Language</label>
          <select>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </select>
        </div>

        <button className="primary-btn">Save Preferences</button>
      </div>

    </div>
  );
}
