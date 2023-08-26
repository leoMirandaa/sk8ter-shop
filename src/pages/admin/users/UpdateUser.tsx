import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Toast } from "primereact/toast";
import { useForm, Controller } from "react-hook-form";

import { CountryList } from "../../../utils/countryList";
import { User, UserType } from "../../../interfaces";
import usersService from "../../../services/users.service";
import "../../../styles/admin/cardForm.scss";

interface Country {
  name: string;
  code: string;
}

export const UpdateUser = () => {
  const params = useParams();
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

  useEffect(() => {
    handleGetUser();
  }, []);

  const checkValue = (country: string) => {
    return CountryList.find((c: Country) => c.code === country);
  };

  const handleGetUser = async () => {
    const { data }: { data: User } = await usersService.getUser(params.id);
    const {
      _id,
      firstName,
      lastName,
      email,
      password,
      address: { street, country, state, city, zip },
      phone,
      role,
      status,
    } = data;

    reset({
      _id,
      firstName,
      lastName,
      email,
      password,
      street,
      country: checkValue(country),
      state,
      city,
      zip,
      phone,
      role,
      status,
    });
  };

  const handleSubmitForm = async (data: User) => {
    const { _id } = data;

    const response = await usersService.updateUser(_id, data);

    console.log("Response UPUS: ", response?.data);
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
      detail: "User updated",
      life: 3000,
    });
  };

  const title = () => {
    return (
      <div className="table__header__container__backbutton">
        <Button
          text
          rounded
          icon="pi pi-arrow-left"
          type="button"
          onClick={() => navigate("/admin/users")}
        />
        Update User
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
          onClick={() => navigate("/admin/users")}
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
                <label htmlFor="firstName">First Name</label>
                <InputText
                  id="firstName"
                  className={`${errors.firstName && "p-invalid"}`}
                  {...register("firstName", {
                    required: "Field required",
                    minLength: { value: 3, message: "Min length 3" },
                  })}
                />
                {errors.firstName && (
                  <small
                    id="firstName-help"
                    className="p-error"
                  >
                    {errors?.firstName?.message?.toString()}
                  </small>
                )}
              </div>

              <div className="card__form__row__container">
                <label htmlFor="lastName">Last Name</label>
                <InputText
                  id="lastName"
                  className={`${errors.lastName && "p-invalid"}`}
                  {...register("lastName", {
                    required: "Field required",
                    minLength: { value: 3, message: "Min length 3" },
                  })}
                />
                {errors.lastName && (
                  <small
                    id="lastName-help"
                    className="p-error"
                  >
                    {errors?.lastName?.message?.toString()}
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

              <Controller
                name="country"
                control={control}
                rules={{ required: "Field required" }}
                render={({ field }) => (
                  <div className="card__form__row__container">
                    <label htmlFor="country">Country</label>
                    <Dropdown
                      id={field.name}
                      value={field.value}
                      optionLabel="name"
                      placeholder="Selece a country"
                      options={CountryList}
                      focusInputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                      className={`${errors.country && "p-invalid"}`}

                      // className={classNames({ "p-invalid": fieldState.error })}
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
                )}
              />

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

              <div className="card__form__row__container">
                <label htmlFor="phone">Phone</label>
                <InputMask
                  id="phone"
                  mask="(999) 999-9999"
                  placeholder="(999) 999-9999"
                  className={`${errors.phone && "p-invalid"}`}
                  {...register("phone", {
                    required: "Field required",
                  })}
                />
                {/* <InputText
                  id="phone"
                  type="number"
                  className={`${errors.phone && "p-invalid"}`}
                  {...register("phone", {
                    required: "Field required",
                  })}
                /> */}
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
              // defaultValue="User"
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
                        value={UserType.USER}
                        type="radio"
                        checked={field.value === UserType.USER}
                      />
                      <label htmlFor="user">User</label>
                    </div>
                    <div>
                      <RadioButton
                        inputId="admin"
                        {...field}
                        name="role"
                        value={UserType.ADMIN}
                        type="radio"
                        checked={field.value === UserType.ADMIN}
                      />
                      <label htmlFor="admin">Admin</label>
                    </div>
                  </div>
                </div>
              )}
            />
          </Card>
        </form>
        {/* {JSON.stringify(watch())} */}
      </div>
    </>
  );
};
