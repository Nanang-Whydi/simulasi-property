import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pembayaran from "./Pages/Pembayaran";
import PaymentSuccess from "./Pages/PaymentSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pembayaran" element={<Pembayaran />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
