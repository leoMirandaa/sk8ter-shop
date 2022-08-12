
import axios from "axios";

export const getAllUsers = async() => {
  try {
    const response = await axios({
      url: "http://127.0.0.1:5000/api/users",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log("Error ", error);
  }

}
