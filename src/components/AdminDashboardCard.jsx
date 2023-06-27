import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import "../styles/adminDashboardCard.css";

export const CardUI = ({ title, icon }) => {
  const navigate = useNavigate();

  const handleClick = (titleToSearch) => {
    navigate(`${titleToSearch}`);
  };

  return (
    <Card
      className="admin-card border-none"
      title={title}
      style={{ width: "15rem", cursor: "pointer" }}
      onClick={() => handleClick(title)}
    >
      <i
        className={`pi ${icon} text-primary`}
        style={{ fontSize: "2em" }}
      ></i>
    </Card>
  );
};
