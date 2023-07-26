import axios from "axios"

const url = import.meta.env.VITE_REACT_APP_URL

export const getAllCoupons = async() => {
  console.log('URL: ',url);
  try {
    const response = await axios({
      url: `${url}/api/couponCode`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log("Error.. ", error)
  }
}