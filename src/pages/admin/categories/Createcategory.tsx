import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";

import { Category } from "../../../interfaces";
import CategoriesService from "../../../services/categories.service";
import "../../../styles/admin/cardForm.scss";

export const CreateCategory = () => {
  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data: Category) => {
    const { name } = data;

    const response = await CategoriesService.createCategory(name);
    console.log("Response: ", response);
    if (response?.status === 400) {
      toast.current.show({
        severity: "error",
        summary: "Error in " + response?.data?.errors[0]?.path,
        detail: response?.data?.errors[0]?.msg,
        life: 3000,
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Category created",
      life: 3000,
    });

    resetForm();
    // navigate("/admin/categories");
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
          onClick={() => navigate("/admin/Categories")}
        />
        Create Category
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
          type="button"
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

      <form
        className="table__container"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Card
          className="card__form animate__animated animate__fadeIn"
          title={title}
          footer={footer}
        >
          <div className="card__form__row">
            <div className="card__form__row__container">
              <label htmlFor="username">Category Name</label>
              <InputText
                id="username"
                className={`${errors.name && "p-invalid"}`}
                {...register("name", {
                  required: "Field required",
                  minLength: { value: 3, message: "Min length 3" },
                })}
              />
              {errors.name && (
                <small
                  id="username-help"
                  className="p-error"
                >
                  {errors?.name?.message?.toString()}
                </small>
              )}
            </div>
          </div>
        </Card>
      </form>
    </>
  );
};
