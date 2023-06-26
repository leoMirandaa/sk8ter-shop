import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import { FormUI } from "../../../components/products";
import { createProduct, uploadImage } from "../../../services/products";

import { BreadCrumb } from "primereact/breadcrumb";
import { Toast } from "primereact/toast";

export const CreateProductPage = () => {
  const initialProduct = {
    title: "",
    price: null,
    image: "",
    styleType: "",
    gender: "",
    stock: null,
    discount: 0,
    category: "",
  };

  const [product, setProduct] = useState(initialProduct);

  const [isEmptyField, setIsEmptyField] = useState(false);
  const [imageObject, setImageObject] = useState({});
  // const { name, email, password, country, city, zip } = user

  const navigate = useNavigate();
  const toast = useRef(null);

  const handleCreateProduct = async (product) => {
    setIsEmptyField(false);
    if (
      product.title === "" ||
      product.price === "" ||
      product.gender === "" ||
      product.image === ""
    ) {
      setIsEmptyField(true);

      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
        life: 3000,
      });
    } else {
      const response = await createProduct(product);
      console.log("handleCreateProduct reponse ", response);

      let formdata = new FormData();
      formdata.append("file", imageObject);
      console.log("file 2... ", imageObject);

      console.log("formdata** ", formdata);
      await uploadImage(formdata);

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product created",
        life: 3000,
      });
      setProduct(initialProduct);
      navigate(-1);
    }
  };

  const handleCancelCreateProduct = () => {
    setProduct(initialProduct);
  };

  const items = [
    { label: "Products", command: () => navigate(-1) },
    { label: "Create Product" },
  ];
  const home = {
    icon: "pi pi-home",
    label: "Admin",
    command: () => navigate(-2),
  };

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={items}
        home={home}
      />

      <FormUI
        formTitle="Create Product"
        product={product}
        setProduct={setProduct}
        setImageObject={setImageObject}
        handleProduct={handleCreateProduct}
        resetForm={handleCancelCreateProduct}
        isEmptyField={isEmptyField}
      />
    </>
  );
};
