// src/PeopleComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>People Component</title>
      </Helmet>
      <div className="hero is-medium has-background-primary">
        <div className="hero-body">
          <p className="title is-size-1 has-text-white has-text-centered is-family-handwriting">
            Ma liste
          </p>
          <p className="title is-size-1 has-text-white has-text-centered is-family-serif">
            V.I.P
          </p>
        </div>
      </div>
      <div className="section is-small has-background-secondary">
        <AddPeopleComponent addPeopleCallback={resetData} />
      </div>
      <div className="section is-medium has-background-light">
        <div className="field is-grouped is-grouped-multiline is-justify-content-center">
          {_.map(data, (people, index) => {
            return (
              <div key={index} className="control">
                <button className="button is-danger is-rounded" onClick={handleButton}>
                  {people}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default PeopleComponent;
