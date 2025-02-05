import React, { useState } from "react";
import axios from "axios";

const LogoutForm = ({ fetchRecords }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/attendance/logout", { name });
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
      <button type="submit">Log Out</button>
    </form>
  );
};

export default LogoutForm;
