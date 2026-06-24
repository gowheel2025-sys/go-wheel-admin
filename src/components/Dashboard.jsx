import { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Mobile Hamburger */}
      <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <img src="/logo.png" alt="Go Wheel" />
          <h2>GO WHEEL</h2>
          <p>Ride the future, Drive the freedom</p>
        </div>
        <nav>
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Users</div>
          <div className="nav-item">Settings</div>
        </nav>
        <button className="logout-btn">Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to Go Wheel</h1>
        {/* Tuza baki cha dashboard code ithe */}
      </div>
    </div>
  );
}

export default Dashboard;