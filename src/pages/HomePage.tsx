import { Button } from "primereact/button";

import { Card as CategoryCard } from "../components/Card";
import { categories } from "../utils/categoriesArr";
import "../styles/homePage.scss";

interface categoryProps {
  title: string;
  img: string;
}

export const HomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <header className="header">
        <div className="header__heroImage">
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

      <section
        className="discounts"
        // style={{ background: "black", color: "white" }}
      >
        <div>20% OFF</div>
        <div>20% OFF</div>
        <div>20% OFF</div>
      </section>

      <section className="quote">
        <h2 className="quote__author">John Galliano</h2>
        <p className="quote__phrase">"The joy of dressing is an art." </p>
      </section>

      <main className="categories">
        <div className="container">
          <h2 className="categories__title">Categories</h2>
          <div className="categories__container">
            {categories.map((category: categoryProps) => (
              <div
                key={category.title}
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
        </div>
      </main>
    </div>
  );
};