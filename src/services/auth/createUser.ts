import axios from "axios";

export const createUser = async(user) => {

  let resopnse = axios({
    url: "http://127.0.0.1:5000/api/user",
    data: user,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function (response) {
      console.log('id: ', response.data)
  })

}
