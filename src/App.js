import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// import Layout from './layouts/Layout';
// import Home from './pages/Home/Home';
import 'bulma'
import './App.scss'
<<<<<<< Updated upstream

import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import PeopleComponent from './PeopleComponent';


=======
import CollaborateurComponent from './CollaborateurComponent';

>>>>>>> Stashed changes
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream
          <Route path="/" element={<PeopleComponent />} />
=======
          <Route path="/" element={<CollaborateurComponent />}>
            <Route index element={<index />} />
          </Route>
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
<<<<<<< Updated upstream
}
=======
}


// import './App.scss'
// import 'bulma'
// import { Fragment } from 'react';
// import PeopleComponent from './PeopleComponent';
// import LegumeComponent from './LegumeComponent';
// import UserComponent from './UserComponent';
// import CollaborateurComponent from './CollaborateurComponent';

// function App() {
//   var mainTitle ="Fiche collaborateurs";
//   return (
//     <Fragment>
//       <CollaborateurComponent />
//       <PeopleComponent />
//       <LegumeComponent />
//       <UserComponent />
//     </Fragment>
//   );
// }

// export default App;
>>>>>>> Stashed changes
