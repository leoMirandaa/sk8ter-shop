import { ProductCard } from "../../components/products/ProductCard";
import { ProductSkeleton } from "../../components/ui";
import { Product } from "../../interfaces";
import useFetch from "../../hooks/useFetch";
import "../../styles/productPage.scss";
import { useParams } from "react-router-dom";

export const PennyBoardPage = () => {
  const { data, isLoading, error } = useFetch(
    "search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
  );

  const params = useParams();
  console.log("P params: ", params);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header__heroImage-penny" />
      <h1 className="text-center">Penny Boards</h1>

      <div className="container">
        {isLoading && <ProductSkeleton />}
        {error && <div className="error-container">Error: {error}</div>}

        <div className="categories__container">
          {data &&
            data?.map((board: Product) => (
              <ProductCard
                key={`pennyboard-item-${board._id}`}
                _id={board._id}
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
