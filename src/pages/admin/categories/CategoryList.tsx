import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { dateFormat } from "../../../helpers/dateFormat";
import { categoryTableColumns } from "../../../utils/AdminTableColumns";
import categoryService from "../../../services/categories.service";
import "../../../styles/admin/table.scss";

export const CategoryList = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearchFilter, setInputSearchFilter] = useState("");
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await categoryService.getCategories();
    const aux = response.data.map(({ createdAt, updatedAt, ...rest }) => {
      return {
        createdAt: dateFormat(createdAt),
        updatedAt: dateFormat(updatedAt),
        ...rest,
      };
    });

    setCategories(aux);
    setIsLoading(false);
  };

  const handleInputSearch = async (event) => {
    //Todo
    // let name = event.target.value;
    // setInputSearchFilter(name);
    // setCouponsFiltered(getCouponByFilter(coupons, name));
  };

  const handleCreate = () => {
    navigate("create");
  };

  const handleUpdate = (categoryId: string) => {
    navigate(`update/${categoryId}`);
  };

  const handleDelete = async (
    event: ChangeEvent<HTMLInputElement>,
    categoryId: string
  ) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to delete this category?",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await categoryService.deleteCategory(categoryId);

        toast.current.show({
          severity: "success",
          summary: "Confirmed",
          detail: "Category deleted",
          life: 3000,
        });

        getCategories();
      },
    });
  };

  const title = () => {
    return (
      <TableHeader
        title="Categories"
        inputSearchFilter={inputSearchFilter}
        handleInputSearch={handleInputSearch}
        handleCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={categoryTableColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={categories}
            columns={categoryTableColumns}
            title={title}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
