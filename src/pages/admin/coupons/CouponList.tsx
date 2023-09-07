import { ChangeEvent, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";

import { Table, TableHeader, TableSkeleton } from "../../../components/admin";
import { Coupon } from "../../../interfaces/coupon";
import couponService from "../../../services/coupon.service";
import tableColumns from "../../../utils/adminTableColumns";
import "../../../styles/admin/table.scss";

export const CouponList = () => {
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState<Coupon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    getCoupons();
  }, []);

  useEffect(() => {
    let filteredCoupons = coupons;
    if (filteredCoupons.length > 0) {
      filteredCoupons = filteredCoupons.filter((coupon) =>
        coupon?.code?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }
    setFilteredCoupons(filteredCoupons);
  }, [searchTerm]);

  const getCoupons = async () => {
    const response = await couponService.getCoupons();
    setCoupons(response.data);
    setFilteredCoupons(response.data);
    response.data;
    setIsloading(false);
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
        await couponService.deleteCoupon(couponId);

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
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCreate={handleCreate}
      />
    );
  };

  return (
    <main className="table__container">
      {isLoading ? (
        <TableSkeleton fields={tableColumns.couponColumns} />
      ) : (
        <>
          <Toast ref={toast} />
          <ConfirmPopup />

          <Table
            data={filteredCoupons}
            columns={tableColumns.couponColumns}
            title={title}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </>
      )}
    </main>
  );
};
