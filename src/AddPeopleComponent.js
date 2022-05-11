// src/PeopleComponent.js

import _ from "lodash";
import { createRef, Fragment,  } from "react";
import { addPeople } from "./PeopleData";

const AddPeopleComponent = (props) => {
  const addPeopleRef = createRef();

  const handleAddPeople = (e) => {
    e.preventDefault();
    addPeople(addPeopleRef.current.value)
      .then(props.addPeopleCallback);
  }

  return (
    <Fragment>
      <div className="field">
        <div className="control">
          <label className="label">Inviter un VIP</label>
          <input type="text" className="input is-large" name="add_people" ref={addPeopleRef} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button onClick={handleAddPeople} className="button">
            Ajouter à la liste
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddPeopleComponent;
