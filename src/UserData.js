// src/Userdata.js

import axios from "axios";
import _ from "lodash";

const API_URL = "https://localhost:8000"

export const getUser = async () => {
  const users = [];

  await axios.get(`${API_URL}/index`)
    .then((response) => {
      _.map(response.data.users, (user) => users.push(user));
    });

  return users;
};

export const addUser = async (name) => {
  let result;

  await axios.post(`${API_URL}/user/add`, { name: name })
    .then((response) => {
      result = response.data.message;
    });

  return result;
};

export const removeUser = async (name) => {
  let result;

  await axios.delete(`${API_URL}/user/${name}`)
    .then((response) => {
      result = response.data.message;
    });

  return result;
};