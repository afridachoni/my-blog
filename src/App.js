import React from "react";
import Utama from "./Components/utama.js";
import { Link } from "react-router-dom";
import "./App.css";
// import element Alert yang telah dibuat

class App extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <Link to="/" class="nav-link">
              <h3 class="navbar-brand">Afridachoo</h3>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
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
          </div>
        </nav>

        <div class="cointainer">
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
