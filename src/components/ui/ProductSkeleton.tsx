import { Skeleton } from "primereact/skeleton";
import "../../styles/loader.scss";

export const ProductSkeleton = () => {
  return (
    <div className="categories__container">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={`product-skeleton-${item}`}
          className="card__container"
        >
          <Skeleton
            width="100%"
            height="350px"
          />
          <div className="product-skeleton-btn-container">
            <Skeleton
              width="6rem"
              height="2.5rem"
            />
            <Skeleton
              width="3rem"
              height="2.5rem"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
