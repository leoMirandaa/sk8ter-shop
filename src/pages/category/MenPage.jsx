import { Stepper } from "../../clothing/components/Stepper";
import CarouselMen from "../../clothing/components/CarouselMen";

export const MenPage = () => {
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
