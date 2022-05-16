import './AccountSummary.css';
import  {Heading} from '../../CommonComponents';
const AccountSummary=()=>
<div className="dashboard-account-summary bg-white pl-4 pt-2 shadow">
<Heading type="h6">Account Summary</Heading>
         <div className="d-flex justify-content-between p-2"> 
            <div className="d-flex flex-row align-items-start">
                <img src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'} className="rounded-circle" width="50px" height="50px" alt="user"/>
                <div className="pl-2">
                    <div className="pl-2 title">Account Holder Name</div>
                    <div className="pl-2 text-dark font-weight-bold subtitle">John</div>
                </div>
            </div>
            <div className="pl-2">
                <div className="pl-2 title">Account Number</div>
                <div className="pl-2 text-dark font-weight-bold subtitle">
                    96107104093
                </div>
            </div>
            <div className="pl-2">
                <div className="pl-2 title">Branch</div>
                <div className="pl-2 text-dark font-weight-bold subtitle">
                    Riyadh,Saudi Arabia
                </div>
            </div>
            <div className="pl-2">
                <div className="pl-2 title">Account Balance</div>
                <div className="pl-2 text-color">21,234 INR</div>
            </div>
         </div>
</div>
export default AccountSummary;
