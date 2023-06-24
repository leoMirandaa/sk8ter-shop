import { Stepper } from "../../clothing/components/Stepper";
import CarouselTeenGirls from "../../clothing/components/CarouselTeenGirls";
import { Card } from "primereact/card";

export const KidsPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-center">Teen Girl</h1>

      <Card className="py-4 px-8">
        <Stepper />
        <CarouselTeenGirls />
      </Card>
    </div>
  );
};
