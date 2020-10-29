import "./App.css";
import { ReactComponent as Logo } from "./Assets/hackney-logo.svg";

function App() {
  return (
    <div className="container">

        <header>
          <div className="header-inner">
            <div className="logo">
              <Logo/>
            </div>
          </div>
          <div className="header-lines"></div>
        </header>

        <section>
          <h1>Welcome to the Hackney Council HR System.</h1>
          <p>If you are a visitor with a pre-booked appointment, please register your visit by clicking the button below.</p>
          <p>If you are an employee of Hackney Council, please login using the button below.</p>
          
          <div className="button-container"> 
            <button>
              Register your visit
              <svg width="17.5" height="19" viewBox="0 0 33 40">
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
              </svg>
            </button>
            <button>
              Employee login
              <svg width="17.5" height="19" viewBox="0 0 33 40">
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
              </svg>
            </button>
          </div>
        </section>

        <footer>
          <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
        </footer>

    </div>
  );
}

export default App;
