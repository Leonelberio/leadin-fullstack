import axios from "axios";

// const baseUrl = "https://eyichem.herokuapp.com/api/";
const baseUrl = `${process.env.baseUrl}/api/`;
// const baseUrl = "http://localhost:8080/api/";

const getAllCourse = () => {
  return axios.get(`${baseUrl}publisher/get/courses`);
};

const getOneCourse = (id) => {
  return axios.get(`${baseUrl}publisher/get/course/${id}`);
};

const createCourse = (data) => {
  return axios.post(`${baseUrl}creator/create-course`, data);
};

const uploadVideo = (course) => {
  return axios.post(`${baseUrl}creator/videoUpload/${course}`);
};

const update = (id, data) => {
  return axios.put(`${baseUrl}update/course/${id}`, data);
};

const removeAll = () => {
  return axios.delete(`${baseUrl}del`);
};

const searchCourse = (data) => {
  return axios.post(`${baseUrl}publisher/search`, { name: data });
};

const courseServivce = {
  getAllCourse,
  getOneCourse,
  createCourse,
  update,
  removeAll,
  uploadVideo,
  searchCourse
};
export default courseServivce;
