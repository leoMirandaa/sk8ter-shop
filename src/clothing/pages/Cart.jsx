import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../auth/context/UserContext"
import { getProducts } from "../helpers"

export const Cart = () => {

  const { globalUser } = useContext( UserContext )
  const [productsInCart, setProductsInCart] = useState([])

  useEffect( () => {
    // console.log("*** ... ", globalUser?.cart)
    // console.log('useEffect ');
    handleProductsInCart();
  }, [])

  const handleProductsInCart = async() => {
    if(globalUser){
      // console.log('....', globalUser?.cart)
      let result = await getProducts(globalUser)
      console.log('result', result)
    }
  }

  const footer = (
    <span>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
    </span>
  );

  return (
    <div className="min-h-screen" style={{background: '#EFF3F8'}}>
      <div className="p-4">
        {
          globalUser?.cart?.length < 1
          ? <h1>There no Items in Cart</h1>
          :
          <div>
            {/* <h3>You already have <b className="bg-primary p-1">{JSON.stringify(globalUser.cart.length)}</b> Products </h3> */}
            <div className="px-8">
              <div className="grid">
                <div className="col-8">
                  <Card title="Your Card" footer={footer} >
                    {
                      globalUser?.cart?.map((cart, index) => (

                        <h2 key={ index } className="bg-pink-50 shadow-5 py-2">ProductId: {cart.productId} ------ Quantity: {cart.quantity}</h2>
                      ))
                    }
                    <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                  </Card>
                </div>

                <div className="col">
                  <Card title="Purchase summary" className="px-4">
                    <div className="flex justify-content-between mb-3">
                      <div>Subtotal: </div>
                      <div>$888 </div>
                    </div>
                    <div className="flex justify-content-between mb-3">
                      <div>Shipping costs: </div>
                      <div>$888 </div>
                    </div>
                    <div className="flex justify-content-between mb-5">
                      <div>Total </div>
                      <div>$888 </div>
                    </div>

                    <h3>Shipping Information</h3>
                    <div className="text-left">
                      <p>Standard shipping</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt impedit repellat officia recusandae illo.</p>
                    </div>

                    {/* <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p> */}
                  </Card>
                </div>
                </div>
            </div>

          </div>
        }
      </div>
    </div>
  )
}
