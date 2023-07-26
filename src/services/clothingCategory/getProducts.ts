import axios from "axios"

const URL = import.meta.env.VITE_REACT_APP_URL

export const getProducts = async(cart) => {
  console.log('getProducts-- ', cart)
  try {
    const response = await axios({
      url: `${URL}/api/catalogs-by-id`,
      // data: cart,
      data: JSON.stringify(cart),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log('getProducts error ', error)
  }
}