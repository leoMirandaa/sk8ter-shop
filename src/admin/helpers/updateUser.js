import axios from "axios"

export const updateUser = async(id, user) => {
  console.log('getUser ...', id);
  try {
    const response = await axios({
      url: `http://127.0.0.1:5000/api/user/${id}`,
      data: user,
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