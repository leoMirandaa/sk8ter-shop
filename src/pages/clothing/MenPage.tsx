import CarouselMen from "../../components/CarouselMen";

export const MenPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-center mt-0">Men</h1>

      <div className="py-4 px-8 surface-50">
        <CarouselMen />
      </div>
    </div>
  );
};
