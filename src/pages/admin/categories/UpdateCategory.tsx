import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";

import { Category } from "../../../interfaces";
import categoryService from "../../../services/category.service";
import "../../../styles/admin/cardForm.scss";

export const UpdateCategory = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Category>();

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetCategory = async () => {
    const { data } = await categoryService.getCategory(params.id);
    const { _id, name } = data;
    reset({ _id, name });
  };

  const handleSubmitForm = async (data: Category) => {
    const { _id, name } = data;
    const response = await categoryService.updateCategory({ _id, name });

    if (response?.status === 400) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: response?.data?.errors[0]?.msg,
        life: 3000,
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Category updated",
      life: 3000,
    });
  };

  const title = () => {
    return (
      <div className="table__header__container__backbutton">
        <Button
          text
          rounded
          type="button"
          icon="pi pi-arrow-left"
          onClick={() => navigate("/admin/categories")}
        />
        Update Category
      </div>
    );
  };

  const footer = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Button
          outlined
          className="mr-2"
          label="Cancel"
          severity="secondary"
          type="button"
          onClick={() => navigate("/admin/categories")}
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
                className={`${errors?.name && "p-invalid"}`}
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
