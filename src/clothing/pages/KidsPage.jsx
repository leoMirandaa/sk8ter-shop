import { Stepper } from "../components/Stepper"
import { useEffect, useState } from "react";
import { DataService } from "../../service/dataService";
import CarouselMen from "../components/CarouselMen";
import CarouselTeenGirls from "../components/CarouselTeenGirls";

export const KidsPage = () => {

  const [viewProduct, setViewProduct] = useState([]);

  return (
    <div className="animate__animated animate__fadeIn">

      <h1 className="text-center">Teen Girl</h1>

      <div className="py-4 px-8 surface-50">
        <Stepper />
        <CarouselTeenGirls />
      </div>


    </div>
  )
}
