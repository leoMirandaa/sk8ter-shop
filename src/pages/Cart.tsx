// todo : add validation  There is not Items in Cart
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { UserContext } from "./auth/context/UserContext";
import { Product } from "../interfaces";
import "../styles/cart.scss";

export const Cart = () => {
  const { globalUser } = useContext<any>(UserContext);
  const [productsInCart, setProductsInCart] = useState<any>([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    // handleProductsInCart();

    const getProducts = async () => {
      const products = await axios("http://localhost:3002/products");
      console.log("products: ", products.data);
      setProductsInCart(products.data);
    };

    getProducts();
  }, []);

  const handleProductsInCart = async () => {
    // if (globalUser) {
    //   let result = await getProducts(globalUser);
    //   let parsedJSON = [];
    //   let subTotal = 0;
    //   for (let i = 0; i < result.data.length; i++) {
    //     parsedJSON.push(JSON.parse(result.data[i]));
    //     console.log("price: ", JSON.parse(result.data[i]).price);
    //     subTotal = subTotal += JSON.parse(result.data[i]).price;
    //   }
    //   setProductsInCart(parsedJSON);
    //   setSubTotal(subTotal);
    // }
  };

  const footer = (
    <div className="text-right">
      <Button
        outlined
        label="Clear cart"
        className="mr-2"
        severity="secondary"
      />

      <Button label="Pay now" />
    </div>
  );

  return (
    <div className="animate__animated animate__fadeIn cart__layout ">
      <Card
        title="Your Cart"
        className="cart__layout__items"
      >
        {productsInCart?.slice(0, 3)?.map((product: Product) => (
          <div
            className="cart__layout__items__container"
            key={`product-cart-${product}`}
          >
            <div className="cart__layout__items__container__img">
              <img
                className=""
                src={product?.img?.url}
                alt={product?.name}
                width={60}
              />
            </div>

            <div className="cart__layout__items__container__text">
              <h3>{product?.name}</h3>
              <div>{product?.category?.name}</div>
              <p>{product?.description}</p>
              <div>Quantity: 1</div>
            </div>

            <div className="cart__layout__items__container__price">
              <h3>${product?.price}</h3>
              <Button
                severity="danger"
                icon="pi pi-trash"
                text
              />
            </div>
          </div>
        ))}
      </Card>

      <Card
        title="Purchase summary"
        className="cart__layout__amount"
        footer={footer}
      >
        <div className="cart__layout__amount__rowInfo">
          <div>Subtotal: </div>
          <div> ${subTotal} </div>
        </div>

        <div className="cart__layout__amount__rowInfo">
          <div>Shipping costs: </div>
          <div>$20 </div>
        </div>

        <div className="cart__layout__amount__rowInfo">
          <div>Total </div>
          <div>{subTotal + 20}</div>
        </div>

        <br />

        <h3>Shipping Information</h3>
        <div>
          <p>Standard shipping</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            nesciunt impedit repellat officia recusandae illo.
          </p>
        </div>
      </Card>
    </div>
  );
};
