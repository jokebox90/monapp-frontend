import 'bulma';
import { Fragment } from 'react';
import PeopleComponent from './PeopleComponent';

function App() {
  return (
    <Fragment>

      <div className="container">
        <div class="hero is-medium is-link">
          <div class="hero-body">
            <p class="title">
              Hello, world!
            </p>
            <p class="subtitle">
              Medium subtitle
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
