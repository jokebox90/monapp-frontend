// src/CollaborateurComponent.js

import _ from "lodash";

import { Fragment, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
// import AddCollaborateurComponent from "./AddCollaborateurComponent";
import { getCollaborateur, removeCollaborateur, getTitle, getSubtitle, getDescription, getImage, } from "./CollaborateurData";
// import Image from '../public/images';
// import avatar1 from './avatar1.jpg';
// import avatar2 from './avatar2.jpg';
// import avatar3 from './avatar3.jpg';

// const listeCollaborateur = [
//   {
//     title: "un titre1",
//     subtitle: "planche",
//     description: "Lorem ipsum dolor sit amet.",
//     // image: "/public/images/collaborateurs/avatar1.jpg"
//   },
//   {
//     title: "un titre2",
//     subtitle: "planche",
//     description: "Lorem ipsum dolor sit amet.",
//     // image: "/public/images/collaborateurs/avatar2.jpg"
//   },
//   {
//     title: "un titre3",
//     subtitle: "planche",
//     description: "Lorem ipsum dolor sit amet.",
//     // image: "/public/images/collaborateurs/avatar3.jpg"
//   }
// ];

const CollaborateurComponent = () => {
  // Créé l'état principal du composant à partir de l'objet init
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      getCollaborateur().then((collaborateurs) => {
        setData(collaborateurs);
      });
    }
  }, [data]);
  console.log(data);
  // - N'affiche qu'un message tant que la boucle
  //   n'a pas pu charger les données
  //   API inaccessible ??
  if (!data) return <p>Liste de collaborateurs en cours de chargement...</p>;

  const resetData = () => setData(null);

  const handleButton = (e) => {
    removeCollaborateur(e.target.innerHTML).then(resetData);
  };

  return (
    
    <Fragment>
      <div className="application">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>Collaborateur Component</title>
        </Helmet>
      </div>
      {/* <div className="hero is-small has-background-link">
        <div className="hero-body">
          <p className="title is-size-1 has-text-white has-text-centered is-family-handwriting">
            Ma liste de Collaborateurs
          </p>
          <AddCollaborateurComponent addCollaborateurCallback={resetData} />
        </div>
      </div> */}

      <div className="hero is-small has-background-link">
        <div className="hero-body"></div>
        <div>
          <h1 className="has-text-centered is-size-1 has-text-weight-bold">Qui sommes-nous?</h1>
        </div>
        <div className="section is-medium is-desktop is-flex is-justify-content-space-around">
          {data.map((collaborateur, index) => {
            return (
              <div key={index}>
                {/* <img src='/images/collaborateurs/avatar1.jpg' alt="image avatar1" /> */}
                <img src={collaborateur.image} alt={`image:${collaborateur/collaborateur.image}`} />
                {/* image/collaborateur/collaborateur.image */}
                {/* image:${collaborateur.title} */}
                <div className="has-text-centered is-size-4 has-text-weight-semibold">
                  {collaborateur.title}
                </div>
                <div className="has-text-centered is-size-6 is-family-sans-serif">
                  {collaborateur.subtitle}
                </div>
                <div className="has-text-centered is-size-5">
                  {collaborateur.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default CollaborateurComponent;
