import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

import { Role } from "../../interfaces";
import { CITIES_LIST } from "../../utils/citiesList";

export const TableForm = ({ title, footer, user, setUser, isEmptyField }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const navigate = useNavigate();

  const { name, email, password, country, city, zip } = user;

  // const title = () => {
  //   return (
  //     <div className="text-left flex align-items-center">
  //       <Button
  //         icon="pi pi-arrow-left"
  //         style={{ textAlign: "left" }}
  //         className="p-button-text p-button-rounded mr-2"
  //         onClick={() => navigate(-1)}
  //       />
  //       <span className="vertical-align-top">{formTitle}</span>
  //     </div>
  //   );
  // };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          className="animate__animated animate__fadeIn  w-full lg:w-auto"
          title={title}
          footer={footer}
          // style={{width: '95%'}}
        >
          <h3 style={{ margin: "10px 0px 0px 0px" }}>Account data</h3>
          <div className="mt-4">
            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <InputText
                id="username"
                value={name}
                onChange={(e) =>
                  setUser({
                    ...user,
                    name: e.target.value,
                  })
                }
                className={`w-full lg:w-auto ${isEmptyField && "p-invalid"}`}
              />
              <label htmlFor="username">User Name</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="password"
                value={password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
                className={`w-full lg:w-auto ${isEmptyField && "p-invalid"}`}
                type="password"
              />
              <label htmlFor="password">Password</label>
            </span>

            {/* <span className="validation p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
                <InputText
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  className='w-full lg:w-auto p-invalid block'
                  type="password"
                  aria-describedby="username2-help"
                />
                <small id="username2-help" className="p-error">Username is not available.</small>
                <label htmlFor="confirmPassword">Password</label>
            </span> */}

            <span className="p-float-label inline-block w-full mt-5  lg:mt-0 lg:w-auto">
              <InputText
                id="email"
                value={email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                className={`w-full lg:w-auto ${isEmptyField && "p-invalid"}`}
                type="email"
              />
              <label htmlFor="email">Email</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5  lg:mt-0 lg:w-auto">
              <Dropdown
                value={selectedRole}
                // onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
                options={CITIES_LIST}
                optionLabel="name"
                placeholder="Select a Role"
                className="w-full"
              />
            </span>
          </div>

          <h3 style={{ margin: "25px 0px 0px 0px" }}>Personal data</h3>
          <div className="mt-4">
            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <InputText
                id="country"
                value={country}
                onChange={(e) =>
                  setUser({
                    ...user,
                    country: e.target.value,
                  })
                }
                className="w-full lg:w-auto"
              />
              <label htmlFor="country">Country</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="city"
                value={city}
                onChange={(e) =>
                  setUser({
                    ...user,
                    city: e.target.value,
                  })
                }
                className="w-full lg:w-auto"
              />
              <label htmlFor="city">City</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5  lg:mt-0 lg:w-auto">
              <InputText
                id="zip"
                value={zip}
                onChange={(e) =>
                  setUser({
                    ...user,
                    zip: e.target.value,
                  })
                }
                className="w-full lg:w-auto"
                keyfilter="num"
              />
              <label htmlFor="zip">Zip</label>
            </span>
          </div>
          {/* <InputText
              value={ country }
              type="country"
              onChange={(e)=>setUser({
                      ...user,
                      country: e.target.value
              })}
              placeholder="Country"
              className='w-full lg:mr-4 lg:w-auto'
            />

            <InputText
              value={ city }
              type="city"
              onChange={(e)=>setUser({
                      ...user,
                      city: e.target.value
              })}
              placeholder="City"
              className='w-full mt-2 lg:mr-4 lg:mt-0 lg:w-auto'
            />

            <InputText
              value={ zip }
              type="zip"
              onChange={(e)=>setUser({
                      ...user,
                      zip: e.target.value
              })}
              placeholder="Zip"
              className='w-full mt-2 lg:mt-0 lg:w-auto'
            /> */}
        </Card>
      </div>
    </>
  );
};
