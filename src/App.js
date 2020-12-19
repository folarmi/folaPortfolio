import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
