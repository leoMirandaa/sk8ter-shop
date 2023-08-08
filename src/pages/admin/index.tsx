import { MenuCard } from "../../components/admin/MenuCard";
import { adminCardOptions } from "../../utils/adminCardOptions";
import "../../styles/admin/home.scss";

export const AdminPage = () => {
  return (
    <div className="animate__animated animate__fadeIn admin___container">
      {adminCardOptions.map((card) => (
        <MenuCard
          key={`card-item-${card.title}`}
          title={card.title}
          icon={card.icon}
        />
      ))}
    </div>
  );
};
