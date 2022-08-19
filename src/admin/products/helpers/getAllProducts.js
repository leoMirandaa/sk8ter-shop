import axios from "axios"

const url = import.meta.env.VITE_REACT_APP_URL

export const getAllProducts = async() => {

  try {
    const response = await axios({
      url: `${url}/api/catalog`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log("Error... ", error)
  }

}