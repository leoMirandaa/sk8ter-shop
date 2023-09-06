import axios from "axios";
const url = import.meta.env.VITE_REACT_APP_URL;
import { Product } from "../interfaces";

const getProducts = async () => {
  try {
    const response = await axios({
      url: `${url}/products`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_PRODUCTS ", error);
  }
};

const getProduct = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/products/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_PRODUCT: ", error);
  }
};

const createProduct = async (product: Product) => {
  try {
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category._id);
    formData.append("img", product.img);

    console.log("formData: ", formData);

    const response = await axios({
      url: `${url}/products`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_CREATE_PRODUCT");
    return error.response;
  }
};

const updateProduct = async (id: string, product: any) => {
  console.log({ id });
  console.log({ product });
  try {
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category._id);
    formData.append("img", product.img);

    console.log("formData: ", formData);
    const response = await axios({
      url: `${url}/products/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_UPDATE_PRODUCT");
    return error.response;
  }
};

const deleteProduct = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/products/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log("ERROR_DELETE_PRODUCT ", error);
    return 400;
  }
};

export default {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
