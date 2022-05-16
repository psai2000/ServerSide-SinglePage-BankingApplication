import "./Dashboard.css";
import Bills from "./Bills";
import AccountSummary from "./AccountSummary";
import Transaction from "../Transactions/Transaction";
import FundTransfer from "../FundTransfer/FundTransfer";
import Cards from "../Cards/Cards";
const Dashboard = () => (
  <div>
    <div className="dashboard__account">
      <AccountSummary />
    </div>

    <div className="mt-2">
      <div className="row no-gutters">
        <div className="col-lg-12 col-xl-7">
          <div className="dashboard__transactions pr-3">
            <Transaction />
          </div>
        </div>
        <div className="col-lg-12 col-xl-5 d-flex">
          <div className="dashboard__credit flex-fill pl-2 ">
            <Cards />
          </div>
        </div>
      </div>

      <div className="row no-gutters funds__table ">
        <div className="col-lg-12 col-xl-7 mt-2">
          <div className="dashboard__funds pr-1">
            <FundTransfer />
          </div>
        </div>
        <div className="col-lg-12 col-xl-5 bills__small-screen mt-2">
          <div className="md:pr-1 lg:pl-0 mb-2">
            <Bills />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
