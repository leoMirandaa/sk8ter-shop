import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/products/ProductCard";
import "../../styles/productPage.scss";
import { Product } from "../../interfaces";
import { Loader } from "../../components/ui/Loader";

export const PennyBoardPage = () => {
  const [boards, setBoards] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBoards = async () => {
    const response = await axios(
      "http://localhost:3002/search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
    );
    setBoards(response.data?.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header__heroImage-penny"></div>
      <h1 className="text-center">Penny Boards</h1>

      <div className="container">
        <h2 className="categories__title">Baby Colors</h2>

        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </div>
  );
};
