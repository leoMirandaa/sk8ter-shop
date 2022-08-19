import axios from "axios"

const URL = import.meta.env.VITE_REACT_APP_URL

export const getProduct = async(id) => {
  console.log('getUser ...', id);
  try {
    const response = await axios({
      url: `${URL}/api/user/${id}`,
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