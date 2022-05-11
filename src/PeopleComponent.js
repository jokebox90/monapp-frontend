// src/PeopleComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import AddPeopleComponent from "./AddPeopleComponent";
import { getPeople } from "./PeopleData";

const PeopleComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getPeople()
        .then((peoples) => {
          setData(peoples);
        });
    }
  }, [data]);

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!data) return <p>Liste de personnes en cours de chargement...</p>;

  return (
    <Fragment>
      <AddPeopleComponent addPeopleCallback={() => setData(null)} />
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
