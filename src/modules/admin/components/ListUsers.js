import React, { useState, useEffect } from "react";
import axiosWrapper from "../../../apis/axiosCreate";
import { Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";

export default props => {
  const [users, updateUsers] = useState(null);
  const [, update] = useState(null);
  window.addEventListener("resize", update);
  useEffect(() => {
    if (users === null)
      axiosWrapper.get("/users").then(response => {
        updateUsers(response.data);
      });
  });
  if (users === null) {
    return <p>Loading...</p>;
  }
  const width = window.innerWidth;
  const height = (window.innerHeight * 80) / 100;
  return (
    <Table
      //   style={{ height: "80vh" }}
      width={width}
      height={height}
      headerHeight={40}
      rowHeight={40}
      rowCount={users.length}
      rowGetter={({ index }) => users[index]}
    >
      <Column label="First Name" dataKey="first_name" width={width / 4} />
      <Column label="Last Name" dataKey="last_name" width={width / 4} />
      <Column label="Points" dataKey="balance_points" width={width / 4} />
      <Column label="E-mail ID" dataKey="email" width={width / 4} />
    </Table>
  );
};
