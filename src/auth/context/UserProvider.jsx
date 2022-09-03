import { useEffect, useState } from "react"
// import { getUser } from "../../admin/users"
import { getUser } from "../helpers/getUser"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const initialState = {
    name: ''
  }

  const [globalUser, setGlobalUser] = useState( [] )

  const loadUserFromServer = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log('user...', user)
    if( user ) {
      // setGlobalUser( user )
      let serverUser = await getUser(user._id)
      // console.log(serverUser);
      setGlobalUser(serverUser.data)
    }
  }

  useEffect( () => {
    loadUserFromServer();
  }, [])

  const handleSetGlobalUser = ( user ) => {
    setGlobalUser( user )
  }

  return (
    <UserContext.Provider value = {{ globalUser, handleSetGlobalUser }}>
      { children }
    </UserContext.Provider>
  )
}