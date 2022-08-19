import axios from "axios"

const url = import.meta.env.VITE_REACT_APP_URL

export const  deleteCoupon = async(id) => {
  try {
    const response = await axios({
      url: `${url}/api/couponCode/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log("Error... ", error)
  }

}