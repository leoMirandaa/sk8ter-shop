import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const [globalUser, setGlobalUser] = useState('')

  return (
    <UserContext.Provider value = {{ globalUser, setGlobalUser }}>
      { children }
    </UserContext.Provider>
  )
}