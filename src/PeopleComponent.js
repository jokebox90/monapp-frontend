// src/PeopleComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import AddPeopleComponent from "./AddPeopleComponent";
import { getPeople, removePeople } from "./PeopleData";

const PeopleComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
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

  const resetData = () => setData(null);

  const handleButton = (e) => {
    removePeople(e.target.innerHTML)
      .then(resetData);
  };

  return (
    <Fragment>
      <AddPeopleComponent addPeopleCallback={resetData} />
      <div className="field is-grouped is-grouped-multiline">
        {_.map(data, (people, index) => {
          return (
            <div key={index} className="control">
              <button className="button" onClick={handleButton}>
                {people}
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default PeopleComponent;
