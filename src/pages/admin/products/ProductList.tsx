import { useEffect, useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

// import {
//   getAllProducts,
//   getProductsFiltered,
// } from "../../../services/products";
import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { Product } from "../../../interfaces";
import { productTableColumns } from "../../../utils/AdminTableColumns";
import ProductService from "../../../services/products.service";
import "../../../styles/admin/table.scss";

const productInitialState = {
  name: "",
  description: "",
  price: 1,
  img: { public_id: "", url: "" },
  status: true,
  category: { _id: "", name: "" }, //shirts,pants,hoodies,hats
};

export const ProductList = () => {
  const [products, setProducts] = useState<Product>(productInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearchFilter, setInputSearchFilter] = useState("");
  const [productsFiltered, setProductsFiltered] = useState("");
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await ProductService.getProducts();
    const aux = response.data.map(({ img, category, ...rest }: Product) => {
      return {
        img: img.url,
        category: category.name,
        ...rest,
      };
    });
    setProducts(aux);
    setProductsFiltered(aux);
    setIsLoading(false);
  };

  const handleCreate = () => {
    navigate("create");
  };

  const handleInputSearch = async (event) => {
    // console.log('handleInputSearch');
    let name = event.target.value;
    setInputSearchFilter(name);
    // setProductsFiltered(getProductsFiltered(products, name));
  };

  function handleUpdate() {
    console.log("Handle update");
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
        inputSearchFilter={inputSearchFilter}
        handleInputSearch={handleInputSearch}
        handleCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={productTableColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={products}
            columns={productTableColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
