import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import Timer from "./components/Timer";
import AttendanceTable from "./components/AttendanceTable";
import AppNavbar from "./components/AppNavbar"
import Footer from "./components/Footer"

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
    <>
      <AppNavbar />
      <div className="App">
        <h1>Elogbook System</h1>
        <Timer />
        <div className="forms-container">
          <LoginForm fetchRecords={fetchRecords} />
          <LogoutForm fetchRecords={fetchRecords} />
        </div>
        <AttendanceTable records={records} />
        <Footer />
      </div>
    </>
  );
}

export default App;
