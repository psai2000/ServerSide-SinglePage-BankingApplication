import "./Bills.css";
import {
  Phone,
  CashCoin,
  Umbrella,
  Lightbulb,
  ChevronRight,
} from "react-bootstrap-icons";
import { Heading } from "../../CommonComponents";
const Bills = () => (
  <div className="d-flex flex-column flex-fill bg-white p-2 pt-3 shadow bill-card">
    <Heading>Bills & Other Payments</Heading>
    <div className="d-flex flex-column flex-fill dashboard-bills-listed">
      <a href="#href" className="bill-items">
        <div className="d-flex flex-row align-items-center justify-content-between bill-item-row">
          <div className="d-flex flex-row align-items-center content-division">
            <CashCoin className="bill-icons mr-4" />
            <div className="text-dark">Loan</div>
          </div>
          <ChevronRight />
        </div>
      </a>
    </div>
    <div className="d-flex flex-column flex-fill dashboard-bills-listed">
      <a href="#href" className="bill-items">
        <div className="d-flex flex-row align-items-center justify-content-between bill-item-row">
          <div className="d-flex flex-row align-items-center content-division">
            <Umbrella className="bill-icons mr-4" />
            <div className="text-dark">Insurance</div>
          </div>
          <ChevronRight />
        </div>
      </a>
    </div>
    <div className="d-flex flex-column flex-fill dashboard-bills-listed">
      <a href="#href" className="bill-items">
        <div className="d-flex flex-row align-items-center justify-content-between bill-item-row">
          <div className="d-flex flex-row align-items-center content-division">
            <Phone className="bill-icons mr-4" />
            <div className="text-dark">Mobile</div>
          </div>
          <ChevronRight />
        </div>
      </a>
    </div>
    <div className="d-flex flex-column flex-fill dashboard-bills-listed">
      <a href="#href" className="bill-items">
        <div className="d-flex flex-row align-items-center justify-content-between bill-item-row">
          <div className="d-flex flex-row align-items-center content-division">
            <Lightbulb className="bill-icons mr-4" />
            <div className="text-dark">Electricity</div>
          </div>
          <ChevronRight />
        </div>
      </a>
    </div>
  </div>
);
export default Bills;
