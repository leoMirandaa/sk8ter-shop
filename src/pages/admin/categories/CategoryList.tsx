import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Category } from "../../../interfaces";
import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { dateFormat } from "../../../helpers/dateFormat";
import tableColumns from "../../../utils/adminTableColumns";
import categoryService from "../../../services/categories.service";
import "../../../styles/admin/table.scss";

export const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    let flteredCategories = categories;
    if (searchTerm.length > 0) {
      flteredCategories = flteredCategories.filter((category: Category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCategories(flteredCategories);
  }, [searchTerm]);

  const getCategories = async () => {
    const response = await categoryService.getCategories();
    const data = response.data.map(({ createdAt, updatedAt, ...rest }) => {
      return {
        createdAt: dateFormat(createdAt),
        updatedAt: dateFormat(updatedAt),
        ...rest,
      };
    });

    setCategories(data);
    setFilteredCategories(data);
    setIsLoading(false);
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
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreate={handleCreate}
      />
    );
  };

  // if (isLoading) {
  //   return (
  //     <div className="table__container">
  //       <TableSkeleton fields={categoryTableColumns} />;
  //     </div>
  //   );
  // }

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={tableColumns.categoryColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={filteredCategories}
            columns={tableColumns.categoryColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
