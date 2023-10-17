import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HrTasks from "./components/HrTasks";
import MobileInput from "./components/MobileInput";
import OtpAuth from "./components/OtpAuth";
import SuccessCard from "./components/SuccessCard";
import Workforce from "./components/Workforce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HrTasks />} />
        <Route exact path="/get-started" element={<Workforce />} />
        <Route exact path="/mobile-number" element={<MobileInput />} />
        <Route exact path="/otp-authorization" element={<OtpAuth />} />
        <Route
          exact
          path="/registration-successful"
          element={<SuccessCard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
