import axios from "axios"

export const createUser = async(user) => {
  console.log('... ', user);
  try {
    await axios({
      url: 'http://127.0.0.1:5000/api/user',
      data: user,
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      }
    })
    return Response

  } catch (error) {
    console.log('Error', error);
  }
}