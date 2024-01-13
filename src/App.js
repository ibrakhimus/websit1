import "./App.css";
import FormPage from "./pages/FormPage";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
