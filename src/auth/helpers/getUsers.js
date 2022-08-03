import axios from "axios";

export const getUsers = async() => {
  let response = await axios.get("http://127.0.0.1:5000/api/users");
  return response.data;
}