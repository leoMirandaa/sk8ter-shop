import { useEffect, useState } from "react";
import { DataService } from "../../services/dataService";
// import CarouselStyleAssessment from "../components/carousel";

export const WomenPage = () => {
  const [viewProduct, setViewProduct] = useState([]);

  const loadProduct = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setViewProduct(prods);
  };
  useEffect(() => {
    loadProduct(); //Catalog loading
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="mt-0 text-center">Women</h1>
    </div>
  );
};