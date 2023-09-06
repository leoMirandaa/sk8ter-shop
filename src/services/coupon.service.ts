import axios from "axios";
import { Coupon } from "../interfaces/coupon";
const url = import.meta.env.VITE_REACT_APP_URL;

const getCoupons = async () => {
  try {
    const response = await axios({
      url: `${url}/coupons`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_COUPONS", error);
  }
};

const getCoupon = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/coupons/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_GET_COUPON", error);
  }
};

const createCoupon = async (data: Coupon) => {
  try {
    const response = await axios({
      url: `${url}/coupons`,
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_CREATE_COUPON", error);
    return error.response;
  }
};

const upateCoupon = async (id: string, data: Coupon) => {
  try {
    const response = await axios({
      url: `${url}/coupons/${id}`,
      method: "PUT",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_UPDATE_COUPON", error);
    return error.response;
  }
};

const deleteCoupon = async (id: string) => {
  try {
    const response = await axios({
      url: `${url}/coupons/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR_DELETE_COUPON", error);
    return 400;
  }
};

export default {
  getCoupons,
  getCoupon,
  createCoupon,
  upateCoupon,
  deleteCoupon,
};
