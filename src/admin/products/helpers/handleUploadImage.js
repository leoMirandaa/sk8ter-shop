import axios from 'axios'
const URL = import.meta.env.VITE_REACT_APP_URL

export const handleUploadImage = async(formdata) => {
  try {
    const response = await axios({
      url: `${URL}/api/file/upload`,
      data: formdata,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('response... ', response);
    // getFile(file.name)
    return response;

  } catch (error) {
    console.log("Error... ", error)
  }
}