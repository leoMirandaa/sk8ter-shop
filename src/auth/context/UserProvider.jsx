import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const [globalUser, setGlobalUser] = useState( null )
  console.log('UserProvider ', globalUser)

  const handleSetGlobalUser = ( user ) => {
    console.log('User getted ', user);
    setGlobalUser( user )
    console.log('handleSetGlobalUser ', globalUser);
  }


  return (
    <UserContext.Provider value = {{ globalUser, handleSetGlobalUser }}>
      { children }
    </UserContext.Provider>
  )
}