import { Button } from "primereact/button"
import { useEffect, useState } from "react"

export const TestingComponents = () => {

  const [name, setName] = useState('initalValue')

  useEffect(() => {
    console.log('name2', name)
  }, [name])


  const handleName = () => {
    let i  = 0;
    setName('changed')
    console.log('name1', name)
  }

  return (
    <div className="pink-200">
      <h1>name: {name}</h1>

      <Button
        className="p-button-primary"
        onClick={ handleName }
      >
        Button
      </Button>
    </div>
  )
}
