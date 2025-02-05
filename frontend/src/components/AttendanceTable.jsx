import React from "react";
import moment from "moment";

const AttendanceTable = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Login Time</th>
          <th>Logout Time</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record._id}>
            <td>{record.name}</td>
            <td>{record.role}</td>
            <td>
              {moment(record.loginTime).format("hh:mm:ss A, MMMM D, YYYY")}
            </td>
            <td>
              {record.logoutTime
                ? moment(record.logoutTime).format("hh:mm:ss A, MMMM D, YYYY")
                : "Active"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
