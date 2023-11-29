import { ProductCard } from "../../components/products/ProductCard";
import { ProductSkeleton } from "../../components/ui";
import { Product } from "../../interfaces";
import useFetch from "../../hooks/useFetch";
import "../../styles/productPage.scss";

export const LongBoardPage = () => {
  const { data, isLoading, error } = useFetch(
    "search/findProductsByCategoryId/64c2d983105160d0391b04ea"
  );

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header__heroImage-longboard" />
      <h1 className="text-center">Long Boards</h1>

      <div className="container">
        {isLoading && <ProductSkeleton />}
        {error && <div className="error-container">Error: {error}</div>}

        <div className="categories__container">
          {data &&
            data?.map((board: Product) => (
              <ProductCard
                key={`longboard-item-${board._id}`}
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
