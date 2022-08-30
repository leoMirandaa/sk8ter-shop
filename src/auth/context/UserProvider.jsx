import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const initialState = {
    name: ''
  }

  const [globalUser, setGlobalUser] = useState( initialState )

  // if(localStorage.getItem('user') !== null) {
  //   console.log('.... ', JSON.parse(localStorage.getItem('user')))
  //   setGlobalUser(JSON.parse(localStorage.getItem('user')))
  // }

  const handleSetGlobalUser = ( user ) => {
    // console.log('User getted ', user);
    setGlobalUser( user )
  }

  return (
    <UserContext.Provider value = {{ globalUser, handleSetGlobalUser }}>
      { children }
    </UserContext.Provider>
  )
}