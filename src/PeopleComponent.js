// src/PeopleComponent.js

import _ from "lodash";
import { createRef, Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import AddPeopleComponent from "./AddPeopleComponent";
import { addPeople, getPeople, removePeople } from "./PeopleData";

const PeopleComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
  const [data, setData] = useState(null);

  const peopleRef = createRef();
  peopleRef.current = {
    inputRef: createRef(),
    buttonRef: createRef(),
  };

  if (!data) {
    getPeople()
      .then((peoples) => {
        setData(peoples);
      });
  }

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!data) return <p>Liste de personnes en cours de chargement...</p>;

  const resetData = () => setData(null);

  const handleButton = (e) => {
    removePeople(e.target.innerHTML)
      .then(resetData);
  };

  const handleAddPeople = (e) => {
    e.preventDefault();

    const { inputRef, buttonRef } = peopleRef.current;
    const value = inputRef.current.value;

    if (!value || value === "") {
      toast("Oups ! Impossible d'enregistrer une valeure vide.", {
        onOpen: () => {
          inputRef.current.className = "input is-small is-rounded is-danger has-background-danger-light";
          buttonRef.current.className = "button is-small is-rounded is-danger";
        },
        onClose: () => {
          inputRef.current.className = "input is-small is-rounded";
          buttonRef.current.className = "button is-small is-rounded is-success";
        },
      });
    }
    else {
      addPeople(inputRef.current.value)
        .then(({ data, headers, status, statusText }) => {
          if (status >= 400) {
            _.each(data.errors, (error) => {
              toast(error, {
                onOpen: () => {
                  inputRef.current.className = "input is-small is-rounded is-danger has-background-danger-light";
                  buttonRef.current.className = "button is-small is-rounded is-danger";
                },
                onClose: () => {
                  inputRef.current.className = "input is-small is-rounded";
                  buttonRef.current.className = "button is-small is-rounded is-success";
                },
              });
            });
          }
        });
    };
  }

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
        <AddPeopleComponent handler={handleAddPeople} ref={peopleRef} />
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
