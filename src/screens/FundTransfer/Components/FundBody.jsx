import SubmitTransfer from "../../SubmitTransfer/SubmitTransfer";
const FundBody = ({ avatarPath, name, bankName, place, bankIFSC }) => {
  return (
    <>
      <tbody>
        <tr className="table-row">
          <th scope="row">
            <div className="d-flex flex-row align-items-center">
              <img
                src={avatarPath}
                className="rounded-circle"
                width="50px"
                height="50px"
              />
              <div className="pl-2 pt-1">{name}</div>
            </div>
          </th>
          <td className="pt-4">{bankName}</td>
          <td className="pt-4">{place}</td>
          <td className="pt-4">{bankIFSC}</td>
          <td className="pt-3">
            <SubmitTransfer />
          </td>
        </tr>
      </tbody>
    </>
  );
};
export default FundBody;
