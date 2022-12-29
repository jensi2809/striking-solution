import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Login from './Pages/Login'
import Registration from "./Pages/Registration";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
