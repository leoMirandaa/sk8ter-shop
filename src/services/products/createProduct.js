import axios from "axios";

const url = import.meta.env.VITE_REACT_APP_URL;

export const createProduct = async (product) => {
  console.log("createProduct... ", product);

  try {
    const response = await axios({
      url: `${url}/api/catalog`,
      data: product,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log("Error... ", error);
  }
};
