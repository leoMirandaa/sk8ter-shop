import axios from "axios"

export const getCoupon = async(id) => {
  console.log('getCouponID...', id);
  try {
    const response = await axios({
      url: `http://127.0.0.1:5000/api/couponCode/${id}`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
    return response

  } catch (error) {
    console.log('Error... ', error)
  }
}