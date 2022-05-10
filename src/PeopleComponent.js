// src/PeopleComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { getPeople } from "./PeopleData";

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

  console.log(peopleState);
  return (
    <Fragment>
      <h2 className="subtitle">
        Welcome, home!
      </h2>
      <ol>
        {_.map(peopleState.data, (people, index) => {
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
