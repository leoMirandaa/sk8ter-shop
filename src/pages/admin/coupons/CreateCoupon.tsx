import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";

import { createCoupon } from "../../../services/coupons";

const initialState = {
  code: "",
  discount: 0,
};

export const CreateCoupon = () => {
  const [coupon, setCoupon] = useState(initialState);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();

  const { code, discount } = coupon;

  const handleCreate = async (coupon) => {
    setIsEmptyField(false);
    if (coupon.code === "" || coupon.discount === "") {
      setIsEmptyField(true);

      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
        life: 3000,
      });
    } else {
      const response = await createCoupon(coupon);
      console.log("handleCreateCoupon response ", response);

      setCoupon({
        code: "",
        discount: 0,
      });

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Coupon created",
        life: 3000,
      });
      // navigate(-1);
    }
  };

  const resetForm = () => {
    setCoupon(initialState);
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
        Create Coupon
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
          onClick={() => handleCreate(coupon)}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} />

      <div className="table__container">
        <Card
          className="card__form animate__animated animate__fadeIn"
          title={title}
          footer={footer}
        >
          <form action="#">
            <div className="card__form__row">
              <div className="card__form__row__container">
                <label htmlFor="username">Coupon</label>
                <InputText
                  id="username"
                  value={code}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      code: e.target.value,
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

              <div className="card__form__row__container">
                <label htmlFor="password">Discount</label>
                <InputNumber
                  id="stock"
                  value={discount}
                  onChange={(e) =>
                    setCoupon({
                      ...coupon,
                      discount: e.value,
                    })
                  }
                  className="w-full lg:w-auto"
                  min={1}
                  max={100}
                  showButtons
                  suffix="%"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                />
                {/* <small
                id="username-help"
                className="p-error"
              >
                Invalid Value
              </small> */}
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
