import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/products/ProductCard";
import { Product } from "../../interfaces";
import "../../styles/productPage.scss";

export const LongBoardPage = () => {
  const [boards, setBoards] = useState<Product[]>([]);

  const getBoards = async () => {
    const response = await axios(
      "http://localhost:3002/search/findProductsByCategoryId/64c2d983105160d0391b04ea"
    );
    setBoards(response.data?.results);
  };

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header__heroImage-longboard"></div>
      <h1 className="text-center">Long Boards</h1>

      <div className="container">
        <h2 className="categories__title">Baby Colors</h2>

        <div
          className="categories__container"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          {boards.map((board: Product) => (
            <ProductCard
              key={board._id}
              id={board._id}
              name={board.name}
              img={board.img}
              price={board.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
