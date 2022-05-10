// src/PeopleComponent.js

import _ from "lodash";
import { createRef, forwardRef, Fragment, useEffect, useState } from "react";
import { addPeople, getPeople } from "./PeopleData";

const AddPeopleComponent = forwardRef((props, ref) => {
  return (
    <Fragment>
      <label>{props.hello}</label>
      <input type="text" className="input is-large" name="add_people" ref={ref} />
    </Fragment>
  );
});

const PeopleComponent = () => {
  // - Objet pour transporter l'état de
  //   l'ensemble composant
  const initPeopleState = {
    // - Sentinelle pour éviter le chargement
    //   depuis l'API à l'infini
    isLoaded: false,
    // - Conteneur qui reçois les données et
    //   permet de les utiliser dans le composant
    data: null,
  };

  // Créé l'état principal du composant à partir de l'objet init
  const [peopleState, setPeopleState] = useState(initPeopleState);

  // - Effectue une opération en parallèle, une
  //   boucle "side effect") pour charger les
  //   données depuis l'API
  useEffect(() => {
    if (!peopleState.isLoaded) {
      // - Créé une copie de l'état en cours pour
      //   une nouvelle configuration du composant
      const newPeopleState = { ...peopleState };
      newPeopleState.data = getPeople();
      newPeopleState.isLoaded = true;
      setPeopleState(newPeopleState)
    }
  }, [peopleState]);

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!peopleState.isLoaded) return <p>Liste des personnes en cours de chargement...</p>;

  const addPeopleRef = createRef();
  const handleAddPeople = (e) => {
    e.preventDefault();
    alert(addPeopleRef.current.value);
    addPeople(addPeopleRef.current.value);
  }

  console.log(peopleState);
  return (
    <Fragment>
      <AddPeopleComponent ref={addPeopleRef} hello="world" />
      <button onClick={handleAddPeople} className="button">
        Ajouter un VIP
      </button>

      <ol>
        {peopleState.data && _.map(peopleState.data, (people, index) => {
          return (
            <li key={index}>
              {people}
            </li>
          );
        })}
      </ol>
    </Fragment>
  );
}

export default PeopleComponent;
