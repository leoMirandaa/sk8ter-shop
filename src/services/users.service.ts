import axios from "axios";
import { User } from "../interfaces";
const url = import.meta.env.VITE_REACT_APP_URL2;

const getUsers = async () => {
  try {
    const response = await axios({
      url: `${url}/users`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_USER: ", error);
  }
};

const getUser = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/users/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_USER ", error);
  }
};

const createUser = async (user: User) => {
  console.log({ user });
  try {
    const response = await axios({
      url: `${url}/users`,
      method: "POST",
      data: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_CREATE_USER ", error);
    return 400;
  }
};

const deleteUser = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/users/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_DELETE_USER ", error);
    return 400;
  }
};

export default { getUsers, getUser, createUser, deleteUser };
