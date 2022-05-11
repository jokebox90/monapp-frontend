import 'bulma';
import { Fragment } from 'react';
import PeopleComponent from './PeopleComponent';

function App() {
  return (
    <Fragment>

      <div className="container">
        <div className="hero is-medium is-link">
          <div className="hero-body">
            <p className="title">
              Hello, world!
            </p>
            <p className="subtitle">
              Ma liste de VIP
            </p>
          </div>
        </div>
        <div className="section is-small">
          <PeopleComponent />
        </div>

      </div>
    </Fragment>
  );
}

export default App;
