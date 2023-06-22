import { Stepper } from "../clothing/components/Stepper";
import { useEffect, useState } from "react";
import { DataService } from "../service/dataService";
import CarouselMen from "../clothing/components/CarouselMen";

export const MenPage = () => {
  const [viewProduct, setViewProduct] = useState([]);

  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-center">Men</h1>

      <div className="py-4 px-8 surface-50">
        <Stepper />
        <CarouselMen />
      </div>
    </div>
  );
};
