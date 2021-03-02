import axios from "axios";

const apiEndUrl = "http://localhost:5000/users";

const apiUrl = apiEndUrl + "/user";

export function signup(username, email, password) {
  return axios.post(apiUrl, { username, email, password });
}
