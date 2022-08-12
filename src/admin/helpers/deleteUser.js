import axios from "axios"

const URL = "http://127.0.0.1:5000/api/user"

export const deleteUser = async(id) => {
  console.log(' -- ',URL,id  );
  try {
    const response = await axios({
      url: `${URL}/${id}`,
      data: id,
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      }
    })
    return response

  } catch (error) {
    console.log('Error ',error);
  }
}