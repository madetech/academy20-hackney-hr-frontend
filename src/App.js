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
            <div className="header-lines">
            </div>
          </div>

        </header>

        <section>
          <p>Are you a</p>
          <button>
            Visitor
            <svg width="17.5" height="19" viewBox="0 0 33 40">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
            </svg>
          </button>
          <button>
            Employee
            <svg width="17.5" height="19" viewBox="0 0 33 40">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
            </svg>
          </button>
        </section>

        <footer>
          <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
        </footer>
    </div>
  );
}

export default App;
