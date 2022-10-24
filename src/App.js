import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import User from "./pages/User";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="*" element={null} />
          <Route exact path="/home" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/user" component={User} />
        </Routes>
      </Router>
      <Header/>
    </div>
  );
}
