import "./LayoutBillsCards.css";
const Layout = ({children}) => {
  return (
    <div
      className="card mx-auto layout__bills-cards__card shadow">
      <div className="layout__bills-cards__body">
        {children}
      </div>
    </div>
  );
};
export default Layout;