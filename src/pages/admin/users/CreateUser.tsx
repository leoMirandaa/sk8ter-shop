import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Toast } from "primereact/toast";
import { useForm, Controller } from "react-hook-form";

import usersService from "../../../services/users.service";
import { User } from "../../../interfaces";
import "../../../styles/admin/cardForm.scss";

export const CreateUser = () => {
  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    console.log("data: ", data);
    const {
      street,
      country,
      city,
      state,
      zip,
      confirmPassword,
      role,
      ...rest
    } = data;

    const user = {
      ...rest,
      address: {
        street,
        country,
        city,
        state,
        zip,
      },
    };

    const response = await usersService.createUser(user);
    if (response === 400) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
        life: 3000,
      });
      return;
    }

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "User created",
      life: 3000,
    });
    // navigate(-1)
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
          onClick={() => navigate(-1)}
        />
        Create User
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
                <label htmlFor="username">User Name</label>
                <InputText
                  id="username"
                  className={`${errors.name && "p-invalid"}`}
                  {...register("name", {
                    required: "Field required",
                    minLength: { value: 5, message: "Min length 3" },
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

              <div className="card__form__row__container">
                <label htmlFor="password">Password</label>
                <InputText
                  id="password"
                  type="password"
                  className={`${errors.password && "p-invalid"}`}
                  {...register("password", {
                    required: "Field required",
                    minLength: { value: 5, message: "Min length 3" },
                  })}
                />
                {errors.password && (
                  <small
                    id="password-help"
                    className="p-error"
                  >
                    {errors?.password?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <InputText
                  id="confirmPassword"
                  type="password"
                  className={`${errors.confirmPassword && "p-invalid"}`}
                  {...register("confirmPassword", {
                    required: "Field required",
                    minLength: { value: 5, message: "Min length 3" },
                  })}
                  // aria-describedby="username2-help"
                />
                {errors.confirmPassword && (
                  <small
                    id="confirmPassword-help"
                    className="p-error"
                  >
                    {errors?.confirmPassword?.message?.toString()}
                  </small>
                )}
              </div>
            </div>

            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="email">Email</label>
                <InputText
                  id="email"
                  type="email"
                  className={`${errors.email && "p-invalid"}`}
                  {...register("email", {
                    required: "Field required",
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && (
                  <small
                    id="email-help"
                    className="p-error"
                  >
                    {errors?.email?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="zip">Street</label>
                <InputText
                  id="street"
                  className={`${errors?.street && "p-invalid"}`}
                  // keyfilter="num"
                  {...register("street", {
                    required: "Field require",
                  })}
                />
                {errors.street && (
                  <small
                    id="street-help"
                    className="p-error"
                  >
                    {errors?.street?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="city">City</label>
                <InputText
                  id="city"
                  className={`${errors.city && "p-invalid"}`}
                  {...register("city", {
                    required: "Field required",
                  })}
                />
                {errors.city && (
                  <small
                    id="city-help"
                    className="p-error"
                  >
                    {errors?.city?.message?.toString()}
                  </small>
                )}
              </div>
            </div>

            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="state">State</label>
                <InputText
                  id="state"
                  className={`${errors.state && "p-invalid"}`}
                  {...register("state", {
                    required: "Field required",
                  })}
                />
                {errors.state && (
                  <small
                    id="state-help"
                    className="p-error"
                  >
                    {errors?.state?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="country">Country</label>
                <InputText
                  id="country"
                  className={`${errors.country && "p-invalid"}`}
                  {...register("country", {
                    required: "Field required",
                  })}
                />
                {errors.country && (
                  <small
                    id="country-help"
                    className="p-error"
                  >
                    {errors?.country?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="zip">Zip</label>
                <InputText
                  id="zip"
                  className={`${errors?.zip && "p-invalid"}`}
                  keyfilter="num"
                  {...register("zip", {
                    required: "Field required",
                    minLength: { value: 5, message: "Min length 5" },
                  })}
                />
                {errors.zip && (
                  <small
                    id="zip-help"
                    className="p-error"
                  >
                    {errors?.zip?.message?.toString()}
                  </small>
                )}
              </div>
            </div>

            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="phone">Phone</label>
                <InputText
                  id="phone"
                  type="number"
                  className={`${errors.phone && "p-invalid"}`}
                  {...register("phone", {
                    required: "Field required",
                  })}
                />
                {errors.phone && (
                  <small
                    id="phone-help"
                    className="p-error"
                  >
                    {errors?.phone?.message?.toString()}
                  </small>
                )}
              </div>
            </div>

            <Controller
              name="role"
              defaultValue="User"
              control={control}
              rules={{ required: "Value is required." }}
              render={({ field }) => (
                <div className="card__form__row__role">
                  <h4>Select a role: </h4>
                  <div className="card__form__row__role__container">
                    <div>
                      <RadioButton
                        inputId="user"
                        {...field}
                        value="User"
                        type="radio"
                        checked={field.value === "User"}
                      />
                      <label htmlFor="user">User</label>
                    </div>
                    <div>
                      <RadioButton
                        inputId="admin"
                        {...field}
                        name="role"
                        value="Admin"
                        type="radio"
                        checked={field.value === "Admin"}
                      />
                      <label htmlFor="admin">Admin</label>
                    </div>
                  </div>
                </div>
              )}
            />
          </Card>
        </form>
        {JSON.stringify(watch())}
      </div>
    </>
  );
};

//313
