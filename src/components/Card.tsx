import { useNavigate } from "react-router-dom";

export const Card = ({ img, title, url }) => {
  const URL = import.meta.env.VITE_REACT_APP_URL;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/${url}`);
        console.log(url);
      }}
      className="relative card-container cursor-pointer shadow-1"
    >
      <img
        width="100%"
        alt={img}
        src={`${URL}/${img}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
      <div
        className="card-text text-xl"
        style={{
          width: "50%",
          left: "27%",
          top: "2%",
          transform: "translate(-50%, 0%)",
        }}
      >
        {title}
      </div>
    </div>
  );
};
