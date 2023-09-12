import { ProductCard } from "../../components/products/ProductCard";
import { ProductSkeleton } from "../../components/ui";
import useFetch from "../../hooks/useFetch";
import { Product } from "../../interfaces";
import "../../styles/productPage.scss";

export const PennyBoardPage = () => {
  const { data, isLoading, error } = useFetch(
    "search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
  );

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header__heroImage-penny" />
      <h1 className="text-center">Penny Boards</h1>

      <div className="container">
        {/* <h2 className="categories__title">Baby Colors</h2> */}

        {isLoading && <ProductSkeleton />}
        {error && <div className="error-container">Error: {error}</div>}

        <div className="categories__container">
          {data &&
            data?.map((board: Product) => (
              <ProductCard
                key={`pennyboard-item-${board._id}`}
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
