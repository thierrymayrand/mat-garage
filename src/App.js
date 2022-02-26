import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import "./App.css"

function App() {
  return (
    <Router className="body">

      <Navbar />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
