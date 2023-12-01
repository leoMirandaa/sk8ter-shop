import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../interfaces";

export const ProductCard = ({ _id, name, img, price }: Product) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <span
      className="card__container"
      key={name}
      onClick={() => navigate(`${location?.pathname}/${_id}`)}
    >
      <img
        width="80px"
        src={img.url}
        alt={name}
      />
      <div className="mb-2">
        <h3 className="my-1 text-xl">{name}</h3>
        <h4 className="my-0  text-600">${price}.00 USD</h4>
      </div>
    </span>
  );
};
