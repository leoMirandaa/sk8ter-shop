import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Cart = () => {

  const { userCart } = useContext( CartContext )

  return (
    <div className="min-h-screen" style={{background: '#EFF3F8'}}>
      <div className="p-4">
        {
          userCart.numberOfProducts < 1
          ? <h1>There no Items in Cart</h1>
          :
          <div>
            <div className="text-2xl">Cart</div>
            <h3 className="bg-pink-500">{JSON.stringify(userCart)}</h3>
          </div>
        }
      </div>
    </div>
  )
}
