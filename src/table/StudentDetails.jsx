import React from "react";
import "./Student.css";

export const StudentDetails = () => {
  return (
    <div>
      <div className="table_for_students">
        <table>
          <thead>
            <tr>
              <th>Student-Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Test-Name</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nitesh Singh Rawat</td>
              <td>Male</td>
              <td>21</td>
              <td>English</td>
              <td>English</td>
              <td>75</td>
              <td>01/10/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
