// src/PeopleComponent.js

import _ from "lodash";
import { createRef, Fragment, useEffect, useState } from "react";
import { addPeople, getPeople } from "./PeopleData";

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

const PeopleComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (loading) {
      const newData = getPeople()
      .then((peoples) => {
        console.log(newData);
        setLoading(false);
        setData(peoples);
      });
    }
  }, [data, loading]);

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (loading) return <p>Liste de personnes en cours de chargement...</p>;
  if (!data) return <p>Erreur de chargement !</p>;

  // console.log(data);
  return (
    <Fragment>
      <AddPeopleComponent addPeopleCallback={() => setLoading(true)} />
      {_.map(data, (people, index) => {
        return (
          <button className="button" key={index}>
            {people}
          </button>
        );
      })}
    </Fragment>
  );
}

export default PeopleComponent;
