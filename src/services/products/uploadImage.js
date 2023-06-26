import axios from 'axios'
const URL = import.meta.env.VITE_REACT_APP_URL

export const uploadImage = async(formdata) => {
  console.log('uploading image...', formdata);
  try {
    const response = await axios({
      url: `${URL}/api/file/upload`,
      data: formdata,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('uploadImage response... ', response);
    return response;

  } catch (error) {
    console.log("Error... ", error)
  }
}