import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

export const FormUI = ({
  formTitle,
  coupon,
  setCoupon,
  handleCoupon,
  resetForm,
  isEmptyField,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { code, discount } = coupon;

  const title = () => {
    return (
      <div className="text-left flex align-items-center">
        <Button
          icon="pi pi-arrow-left"
          style={{ textAlign: "left" }}
          className="p-button-text p-button-rounded mr-2"
          onClick={() => navigate(-1)}
        />
        <span className="vertical-align-top">{formTitle}</span>
      </div>
    );
  };

  const footer = (
    <div
      style={{ textAlign: "right" }}
      className="mt-4"
    >
      <Button
        label="Confirm"
        className="p-button-primary p-button-rounded mr-2"
        onClick={() => handleCoupon(coupon)}
      />
      <Button
        label="Reset"
        className="p-button-secondary p-button-rounded p-button-outlined"
        onClick={() => resetForm()}
      />
    </div>
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          className="animate__animated animate__fadeInLeft p-2 w-full lg:w-auto"
          title={title}
          footer={footer}
          // style={{width: '95%'}}
        >
          <h3 style={{ margin: "10px 0px 5px 0px", textAlign: "left" }}>
            Account data
          </h3>
          <div className="mt-4">
            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <InputText
                id="coupon"
                value={code}
                onChange={(e) =>
                  setCoupon({
                    ...coupon,
                    code: e.target.value,
                  })
                }
                className={`w-full lg:w-auto ${isEmptyField && "p-invalid"}`}
              />
              <label htmlFor="coupon">Coupon</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mt-0 lg:w-auto">
              <InputText
                id="discount"
                value={discount}
                onChange={(e) =>
                  setCoupon({
                    ...coupon,
                    discount: parseInt(e.target.value),
                  })
                }
                className={`w-full lg:w-auto ${isEmptyField && "p-invalid"}`}
                type="number"
              />
              <label htmlFor="discount">Discount</label>
            </span>
          </div>
        </Card>
      </div>
    </>
  );
};
