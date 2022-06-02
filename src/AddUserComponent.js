// src/UserComponent.js

import _ from "lodash";
import { createRef, Fragment, useEffect, useState,  } from "react";
import { addUser } from "./UserData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUserComponent = (props) => {
  const initState = {
    message: null,
  };
  const [message, setMessage] = useState(null);

  const inputRef = createRef();
  const buttonRef = createRef();

  const handleAddUser = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (!value || value === "") {
      toast("Oups ! Impossible d'enregistrer une valeure vide.", {
        onOpen: () => {
          inputRef.current.className = "input is-small is-rounded is-danger has-background-danger-light";
          buttonRef.current.className = "button is-small is-rounded is-danger";
        },
        onClose: () => {
          inputRef.current.className = "input is-small is-rounded";
          buttonRef.current.className = "button is-small is-rounded is-success";
        },
      });
    }
    else {
      addUser(inputRef.current.value)
        .then(props.addUserCallback);
    };
  }

  return (
    <Fragment>
      <div className="field has-addons is-flex is-justify-content-center">
        <div className="control">
          <input
            type="text"
            className="input is-small is-rounded"
            name="add_user"
            placeholder="Veuillez taper un nom ici..."
            ref={inputRef}
          />
        </div>
        <div className="control">
          <button className="button is-small is-rounded is-success" onClick={handleAddUser} ref={buttonRef}>
            Inviter
          </button>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AddUserComponent;
