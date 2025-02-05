import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ fetchRecords }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("visitor");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/attendance/login", {
      name,
      role,
    });
    fetchRecords();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="visitor">Visitor</option>
        <option value="intern">Intern</option>
        <option value="employer">Employer</option>
      </select>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
