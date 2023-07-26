import axios from "axios"

const URL = import.meta.env.VITE_REACT_APP_URL

export const updateProduct = async(id, product) => {
  console.log('getProduct ...', id);
  try {
    const response = await axios({
      url: `${URL}/api/product/${id}`,
      data: JSON.stringify(product),
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