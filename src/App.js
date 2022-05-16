import {
  BillAndRecharge,
  Dashboard,
  Cards,
  Transaction,
} from "./screens";
import {Header, Footer, Navbar, Hamburger} from "./CommonComponents/";
import NavbarData from "./CommonComponents/Navbar/NavbarData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddBeneficiary, FundTransfer } from "./screens/FundTransfer";
import "./App.css";
const NavScreen = (val) => {
  return (
    <Navbar navPath={val.navPath} icon={val.icon} labelName={val.labelName} />
  );
};

const App = () => (
  <Router>
    <div className="d-flex flex-column flex-wrap">
      <Header />
      <div className="d-flex flex-row">
        <div>{NavbarData.map(NavScreen)}</div>
        <Hamburger />
        <span className="flex-fill align-self-stretch dynamic-content">
          <Routes>
            <Route index path="/" element={<Dashboard />}></Route>
            <Route path="transaction" element={<Transaction />}></Route>
            <Route path="fundTransfer" element={<FundTransfer />}></Route>
            <Route path="cards" element={<Cards />}></Route>
            <Route path="billAndRecharge" element={<BillAndRecharge />}></Route>
            <Route
              path="addBeneficiaryForm"
              element={<AddBeneficiary />}
            ></Route>
          </Routes>
        </span>
      </div>
      <Footer />
    </div>
  </Router>
);
export default App;
