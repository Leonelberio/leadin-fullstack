import axios from "axios";

// const baseUrl = "https://eyichem.herokuapp.com/api/";
// const baseUrl = process.env.baseUrl;
// const baseUrl = "http://localhost:8080/api/";
const baseUrl = `${process.env.baseUrl}/api/`;


const getAll = () => {
  return axios.get(`${baseUrl}cat`);
};

const get = (id) => {
  return axios.get(`${baseUrl}cat/${id}`);
};

const create = (data) => {
  return axios.post(`${baseUrl}cat/`, data);
};

const update = (id, data) => {
  return axios.put(`${baseUrl}cat/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}cat/${id}`);
};

const removeAll = () => {
  return axios.delete(`${baseUrl}cat/`);
};

const findByTitle = (name) => {
  return axios.get(`${baseUrl}cat?name=${name}`);
};

const catService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default catService;
