import { useNavigate } from "react-router-dom";
import "../../styles/admin.scss";

interface CardProps {
  title: string;
  icon: string;
}

export const MenuCard = ({ title, icon }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(title);
  };

  return (
    <div
      className="menu__card"
      onClick={() => handleClick()}
    >
      <h3 className="menu__card__title">{title}</h3>
      <i
        className={`pi ${icon} text-primary`}
        style={{ fontSize: "2em" }}
      ></i>
    </div>
  );
};
