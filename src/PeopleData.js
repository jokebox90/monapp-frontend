// src/Peopledata.js

import axios from "axios";
import _ from "lodash";

const API_URL = "http://localhost:8000"

export const getPeople = async () => {
  const peoples = [];

  await axios.get(`${API_URL}/index`)
    .then((response) => {
      _.map(response.data.peoples, (people) => peoples.push(people));
    });

  return peoples;
};

export const addPeople = async (name) => {
  const result = {};

  await axios.post(`${API_URL}/people/add`, { name: name })
    .then((response) => {
      _.assign(result, response);
    })
    .catch((error) => {
      _.assign(result, error.response);
    });

  return result;
};

export const removePeople = async (name) => {
  let result;

  await axios.delete(`${API_URL}/people/${btoa(name)}`)
    .then((response) => {
      result = response.data.message;
    });

  return result;
};