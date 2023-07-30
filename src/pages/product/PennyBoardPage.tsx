import axios from "axios";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { ProductCart } from "../../components/products/ProductCart";

export const PennyBoardPage = () => {
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
      <div className="header__heroImage2"></div>

      <div className="container">
        <h2 className="categories__title">Baby Colors</h2>

        <div
          className="categories__container"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          {boards.map((board: any) => (
            <ProductCart
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
