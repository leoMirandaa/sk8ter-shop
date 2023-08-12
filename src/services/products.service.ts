import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios({
      url: "http://localhost:3002/products",
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

const deleteProduct = async (id: string) => {
  try {
    const response = await axios({
      url: `http://localhost:3002/products/${id}`,
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

export default { getProducts, deleteProduct };
