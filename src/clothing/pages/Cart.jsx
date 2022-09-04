import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../auth/context/UserContext"
import { Divider } from 'primereact/divider';
import { ScrollTop } from 'primereact/scrolltop';


import { getProducts } from "../helpers"

const URL = import.meta.env.VITE_REACT_APP_URL


export const Cart = () => {

  const { globalUser } = useContext( UserContext )
  const [productsInCart, setProductsInCart] = useState([])
  const [subTotal, setSubTotal] = useState(0)

  useEffect( () => {
    // console.log("*** ... ", globalUser?.cart)
    // console.log('useEffect ');
    handleProductsInCart();
  }, [])

  const handleProductsInCart = async() => {
    if(globalUser){
      // console.log('....', globalUser?.cart)
      let result = await getProducts(globalUser)
      console.log('-*-*',(result.data))
      // console.log('-*-*result',JSON.parse(result.data[0]))
      // setProductsInCart(JSON.parse(result.data[0]))

      let parsedJSON = []
      let subTotal = 0
      for (let i = 0; i < result.data.length; i++) {
        parsedJSON.push(JSON.parse(result.data[i]));
        console.log('price: ', JSON.parse(result.data[i]).price);
        subTotal = (subTotal += JSON.parse(result.data[i]).price)
      }
      // console.log(".......... ",parsedJSON)
      setProductsInCart(parsedJSON)
      setSubTotal(subTotal)
    }
  }

  const footer = (
    <div className="text-right">
        <Button label="Clear cart" className="p-button-outlined mr-4" />
        <Button label="Continue buying" className="p-button-secondary mr-4"/>
        <Button label="Pay now" />
    </div>
  );

  return (
    <div className="min-h-screen" style={{background: '#EFF3F8'}}>
      <ScrollTop threshold={100} />

      <div className="p-4">
        {
          globalUser?.cart?.length < 1
          ? <div className="flex justify-content-center align-items-center mt-8 text-2xl opacity-70">There is not Items in Cart</div>
          :
          <div>
            {/* <h3>You already have <b className="bg-primary p-1">{JSON.stringify(globalUser.cart.length)}</b> Products </h3> */}
            <div className="px-8">
              <div className="grid">
                <div className="col-8">
                  <Card  footer={footer} >
                    <Divider className="text-2xl mt-0 mb-4 font-bold" align="left" type="dashed">
                      <b>Your cart</b>
                    </Divider>
                    {
                      productsInCart?.map((product, index) => (

                      <div className="grid" key={index}>
                        <div className="col-3 "><img src={`${URL}/static/${product.image}`} alt="" style={{width: '100%'}} /></div>

                        <div className="col px-4">
                          <h3>{product.title}</h3>
                          <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elitadipisicing elit. Facere, ut.</p>
                          <div className="text-left my-3">Category: {product.category === 'Wn' ? "Woman" : ""}</div>
                          <div className="text-left my-3">Style type:  {product.styleType}</div>
                          <div className="text-left my-3">Quantity 1</div>


                        </div>

                        <div className="col-2 font-bold mt-4 flex flex-column justify-content-between">
                          <div className="text-right">
                            ${product.price}
                          </div>
                          <div className="text-right">
                            <Button className="text-right p-button-outlined p-button-danger" label="Delete" />
                          </div>
                        </div>

                        <Divider />
                      </div>


                        // <h2 key={ index } className="bg-pink-50 shadow-5 py-2">productsInCart: {productsInCart.title} ------ Quantity: {1}</h2>
                      ))
                    }
                  </Card>
                </div>

                <div className="col">
                  <Card title="Purchase summary" className="px-4">
                    <div className="flex justify-content-between mb-3">
                      <div>Subtotal: </div>
                      <div> ${subTotal} </div>
                    </div>
                    <div className="flex justify-content-between mb-3">
                      <div>Shipping costs: </div>
                      <div>$20 </div>
                    </div>
                    <div className="flex justify-content-between mb-5">
                      <div>Total </div>
                      <div>{subTotal + 20}</div>
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
