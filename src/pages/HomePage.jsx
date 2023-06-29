import { Button } from "primereact/button";

import { Card as CategoryCard } from "../components/Card";
import { categories } from "../utils/categoriesArr";
import "../styles/homePage.scss";

export const HomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <header className="header">
        <div className="header__heroImage container">
          <div className="header__heroImage__textContainer">
            <h2 className="header__heroImage__textContainer__title">
              20 OFF EVERY THING
            </h2>
            <h4 className="header__heroImage__textContainer__subtitle">
              Lorem ipsum dolor sit amet consectetur.
            </h4>

            <Button>Get Deals</Button>
          </div>
        </div>
      </header>

      <div className="container">
        <section className="discounts">
          <div>20% OFF</div>
          <div>20% OFF</div>
          <div>20% OFF</div>
        </section>

        <section className="quote">
          <h2 className="quote__author">John Galliano</h2>
          <p className="quote__phrase">"The joy of dressing is an art." </p>
        </section>

        <section className="categories">
          <h2 className="categories__title">Categories</h2>
          <div className="categories__container">
            {categories.map((category) => (
              <div
                key={category.title}
                // style={{ margin: "0 auto" }}
                className="categories__container__card"
              >
                <CategoryCard
                  className="catalog"
                  title={category.title}
                  img={category.img}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
