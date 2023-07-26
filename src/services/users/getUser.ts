import axios from "axios"

export const getUser = async(id) => {
  console.log('getUser ...', id);
  try {
    const response = await axios({
      url: `http://127.0.0.1:5000/api/user/${id}`,
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