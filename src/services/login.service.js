import axios from "axios";

const apiEndUrl = "http://localhost:5000/auth";

const apiUrl = apiEndUrl + "/user";

export function signin(email, password) {
  return axios.post(apiUrl, { email, password });
}
