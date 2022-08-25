import axios from "axios"

const url = import.meta.env.VITE_REACT_APP_URL

export const deleteProduct = async(id) => {
  try {
    const response = await axios({
      url: `${url}/api/catalog/${id}`,
      data: id,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log('Error... ', error)
  }
}