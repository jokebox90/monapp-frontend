// src/Peopledata.js

import axios from "axios";
import _ from "lodash";

const API_URL = "https://localhost:8000"

export const getPeople = () => {
  const peoples = [];

  axios.get(`${API_URL}/index`)
    .then((response) => {
      _.each(response.data.peoples, people => peoples.push(people));
    });

  return peoples;
};