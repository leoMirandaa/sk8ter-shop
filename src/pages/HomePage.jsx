import { Button } from "primereact/button";

import { Card as CategoryCard } from "../components/Card";
import { categories } from "../utils/categoriesArr";
import "../styles/homePage.scss";

export const HomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <header className="header">
<<<<<<< HEAD
        <div className="header__heroImage">
=======
        <div className="header__heroImage container">
>>>>>>> main
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

<<<<<<< HEAD
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
=======
      <div className="container">
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

        <section className="categories">
>>>>>>> main
          <h2 className="categories__title">Categories</h2>
          <div className="categories__container">
            {categories.map((category) => (
              <div
                key={category.title}
<<<<<<< HEAD
=======
                // style={{ margin: "0 auto" }}
>>>>>>> main
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
<<<<<<< HEAD
        </div>
      </main>
=======
        </section>
      </div>
>>>>>>> main
    </div>
  );
};
