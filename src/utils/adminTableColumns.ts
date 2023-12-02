const categoryColumns = ["name", "status", "createdAt", "updatedAt"];

const userColumns = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "street",
  "country",
  "state",
  "role",
  // "status",
  // "Password",
  // "Actions",
];

const productColumns = [
  "img",
  "name",
  "description",
  "price",
  "status",
  "category",
];

const couponColumns = ["name", "discount"];

export default {
  categoryColumns,
  userColumns,
  productColumns,
  couponColumns,
};
