// src/LegumeComponent.js

import _ from "lodash";
import { createRef, Fragment,  } from "react";
import { addLegume } from "./LegumeData";

const AddLegumeComponent = (props) => {
  const addLegumeRef = createRef();

  const handleAddLegume = (e) => {
    e.preventDefault();
    addLegume(addLegumeRef.current.value)
      .then(props.addLegumeCallback);
  }

  return (
    <Fragment>
      <div className="field">
        <div className="control">
          <label className="label">Ajouter des legumes</label>
          <input type="text" className="input is-large is-danger" name="add_legume" ref={addLegumeRef} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button onClick={handleAddLegume} className="button is-danger is-light">
            Ajouter à la liste
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddLegumeComponent;
