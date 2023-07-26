import axios from "axios"

export const updateCoupon = async(id, coupon) => {
  console.log('couponID...', id);
  try {
    const response = await axios({
      url: `http://127.0.0.1:5000/api/couponCode/${id}`,
      data: coupon,
      method: 'PUT',
      header: {
        'Content-Type': 'application/json'
      }
    })
    return response

  } catch (error) {
    console.log('Error... ', error)
  }
}