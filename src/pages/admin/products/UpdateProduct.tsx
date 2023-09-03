import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useForm, Controller } from "react-hook-form";

import { Category, Product } from "../../../interfaces";
import categoriesService from "../../../services/categories.service";
import productsService from "../../../services/products.service";

export const UpdateProduct = () => {
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [productImage, setProductImage] = useState<string>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const toast = useRef(null);
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCategories();
    handleGetCategory();
  }, []);

  const handleGetCategory = async () => {
    const { data }: { data: Product } = await productsService.getProduct(
      params.id
    );
    const {
      name,
      description,
      price,
      category,
      img: { url },
    } = data;
    console.log("Response; ", data);
    reset({ name, description, price, category });
    // setImagePreview(url);
    setProductImage(url);
    // setImagePreview(
    //   "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1693377301/products/akgmqlmaz8zie0cw5lik.jpg"
    // );
  };
  const getCategories = async () => {
    const response = await categoriesService.getCategories();
    console.log(response?.data);

    const data = response.data.map(({ _id, name, ...rest }: any) => {
      return {
        _id,
        name,
      };
    });
    setCategories(data);
  };

  const handleSubmitForm = async (product: any) => {
    const response = await productsService.updateProduct(params.id, product);

    if (response?.status === 400) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error updating product",
        // summary: "Error in " + response?.data?.errors[0]?.path,
        // detail: response?.data?.errors[0]?.msg,
        life: 3000,
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Product created",
      life: 3000,
    });
  };

  const resetForm = () => {
    reset();
  };

  const title = () => {
    return (
      <div className="table__header__container__backbutton">
        <Button
          text
          rounded
          icon="pi pi-arrow-left"
          type="button"
          onClick={() => navigate("/admin/products")}
        />
        Update Product
      </div>
    );
  };

  const footer = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Button
          outlined
          className="mr-2"
          label="Reset"
          severity="secondary"
          onClick={resetForm}
        />
        <Button
          label="Confirm"
          type="submit"
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="table__container">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Card
            className="card__form animate__animated animate__fadeIn"
            title={title}
            footer={footer}
          >
            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="firstName">Name</label>
                <InputText
                  id="name"
                  className={`${errors.name && "p-invalid"}`}
                  {...register("name", {
                    required: "Field required",
                    minLength: { value: 3, message: "Min length 3" },
                  })}
                />
                {errors.name && (
                  <small
                    id="name-help"
                    className="p-error"
                  >
                    {errors?.name?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="description">Description</label>
                <InputText
                  id="description"
                  className={`${errors.description && "p-invalid"}`}
                  {...register("description", {
                    required: "Field required",
                    minLength: { value: 10, message: "Min length 10" },
                  })}
                />
                {errors.description && (
                  <small
                    id="description-help"
                    className="p-error"
                  >
                    {errors?.description?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <Controller
                  name="price"
                  control={control}
                  rules={{
                    required: "Enter a valid price",
                    validate: (value) =>
                      (value >= 1 && value <= 700) || "Enter a valid price.",
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <label htmlFor="price">Price</label>
                      <InputNumber
                        id={field.name}
                        inputRef={field.ref}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(e) => field.onChange(e)}
                        useGrouping={false}
                        min={1}
                        max={700}
                        showButtons
                        // buttonLayout="horizontal"
                        // incrementButtonIcon="pi pi-plus"
                        // decrementButtonIcon="pi pi-minus"
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                      />
                      {errors.price && (
                        <small
                          id="price-help"
                          className="p-error"
                        >
                          {errors?.price?.message?.toString()}
                        </small>
                      )}
                    </>
                  )}
                />
              </div>

              <Controller
                name="category"
                control={control}
                rules={{ required: "Field required" }}
                render={({ field, fieldState }) => (
                  <div className="card__form__row__container">
                    <label htmlFor="category">Category</label>
                    <Dropdown
                      id={field.name}
                      value={field.value}
                      optionLabel="name"
                      focusInputRef={field.ref}
                      placeholder="Select a category"
                      options={categories}
                      onChange={(e) => field.onChange(e.value)}
                      className={`${errors.category && "p-invalid"}`}
                    />
                    {errors.category && (
                      <small
                        id="category-help"
                        className="p-error"
                      >
                        {errors?.category?.message?.toString()}
                      </small>
                    )}
                  </div>
                )}
              />

              <div className="text-center">
                {productImage || imagePreview ? (
                  <img
                    id="img"
                    height={350}
                    src={
                      productImage
                        ? productImage
                        : URL.createObjectURL(imagePreview)
                    }
                  />
                ) : null}
                <Controller
                  control={control}
                  name={"img"}
                  rules={{ required: "Image is required" }}
                  render={({ field: { value, onChange, ...field } }) => {
                    return (
                      <div className="card__form__row__container">
                        <label
                          htmlFor="image"
                          className="text-left"
                        >
                          Image
                        </label>
                        <input
                          {...field}
                          value={value?.fileName}
                          onChange={(event) => {
                            onChange(event.target.files[0]);
                            setImagePreview(event.target.files[0]);
                            setProductImage(null);
                          }}
                          type="file"
                          id="img"
                        />
                      </div>
                    );
                  }}
                />
                {/* {errors.img && (
                  <small
                    id="img-help"
                    className="p-error"
                  >
                    {errors?.img?.message?.toString()}
                  </small>
                )} */}
              </div>
            </div>
          </Card>
        </form>
        {JSON.stringify(watch())}
        {JSON.stringify(typeof productImage)}
        {JSON.stringify(productImage)}
        {"Image preview: "}
        {JSON.stringify(imagePreview)}
      </div>
    </>
  );
};

//104
