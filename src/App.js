import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav} from "react-bootstrap";
import {BrowserRouter as Router,Link, Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Pm from "./pages/Pm";
import Tempurature from "./pages/Tempurature";
import Carbon from "./pages/Carbon";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Router>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link as={Link} to="/">แดชบอร์ด</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Pm">ข้อมูลการวัดฝุ่น</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/Tempurature">ข้อมูลการวัดอุณภูมิและความชื้น</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/carbon">ข้อมูลการวัดคาร์บอนไดออกไซด์</Nav.Link>
          </Nav.Item>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/Pm" component={Pm}/>
            <Route  path="/Tempurature" component={Tempurature}/>
            <Route  path="/Carbon" component={Carbon}/>
          </Switch>
        </Nav>
      </Router>
    </header>
    </div>
  );
}
export default App;
