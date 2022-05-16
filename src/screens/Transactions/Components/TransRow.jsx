import React from "react";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import ArrowDown from "@mui/icons-material/ArrowDownward";
const TransRow = ({ handleSort, direction, setDirection }) => {
  return (
    <tr id="table-head">
      <th
        onClick={() => {
          if (direction.nameDirection === 1) {
            handleSort("name", 1);
            setDirection({ ...direction, nameDirection: 0 });
          } else {
            handleSort("name", 0);
            setDirection({ ...direction, nameDirection: 1 });
          }
        }}
        className="pl-4"
        style={{ cursor: "pointer" }}
        scope="col"
      >
        Narration
        {direction.nameDirection === 1 ? <ArrowUp /> : <ArrowDown />}
      </th>
      <th scope="col"></th>
      <th className="pl-4" scope="col">
        Date
      </th>
      <th className="pl-4" scope="col">
        Type
      </th>
      <th className="pl-2" scope="col">
        Closing Balance
      </th>
    </tr>
  );
};

export default TransRow;
