// src/CollaborateurComponent.js

import _ from "lodash";
import { createRef, Fragment, useEffect, useState,  } from "react";
import { addCollaborateur } from "./CollaborateurData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCollaborateurComponent = (props) => {
  const initState = {
    message: null,
  };
  const [message, setMessage] = useState(null);

  const inputRef = createRef();
  const buttonRef = createRef();

  const handleAddCollaborateur = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (!value || value === "") {
      toast("Oups ! Impossible d'enregistrer une valeure vide.", {
        onOpen: () => {
          inputRef.current.className = "input is-medium is-danger has-background-danger-light";
          buttonRef.current.className = "button is-medium is-danger";
        },
        onClose: () => {
          inputRef.current.className = "input is-medium";
          buttonRef.current.className = "button is-medium is-link is-light";
        },
      });
    }
    else {
      addCollaborateur(inputRef.current.value)
        .then(props.addCollaborateurCallback);
    };
  }

  return (
    <Fragment>
      <div className="field has-addons is-flex is-justify-content-center">
        <div className="control">
          <input
            type="text"
            className="input is-meduim"
            name="add_collaborateur"
            placeholder="Veuillez taper un nom ici..."
            ref={inputRef}
          />
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={handleAddCollaborateur} ref={buttonRef}>
            Inviter
          </button>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AddCollaborateurComponent;
