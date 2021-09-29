import axios from "axios";

const BASE_URL = `http://localhost:5000/users`;
const listUser = () => {
  return axios.get(`${BASE_URL}`).then((m) => m.data || []);
};
const createUser = (userData) => {
  return axios.post(`${BASE_URL}`, userData).then((m) => m.data);
};
const updateUser = (userData, id) => {
  return axios.put(`${BASE_URL}/${id}`, userData).then((m) => m.data);
};

const deleteUser = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((m) => m.data);
};
const CrudApiService = {
  listUser,
  createUser,
  updateUser,
  deleteUser,
};
export default CrudApiService;
