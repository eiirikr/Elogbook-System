import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import Timer from "./components/Timer";
import AttendanceTable from "./components/AttendanceTable";
import "./index.css";

function App() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/attendance/records"
    );
    setRecords(response.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Attendance System</h1>
      </nav>
      <Timer />
      <div className="forms-container">
        <LoginForm fetchRecords={fetchRecords} />
        <LogoutForm fetchRecords={fetchRecords} />
      </div>
      <AttendanceTable records={records} />
      <footer>
        <p>&copy; 2025 Attendance System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
