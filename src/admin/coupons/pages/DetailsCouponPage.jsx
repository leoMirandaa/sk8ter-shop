import { BreadCrumb } from "primereact/breadcrumb"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Table as TableUI, TableSkeleton } from "../components"
import { getAllCoupons, getCouponByFilter } from "../helpers"

export const DetailsCouponPage = () => {

  const [coupons, setCoupons] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [couponsFiltered, setCouponsFiltered] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getCoupons()
  }, [])

  const getCoupons = async() => {
    const fetchCoupons = await getAllCoupons()
    setCoupons( fetchCoupons.data )
    setCouponsFiltered( fetchCoupons.data )
    setIsloading(false)
  }

  const handleCreateCoupon = () => {
    navigate('create')
  }

  const handleInputSearch = async(event) => {
    let name = event.target.value
    setInputSearchFilter(name)
    setCouponsFiltered( getCouponByFilter(coupons, name) )
  }

  const breadcrumbItems = [{ label: 'Coupons' }];
  const breadcrumbHome = { icon: 'pi pi-home', label: 'Admin', command: () => navigate(-1) }
  const skeletonFields = ["Coupon", "Discount", "Actions"]

  const title = () => {
    return (
      <>
        <div className="flex flex-column md:flex-row md:justify-content-between">
          <span className='table-auth-span'>
            <Button
              icon="pi pi-arrow-left"
              className='p-button-text p-button-rounded mr-2'
              onClick={ () => navigate(-1)}
            />
            Coupons
          </span>

          <span className='p-input-icon-left w-full md:w-auto  mt-2 md:mt-0 flex-order-1 md:flex-order-0'>
            <i className='pi pi-search '/>
            <InputText
              value={ inputSearchFilter }
              onChange={ handleInputSearch }
              placeholder="Search"
              className="w-full"
            />
          </span>

          <div className="flex-order-0 mb-2 md:mb-0">
            <Button
              label="Create Coupon"
              icon="pi pi-plus"
              className='p-button-primary p-button-rounded mr-2 mt-2 md:mt-0'
              onClick={ () => handleCreateCoupon()}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {
        isLoading
        ?
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <TableSkeleton fields={ skeletonFields }/>
        </div>
        :
        <div>
          <BreadCrumb
            model = { breadcrumbItems }
            home = { breadcrumbHome }
          />

          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <TableUI
              className="align-content-center"
              coupons={ couponsFiltered }
              title= { title }
              getCoupons={ getCoupons }
            />
          </div>
        </div>
      }
    </>
  )
}
