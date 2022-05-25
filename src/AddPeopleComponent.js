// src/PeopleComponent.js

import { forwardRef, Fragment, } from "react";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPeopleComponent = forwardRef((props, ref) => {
  const { inputRef, buttonRef } = ref.current;

  return (
    <Fragment>
      <div className="field has-addons is-flex is-justify-content-center">
        <div className="control">
          <input
            type="text"
            className="input is-small is-rounded"
            name="add_people"
            placeholder="Veuillez taper un nom ici..."
            ref={inputRef}
          />
        </div>
        <div className="control">
          <button className="button is-small is-rounded is-success" onClick={props.handler} ref={buttonRef}>
            Inviter
          </button>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
});

export default AddPeopleComponent;
