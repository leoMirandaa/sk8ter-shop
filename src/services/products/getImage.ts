import axios from 'axios'

const URL = import.meta.env.VITE_REACT_APP_URL

export const getImage = async(fileName) => {
  console.log('getFile');
  try {
    const response = await axios({
      url: `${URL}/api/file/${fileName}`,
      // data: id,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    })
    console.log('response getImage ', response.request.responseURL)
    // setImageLink(response.request.responseURL)
    return response.request.responseURL

  } catch (error) {
    console.log('Error... ', error)
  }
}