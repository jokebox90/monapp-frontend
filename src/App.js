import 'bulma';
import { Fragment } from 'react';
import PeopleComponent from './PeopleComponent';

function App() {
  return (
    <Fragment>
      <h1 className="title">Hello, world!</h1>
      <div className="container">
        <PeopleComponent />
      </div>
    </Fragment>
  );
}

export default App;
