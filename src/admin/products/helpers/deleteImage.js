import axios from 'axios'

const URL = import.meta.env.VITE_REACT_APP_URL

export const deleteImage = async(formdata) => {
  console.log('deleteImage.js ', formdata);
  try {
    const response = await axios({
      url: `${URL}/api/file/delete`,
      data: formdata,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("deleteImage response ", response)
    return response

  } catch (error) {
    console.log("Error... ", error)
  }
}