import { useEffect, useState } from "react";
import { DataService } from "../service/dataService";
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
      <div className="py-4 px-8 surface-50 bg-primary">
        {/* <CarouselStyleAssessment /> */}
      </div>
    </div>
  );
};
