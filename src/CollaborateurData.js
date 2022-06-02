// src/Collaborateurdata.js

import axios from "axios";
import _ from "lodash";

const API_URL = "https://localhost:8000";

export const getCollaborateur = async () => {
  const collaborateurs = [];
console.log(collaborateurs);
  await axios.get(`${API_URL}/collaborateur`).then((response) => {

    _.map(response.data.collaborateurs, (collaborateur) => collaborateurs.push(collaborateur));
  }); 

  return collaborateurs;
};

export const getTitle = async () => {
  const titles = [];

  await axios.get(`${API_URL}/collaborateur`).then((response) => {
    _.map(response.data.titles, (title) => titles.push(title));
  });

  return titles;
};

export const getSubtitle = async () => {
  const subtitles = [];

  await axios.get(`${API_URL}/collaborateur`).then((response) => {
    _.map(response.data.subtitles, (subtitle) => subtitles.push(subtitle));
  });

  return subtitles;
};

export const getDescription = async () => {
  const descriptions = [];

  await axios.get(`${API_URL}/collaborateur`).then((response) => {
    _.map(response.data.description, (description) =>
      descriptions.push(description)
    );
  });

  return descriptions;
};

export const getImage = async () => {
  const images = [];

  await axios.get(`${API_URL}/collaborateur`).then((response) => {
    _.map(response.data.image, (image) =>
    images.push(image)
    );
  });

  return images;
};

export const addCollaborateur = async (title) => {
  let result;

  await axios
    .post(`${API_URL}/collaborateur/add`, { title: title })
    .then((response) => {
      result = response.data.message;
    });

  return result;
};

export const removeCollaborateur = async (title) => {
  let result;

  await axios.delete(`${API_URL}/collaborateur/${title}`).then((response) => {
    result = response.data.message;
  });

  return result;
};
