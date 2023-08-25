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
    return error.response;
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

const updateUser = async (id: string, data: any) => {
  console.log("updateUser:", data);
  const { street, country, city, state, zip, ...rest } = data;
  console.log("ADDRess: ", rest);
  const newData = {
    ...rest,
    address: {
      street,
      country: country.code,
      city,
      state,
      zip,
    },
  };

  console.log("newDAta: ", newData);

  try {
    const response = await axios({
      url: `${url}/users/${id}`,
      method: "PUT",
      // data,
      data: newData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_UPDATE_USER", error);
    return 400;
  }
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
