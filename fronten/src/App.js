import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Register';
import ForgotPassword from './components/ForgotPass';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import FAQ from './components/FAQ';
import ReturnsAndExchanges from './components/ReturnsAndExchange';
import ShippingInformation from './components/ShippingInfo';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';
import AdminDashboard from './components/Admin';
import Checkout from './components/CheckouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<ReturnsAndExchanges />} />
        <Route path="/shipping" element={<ShippingInformation />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/admin' element={<AdminDashboard/>} />
        {/* <Route path='/' element={<Checkout/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;