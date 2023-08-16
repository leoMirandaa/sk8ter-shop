import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../../styles/admin/tableHeader.scss";

export const TableHeader = ({ title, searchTerm, setSearchTerm, onCreate }) => {
  const navigate = useNavigate();

  return (
    <div className="table__header__container">
      <span className="table__header__container__backbutton">
        <Button
          rounded
          text
          icon="pi pi-arrow-left"
          onClick={() => navigate("/admin")}
        />
        {title}
      </span>

      <span className="table__header__container__search p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </span>

      <div className="table__header__container__addbutton">
        <Button
          label="Add New"
          icon="pi pi-plus"
          className="p-button-primary md:mt-0"
          onClick={onCreate}
        />
      </div>
    </div>
  );
};
