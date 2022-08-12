import { Stepper } from "../components/Stepper"
import { useEffect, useState } from "react";
import { DataService } from "../../service/dataService";
import Product from "../components/product";

export const WomenPage = () => {

  const [viewProduct, setViewProduct] = useState([]);

  const loadProduct = async () =>{
    const service = new DataService();
    let prods = await service.getCatalog();
    setViewProduct(prods);
  };
  useEffect(() => {
      loadProduct();//Catalog loading

  }, []);



  return (
    <div className="animate__animated animate__fadeIn">
      <h1>Women</h1>

      <Stepper />


      <div className="coupons">
          <ul>
              {viewProduct.map((prods) =>
                (
                  <li key={prods.gender.woman}>
                    {prods.title}-{prods.price}-{prods.image}
                  </li>
                ))
              }
          </ul>
      </div>


    </div>
  )
}
