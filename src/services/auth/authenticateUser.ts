
import axios from "axios";

export const authenticateUser = async(user) => {
  try {
    const response = await axios({
      url: "http://127.0.0.1:5000/api/login",
      data: user,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error) {
    console.log("Error ", error);
  }

}
