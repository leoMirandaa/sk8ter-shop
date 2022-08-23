import { Stepper } from "../components/Stepper"
import { useEffect, useState } from "react";
import { DataService } from "../../service/dataService";
// import Product from "../components/product";
import CarouselStyleAssessment from "../components/carousel";

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
      <h1 className="text-center">Women</h1>


      <div className="py-4 px-8 surface-50">
        <Stepper />
        <CarouselStyleAssessment />
      </div>


    </div>
  )
}
