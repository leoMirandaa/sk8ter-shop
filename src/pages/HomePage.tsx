import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";

import { HomeCategoryCard } from "../components/HomeCategoryCard";
import { ProductCard } from "../components/products/ProductCard";
import { categories } from "../utils/categoriesArr";
import "../styles/homePage.scss";
import { Product } from "../interfaces";

interface categoryProps {
  title: string;
  img: string;
  url: string;
}

export const HomePage = () => {
  const [boards, setBoards] = useState<any>([]);

  const getBoards = async () => {
    const response = await axios(
      "http://localhost:3002/search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
    );

    console.log("**: ", response.data?.results);

    setBoards(response.data?.results);
  };

  useEffect(() => {
    getBoards();
  }, []);
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
        // style={{ background: "#0e0e0e", color: "white" }}
      >
        <div>20% OFF</div>
        <div>20% OFF</div>
        <div>20% OFF</div>
      </section>

      <section className="quote">
        <h2 className="quote__author">Marc Johnson</h2>
        <p className="quote__phrase">
          "All skateboarding is putting ideas into action."{" "}
        </p>
      </section>

      <main className="categories">
        <div className="container">
          <h2 className="categories__title">Categories</h2>
          <div className="categories__container">
            {categories.map((category: categoryProps) => (
              <section
                key={category.title}
                className="categories__container__card"
              >
                <HomeCategoryCard
                  title={category.title}
                  img={category.img}
                  url={category.url}
                />
              </section>
            ))}
          </div>
        </div>

        <div className="container">
          <h2 className="categories__title">Baby Colors</h2>

          <div
            className="categories__container"
            style={{ maxWidth: "1440px", margin: "0 auto" }}
          >
            {boards.map((board: Product) => (
              <ProductCard
                key={board._id}
                _id={board._id}
                name={board.name}
                img={board.img}
                price={board.price}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
