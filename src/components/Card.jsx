import { useNavigate } from "react-router-dom";

export const Card = ({ img, title }) => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/${title}`);
      }}
      className="relative card-container cursor-pointer shadow-1"
    >
      <img
        width="100%"
        height="100%"
        alt="Card"
        src={`${URL}/${img}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
      <div
        className="card-text text-2xl"
        style={{
          width: "100%",
          left: "50%",
          bottom: "0%",
          transform: "translate(-50%, 0%)",
        }}
      >
        {title}
      </div>
    </div>
  );
};
