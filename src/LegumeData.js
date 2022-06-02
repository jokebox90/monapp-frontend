// src/Legumedata.js

import axios from "axios";
import _ from "lodash";

const API_URL = "https://localhost:8000"

export const getLegume = async () => {
  const legumes = [];

  await axios.get(`${API_URL}/legume`)
    .then((response) => {
      _.map(response.data.legumes, (legume) => legumes.push(legume));
    });

  return legumes;
};

export const addLegume = async (name) => {
  let result;

  await axios.post(`${API_URL}/legume/add`, { name: name })
    .then((response) => {
      result = response.data.message;
    });

  return result;
};

export const removeLegume = async (name) => {
  let result;

  await axios.delete(`${API_URL}/legume/${name}`)
    .then((response) => {
      result = response.data.message;
    });

  return result;
};