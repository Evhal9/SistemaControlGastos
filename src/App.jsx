import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Qa from "./pages/Qa";
import Control from "./pages/Control";

import Nav from "./components/Nav";
import Footer from "./components/footer";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Qa" element={<Qa />} />
        <Route
          path="/Balance"
          element={
            <ProtectedRoute>
              <Control />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Control"
          element={
            <ProtectedRoute>
              <Control />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </UserProvider>
  );
}

export default App;