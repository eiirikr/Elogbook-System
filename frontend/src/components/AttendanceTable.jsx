import React from "react";

const AttendanceTable = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th rowspan="2">Name</th>
          <th rowspan="2">Role</th>
          <th colspan="2">AM</th>
          <th colspan="2">PM</th>
        </tr>
        <tr>
          <th>Login</th>
          <th>Logout</th>
          <th>Login</th>
          <th>Logout</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeric Javier</td>
          <td>Intern</td>
          <td>08:00</td>
          <td>12:00</td>
          <td>01:00</td>
          <td>05:00</td>
        </tr>
        <tr>
          <td>Immat Ladignon</td>
          <td>Intern</td>
          <td>08:00</td>
          <td>12:00</td>
          <td>01:00</td>
          <td>05:00</td>
        </tr>
        <tr>
          <td>Justine</td>
          <td>Intern</td>
          <td>08:00</td>
          <td>12:00</td>
          <td>01:00</td>
          <td>05:00</td>
        </tr>
      </tbody>
    </table>

  );
};

export default AttendanceTable;
