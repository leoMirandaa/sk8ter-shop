import { useEffect, useRef, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import { category } from "../../../interfaces";
import CategoriesService from "../../../services/categories.service";
import "../../../styles/admin/cardForm.scss";

const userInitState = {
  id: "",
  name: "",
  status: true,
  createdAt: "",
  updatedAt: "",
};

export const UpdateCategory = () => {
  const [category, setCategory] = useState<category>(userInitState);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();
  const params = useParams();

  const { name } = category;

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetCategory = async () => {
    const response = await CategoriesService.getCategory(params.id);
    setCategory(response?.data);
  };

  const resetForm = () => {
    setCategory(userInitState);
  };

  //todo fix auto exec method
  const handleUpdate = async (e: FormEvent, category: category) => {
    console.log("HandleUpdat");
    e.preventDefault();
    setIsEmptyField(false);

    if (name === "") {
      setIsEmptyField(true);

      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Field required",
        life: 3000,
      });
    } else {
      const response = await CategoriesService.updateCategory(
        params.id,
        category.name
      );

      if (response === 400) {
        console.log("status 400");
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Error updating category",
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

      // navigate(-1)
    }
  };

  const title = () => {
    return (
      <div className="table__header__container__backbutton">
        <Button
          text
          rounded
          icon="pi pi-arrow-left"
          onClick={() => navigate(-1)}
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
          label="Reset"
          severity="secondary"
          onClick={resetForm}
        />
        <Button
          label="Confirm"
          type="submit"
          // onClick={() => handleCreate(category)}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />

      <div className="table__container">
        <form onSubmit={(e) => handleUpdate(e, category)}>
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
                  value={name}
                  onChange={(e) =>
                    setCategory({
                      ...category,
                      name: e.target.value,
                    })
                  }
                  className={`${isEmptyField && "p-invalid"}`}
                />

                {/* <small
                  id="username-help"
                  className="p-error"
                >
                  Invalid Value
                </small> */}
              </div>
            </div>
          </Card>
        </form>
      </div>
    </>
  );
};
