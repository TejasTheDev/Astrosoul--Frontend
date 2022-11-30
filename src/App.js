
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicNavbar from './components/Navigation/PublicNavbar';
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage";
import OTP from "./pages/OTPpage";
import Language  from './components/Language'
import Sidebar from "./components/Sidebar"
import AstrologerDetails from './components/AstrologerDetails'
import AstrologersList from "./pages/AstrologersPage"
import TodayHoroscope from "./components/TodayHoroscope"
import BookPanditjiForm from "./components/BookPanditjiForm"
function App() {
   
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/language" element={<Language />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/astrologerDetails" element={<AstrologerDetails />} />
        <Route path="/astrologers" element={<AstrologersList />} />
        <Route path="/todayHoroscope" element={<TodayHoroscope />} />
        <Route path="/bookPanditji" element={<BookPanditjiForm />} />
      </Routes>
    </BrowserRouter>
    // <h1 className="text-8xl  font-bold underline ">Hello world!</h1>
  );
}

export default App;
