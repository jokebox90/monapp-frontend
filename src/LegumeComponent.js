// src/LegumeComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import AddLegumeComponent from "./AddLegumeComponent";
import { getLegume, removeLegume } from "./LegumeData";

const LegumeComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getLegume()
        .then((legumes) => {
          setData(legumes);
        });
    }
  }, [data]);

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!data) return <p>Liste de legumes en cours de chargement...</p>;

  const resetData = () => setData(null);

  const handleButton = (e) => {
    removeLegume(e.target.innerHTML)
      .then(resetData);
  };

  return (
    <Fragment>
      <AddLegumeComponent addLegumeCallback={resetData} />
      <div className="field is-grouped is-grouped-multiline">
        {_.map(data, (legume, index) => {
          return (
            <div key={index} className="control">
              <button className="button is-danger is-small " onClick={handleButton}>
                {legume}
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default LegumeComponent;
