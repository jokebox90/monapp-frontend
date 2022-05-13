// src/PeopleComponent.js

import _ from "lodash";
import { createRef, Fragment, useEffect, useState,  } from "react";
import { addPeople } from "./PeopleData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPeopleComponent = (props) => {
  const initState = {
    message: null,
  };
  const [message, setMessage] = useState(null);

  const inputRef = createRef();
  const buttonRef = createRef();

  const handleAddPeople = (e) => {
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
      addPeople(inputRef.current.value)
        .then(props.addPeopleCallback);
    };
  }

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
          <button className="button is-small is-rounded is-success" onClick={handleAddPeople} ref={buttonRef}>
            Inviter
          </button>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AddPeopleComponent;
