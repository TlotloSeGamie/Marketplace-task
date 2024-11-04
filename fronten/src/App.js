import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Register';
import ForgotPassword from './components/ForgotPass';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
   
    </Router>
  );
}

export default App;
