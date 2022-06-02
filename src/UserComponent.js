// src/UserComponent.js

import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import AddUserComponent from "./AddUserComponent";
import { getUser, removeUser } from "./UserData";

const UserComponent = () => {

  // Créé l'état principal du composant à partir de l'objet init
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getUser()
        .then((users) => {
          setData(users);
        });
    }
  }, [data]);

  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!data) return <p>Liste de users en cours de chargement...</p>;

  const resetData = () => setData(null);

  const handleButton = (e) => {
    removeUser(e.target.innerHTML)
      .then(resetData);
  };

  return (
    <Fragment>
      <AddUserComponent addUserCallback={resetData} />
      <div className="field is-grouped is-grouped-multiline">
        {_.map(data, (user, index) => {
          return (
            <div key={index} className="control">
              <button className="button is-danger is-small " onClick={handleButton}>
                {user}
              </button>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default UserComponent;
