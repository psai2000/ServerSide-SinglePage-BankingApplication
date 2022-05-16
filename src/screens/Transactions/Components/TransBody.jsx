const TransBody = ({ img, name, bankName, refNo, date, type, dueAmount }) => {
  return (
    <tbody  id="transaction-body">
      <tr className="table-row">
        <th scope="row">
          <div className="d-flex flex-row align-items-center">
            <img
              src={img}
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avtar"
            />
            <div className="pl-2 pt-1">{name}</div>
          </div>
        </th>
        <td className="table_content pt-4 transaction__tablebody--banknamesize">
          {bankName}
          <div className="transaction__tablebody--refsize">Ref No:{refNo}</div>
        </td>
        <td className="table_content pt-4">{date}</td>
        <td className="table_content pt-4">
          <div className="text-white">
            <span
              className={
                ["Withdraw", "IMPC"].includes(type)
                  ? "transaction__tablebody-yellow"
                  : "transaction__tablebody-blue"
              }
            >
              {type}
            </span>
          </div>
        </td>
        <td className="table_content pt-4">{dueAmount}</td>
      </tr>
    </tbody>
  );
};

export default TransBody;
