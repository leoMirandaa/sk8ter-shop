export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: Address;
  phone: string;
  role: UserType;
  status: UserStatus;
}

export enum UserType {
  USER = 1,
  ADMIN = 2,
}

export enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export interface Address {
  street: string;
  country: string;
  state: string;
  city: string;
  zip: string;
}
