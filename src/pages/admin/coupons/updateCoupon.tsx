import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { Controller, useForm } from "react-hook-form";

import { Coupon } from "../../../interfaces/coupon";
import couponService from "../../../services/coupon.service";

export const UpdateCoupon = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Coupon>();

  useEffect(() => {
    handleGetCoupon();
  }, []);

  const handleGetCoupon = async () => {
    const { data } = await couponService.getCoupon(params.id);
    const { _id, name, discount } = data;
    reset({ _id, name, discount });
  };

  const handleSubmitForm = async (data: Coupon) => {
    const { _id, name, discount } = data;
    const response = await couponService.upateCoupon({ _id, name, discount });

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
      detail: "Coupon updated",
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
          onClick={() => navigate("/admin/coupons")}
        />
        Update Coupon
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
          onClick={() => navigate("/admin/coupons")}
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
              <label htmlFor="name">Name</label>
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
              <Controller
                name="discount"
                control={control}
                // rules={{
                //   required: "Enter a valid discount",
                //   validate: (value) =>
                //     (value >= 1 && value <= 700) || "Enter a valid discount.",
                // }}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor="discount">discount</label>
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
                      decrementButtonClassName="p-button-secondary"
                      incrementButtonClassName="p-button-secondary"
                    />
                    {errors.discount && (
                      <small
                        id="discount-help"
                        className="p-error"
                      >
                        {errors?.discount?.message?.toString()}
                      </small>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </Card>
      </form>
    </>
  );
};
