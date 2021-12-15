import React from "react";
import Utama from "./Components/utama.js";
import { Link } from "react-router-dom";
import "./App.css";
// import element Alert yang telah dibuat

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-md py-md-2">
          <ul class="navbar-nav">
            <li class="nav-item py-md-2">
              <Link to="/" class="nav-link">
                <h3 class="navbar-brand">Afridachoo</h3>
              </Link>
            </li>
          </ul>
          <div
            class="collapse navbar-collapse ms-auto"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item py-md-2">
                <Link to="/tentangsaya" class="nav-link">
                  Project
                </Link>
              </li>
              <li class="nav-item py-md-2">
                <Link to="/karya" class="nav-link">
                  Blog
                </Link>
              </li>
              <li class="nav-item py-md-2">
                <Link to="/kontak" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="cointainer-fluid">
          <div class="row">
            <div class="col">
              <Utama />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
