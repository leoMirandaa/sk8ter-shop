import { Button } from "primereact/button";

import { Card as CategoryCard } from "../components/Card";
import { categories } from "../utils/categoriesArr";

export const HomePage = () => {
  return (
    // <div style={{ backgroundColor: "#E8DCD2" }}>
    <div
      className="animate__animated animate__fadeIn"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="animate__animated animate__fadeIn splash relative">
        <div className="absolute splashScreen-text text-center">
          <h2 className="text-5xl lg:text-6xl m-0">Find your style</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mb-4 text-3xl font-bold text-primary price">
            $249.99{" "}
            <span className="ml-2 text-gray-600 font-normal line-through	">
              $499.99
            </span>
          </div>
          <Button size="large">Shop now</Button>
        </div>
      </div>

      <div className="flex justify-content-center surface-ground">
        <div className="font-bold py-3 md:text-lg xl:text-xl w-full flex align-items-center justify-content-evenly border-y-2 border-300	">
          <a href="/kids">Woman</a>
          <a href="">Men</a>
          <a href="">Kids</a>
          <a href="">Sale</a>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className=" grid container py-5"
      >
        {categories.map((category) => (
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="sm:col-11 md:col-6 lg:col-4"
          >
            <CategoryCard
              className="catalog"
              key={category.title}
              title={category.title}
              img={category.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
