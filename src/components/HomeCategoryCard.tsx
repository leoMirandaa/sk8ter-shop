import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../utils/contants";
import "../styles/homeCategoryCard.scss";

export const HomeCategoryCard = ({ img, title, url }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category__card"
      onClick={() => {
        navigate(`/${url}`);
      }}
    >
      <img
        width="100%"
        alt={img}
        src={img || CONSTANTS.NO_IMAGE}
      />

      <h3 className="category__card__text">{title}</h3>
    </div>
  );
};
