import { useEffect, useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { Product } from "../../../interfaces";
import tableColumns from "../../../utils/adminTableColumns";
import ProductService from "../../../services/products.service";
import "../../../styles/admin/table.scss";
import categoriesService from "../../../services/categories.service";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const toast = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  useEffect(() => {
    let filteredProducts = products;
    if (searchTerm.length > 0) {
      filteredProducts = filteredProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filteredProducts);
  }, [searchTerm]);

  const getCategory = async () => {
    const response = await categoriesService.getCategory(
      "64c2d97e105160d0391b04e8"
    );
    console.log("GetCategory: ", response.data);
  };

  const getProducts = async () => {
    const response = await ProductService.getProducts();
    const data = response.data.map(({ img, category, ...rest }: Product) => {
      return {
        img: img.url,
        category: category?.name, //TODO: fix in enum
        ...rest,
      };
    });
    setProducts(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  const handleCreate = () => {
    navigate("create");
  };

  function handleUpdate(productId: string) {
    navigate(`update/${productId}`);
  }

  const handleDelete = async (
    event: ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to delete this product?",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await ProductService.deleteProduct(productId);

        toast.current.show({
          severity: "success",
          summary: "Confirmed",
          detail: "Product deleted",
          life: 3000,
        });

        getProducts();
      },
    });
  };

  const title = () => {
    return (
      <TableHeader
        title="Products"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={tableColumns.productColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={filteredProducts}
            columns={tableColumns.productColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
