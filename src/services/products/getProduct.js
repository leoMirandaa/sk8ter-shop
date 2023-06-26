import axios from "axios"

const URL = import.meta.env.VITE_REACT_APP_URL

export const getProduct = async(id) => {
  try {
    const response = await axios({
      url: `${URL}/api/catalog/${id}`,
      // data: id,
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