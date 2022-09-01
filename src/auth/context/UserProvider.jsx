import { useEffect, useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const initialState = {
    name: ''
  }

  const [globalUser, setGlobalUser] = useState( [] )

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log('user...', user)
    if( user ) {
      setGlobalUser( user )
    }
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