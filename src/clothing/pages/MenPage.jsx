import { Stepper } from "../components/Stepper"
import { useEffect, useState } from "react";
import { DataService } from "../../service/dataService";
import CarouselMen from "../components/CarouselMen";
// import Product from "../components/product";
// import CarouselMen from "../components/carousel";

export const MenPage = () => {

  const [viewProduct, setViewProduct] = useState([]);

  // const loadProduct = async () =>{
  //   const service = new DataService();
  //   let prods = await service.getMenCatalog();
  //   setViewProduct(prods);
  // };
  // useEffect(() => {
  //     loadProduct();

  // }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      {/* <h1>Women</h1> */}


      <div className="py-4 px-8 surface-50">
        <Stepper />
        <CarouselMen />
      </div>


    </div>
  )
}
