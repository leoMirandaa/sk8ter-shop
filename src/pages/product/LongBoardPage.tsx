import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/products/ProductCard";
import "../../styles/productPage.scss";

export const LongBoardPage = () => {
  const [boards, setBoards] = useState<any>([]);

  const getBoards = async () => {
    const response = await axios(
      "http://localhost:3002/search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
    );
    setBoards(response.data?.results);
  };

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      {/* <h1 className="mt-0 text-center">Penny Boards</h1> */}
      <div className="header__heroImage-longboard"></div>

      <div className="container">
        <h2 className="categories__title">Baby Colors</h2>

        <div
          className="categories__container"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          {boards.map((board: any) => (
            <ProductCard
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