import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_URL2;

const getCategory = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/categories/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_CATEGORY", error);
    // return 400;
  }
};

const getCategories = async () => {
  try {
    const response = await axios({
      url: `${url}/categories`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_CATEGORIES", error);
    // return 400;
  }
};

const createCategory = async (name: string) => {
  console.log("... createCategory:", name);
  const data = { name };

  try {
    const response = await axios({
      url: `${url}/categories`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_CREATE_CATEGORY..", error);
    return error.response;
  }
};

const deleteCategory = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/categories/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_DELETE_CATEGORY", error);
    return 400;
  }
};

const updateCategory = async (id: string, name: string) => {
  const data = { name };
  try {
    const response = await axios({
      url: `${url}/categories/${id}`,
      method: "PUT",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_UPDATE_CATEGORY", error);
    return error.response;
  }
};

export default {
  getCategory,
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
