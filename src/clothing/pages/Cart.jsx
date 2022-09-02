import { useContext, useEffect } from "react"
import { UserContext } from "../../auth/context/UserContext"

export const Cart = () => {

  const { globalUser } = useContext( UserContext )

  return (
    <div className="min-h-screen" style={{background: '#EFF3F8'}}>
      <div className="p-4">
        {
          // globalUser.cart.length < 1
          // ? <h1>There no Items in Cart</h1>
          // :
          <div>
            <div className="text-2xl">Cart</div>
            {/* <h3>You already have <b className="bg-primary p-1">{JSON.stringify(globalUser.cart.length)}</b> Products </h3> */}

            {
              globalUser?.cart?.map((cart, index) => (
                <h2 key={ index } className="bg-pink-50 shadow-5 py-2">ProductId: {cart.productId} ------ Quantity: {cart.quantity}</h2>
              ))
            }

          </div>
        }
      </div>
    </div>
  )
}
