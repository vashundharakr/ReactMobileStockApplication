import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import Login from "./Components/LoginPage/LoginPage";
import Register from "./Components/RegisterPage/Register";
import PurchaseHandler from "./Components/Purchase/Purchase";
import MobilePurchase from "./Components/Purchase/Buy";
import AdminHandler from "./Components/Adminhandler/AdminHandler";
import MobileStockManagement from "./Components/Purchase/Purchase";
import UpdateMobileStockManagement from "./Components/Adminhandler/UpdateMobile";
import MobileDetails from "./Components/Purchase/Display";
import ReceiptsTable from "./Components/Adminhandler/Purchasedetails";
import SellForm from "./Components/Sell/SellForm";
import SellRequests from "./Components/Sell/SellRequests";
import UserProfile from "./Components/Sell/SellHistory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/View/:mobileName" element={<MobileDetails />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/PurchaseHandler" element={<PurchaseHandler />} />
          <Route path="/MobilePurchase/Buy/:mobileName" element={<MobilePurchase />} />
          <Route path="/ReceiptsTable" element={<ReceiptsTable />} />
          <Route path="/AdminHandler" element={<AdminHandler />} />
          <Route path="/sellForm" element={<SellForm />} />
          <Route path="/sell-requests" element={<SellRequests />} />
          <Route path="/PurchaseSellCards" element={<PurchaseSellCards />} />
          <Route path="/MobileStockManagement" element={<MobileStockManagement />} />
          <Route path="/UpdateMobileStockManagement" element={<UpdateMobileStockManagement />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
