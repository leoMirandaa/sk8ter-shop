import { ChangeEvent, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { couponTableColumns } from "../../../utils/AdminTableColumns";
import {
  deleteCoupon,
  getCoupon,
  getCouponByFilter,
  getAllCoupons,
} from "../../../services/coupons";
import "../../../styles/admin/table.scss";

export const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [inputSearchFilter, setInputSearchFilter] = useState("");
  const [couponsFiltered, setCouponsFiltered] = useState("");
  const [visible, setVisible] = useState(true);

  const toast = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = async () => {
    const fetchCoupons = await getAllCoupons();
    setCoupons(fetchCoupons.data);
    setCouponsFiltered(fetchCoupons.data);
    setIsloading(false);
  };

  const handleInputSearch = async (event) => {
    let name = event.target.value;
    setInputSearchFilter(name);
    setCouponsFiltered(getCouponByFilter(coupons, name));
  };

  const handleCreate = () => {
    navigate("create");
  };

  const handleUpdate = (couponId: string) => {
    navigate(`update/${couponId}`);
  };

  const handleDelete = async (
    event: ChangeEvent<HTMLInputElement>,
    couponId: string
  ) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to delete this coupon?",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await deleteCoupon(couponId);

        toast.current.show({
          severity: "success",
          summary: "Confirmed",
          detail: "Coupon deleted",
          life: 3000,
        });

        getCoupons();
      },
    });
  };

  const title = () => {
    return (
      <TableHeader
        title="Coupons"
        inputSearchFilter={inputSearchFilter}
        handleInputSearch={handleInputSearch}
        handleCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={couponTableColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={coupons}
            columns={couponTableColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
