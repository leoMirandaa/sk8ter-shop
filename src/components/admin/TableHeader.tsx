import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../../styles/admin/tableHeader.scss";

export const TableHeader = ({
  title,
  inputSearchFilter,
  handleInputSearch,
  handleCreate,
}) => {
  const navigate = useNavigate();

  return (
    <div className="table__header__container">
      <span className="table__header__container__backbutton">
        <Button
          icon="pi pi-arrow-left"
          rounded
          text
          onClick={() => navigate(-1)}
        />
        {title}
      </span>

      <span className="table__header__container__search p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={inputSearchFilter}
          onChange={handleInputSearch}
          placeholder="Search"
        />
      </span>

      <div className="table__header__container__addbutton">
        <Button
          label="Add New"
          icon="pi pi-plus"
          className="p-button-primary md:mt-0"
          onClick={handleCreate}
        />
      </div>
    </div>
  );
};
