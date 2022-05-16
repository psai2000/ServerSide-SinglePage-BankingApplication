import React from "react";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import ArrowDown from "@mui/icons-material/ArrowDownward";

const FundColumn = ({ handleSort, direction, setDirection }) => {
  return (
    <>
      <thead className="bg-white">
        <tr>
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
            scope="col"
            className="pl-4 "
            style={{ cursor: "pointer" }}
          >
            Name
            {direction.nameDirection === 1 ? <ArrowUp /> : <ArrowDown />}
          </th>
          <th
            onClick={() => {
              if (direction.bankNameDirection === 1) {
                handleSort("bankName", 1);
                setDirection({ ...direction, bankNameDirection: 0 });
              } else {
                handleSort("bankName", 0);
                setDirection({ ...direction, bankNameDirection: 1 });
              }
            }}
            scope="col"
            className="pl-1 "
            style={{ cursor: "pointer" }}
          >
            Bank name
            {direction.bankNameDirection === 1 ? <ArrowUp /> : <ArrowDown />}
          </th>
          <th
            onClick={() => {
              if (direction.cityDirection === 1) {
                handleSort("place", 1);
                setDirection({ ...direction, cityDirection: 0 });
              } else {
                handleSort("place", 0);
                setDirection({ ...direction, cityDirection: 1 });
              }
            }}
            scope="col"
            style={{ cursor: "pointer" }}
          >
            City
            {direction.cityDirection === 1 ? <ArrowUp /> : <ArrowDown />}
          </th>
          <th
            onClick={() => {
              if (direction.IFSCDirection === 1) {
                handleSort("bankIFSC", 1);
                setDirection({ ...direction, IFSCDirection: 0 });
              } else {
                handleSort("bankIFSC", 0);
                setDirection({ ...direction, IFSCDirection: 1 });
              }
            }}
            scope="col"
            style={{ cursor: "pointer" }}
          >
            IFSC Code
            {direction.IFSCDirection === 1 ? <ArrowUp /> : <ArrowDown />}
          </th>
          <th scope="col">Transfer</th>
        </tr>
      </thead>
    </>
  );
};
export default FundColumn;
