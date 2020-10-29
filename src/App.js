import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./images/hackney-logo.svg";

import VisitorPage from "./pages/visitor/visitorPage";

function App() {
  return (
    <Router>
      <div className="container">

          <header>
            <div className="header-inner">
              <div className="logo">
                <Logo/>
              </div>
            </div>
            <div className="header-lines"></div>
          </header>

            <Switch>
              <Route exact path="/visitor" component={VisitorPage}/>
            
            <section>
              <div className="welcome-text">
              <h1>Welcome to the Hackney Council HR System.</h1>
              <p>If you are a visitor with a pre-booked appointment, please register your visit by clicking the button below. Once you have registered your visit, the person who you booked a visit with will soon come and collect you.</p>
              <p>If you are an employee of Hackney Council, please login using the button below.</p>
              </div>
              
              <div className="button-container"> 
              {/*turn these buttons into components for reuseability*/}
              <Link to="/visitor">
                <button>
                  Register your visit
                  <svg width="17.5" height="19" viewBox="0 0 33 40">
                    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
                  </svg>
                </button>
              </Link>
                
                <button>
                  Employee login
                  <svg width="17.5" height="19" viewBox="0 0 33 40">
                    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
                  </svg>
                </button>
              </div>
            </section>
            </Switch>

          <footer>
            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
          </footer>

      </div>
    </Router>
  );
}

export default App;
