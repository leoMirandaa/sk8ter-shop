import axios from "axios"

const URL = import.meta.env.VITE_REACT_APP_URL

const data2 = {
	"cart": [
		{
			"productId": "63102af0b4debbf1308848da",
			"quantity": 1
		},
		{
			"productId": "630d4506b215e2cd8504930c",
			"quantity": 1
		}
	]
}

export const getProducts = async(cart) => {
  console.log('getProducts-- ', cart)
  try {
    const response = await axios({
      url: `${URL}/api/catalogs-by-id`,
      // data: cart,
      data: JSON.stringify(cart),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log('getProducts error ', error)
  }
}