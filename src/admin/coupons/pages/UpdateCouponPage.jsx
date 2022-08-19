import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { FormUI } from '../components'
import { getCoupon, updateCoupon } from '../helpers'

import { BreadCrumb } from 'primereact/breadcrumb'
import { Toast } from 'primereact/toast'

// import './update.css'

export const UpdateCouponPage = () => {

  const [coupon, setCoupon] = useState({
    code: '',
    discount: ''
  })

  const [isEmptyField, setIsEmptyField] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
  const toast = useRef(null);

  useEffect( () => {
    handleGetCoupon()
  },[])


  const handleGetCoupon = async() => {
    const fetchCoupon = await getCoupon(params.id)
    setCoupon(fetchCoupon.data)
  }


  const handleUpdateCoupon = async(coupon) => {
    setIsEmptyField(false)
    if ( coupon.code === '' ||  coupon.discount === '' ) {
      setIsEmptyField(true)

      toast.current.show({
        severity:'error',
        summary: 'Error',
        detail:'Fields required',
        life: 3000}
      );

    } else {
      const response = await updateCoupon(params.id, coupon)
      console.log('handleUpdateCoupon ',response);
      toast.current.show({severity:'success', summary: 'Success', detail:'Coupon updated', life: 3000});
    }

  }

  const handleCancelCreateCoupon = () => {
    setCoupon({
      code: '',
      discount: ''
    })
  }


  const breadCrumbItems = [
    { label: 'Coupons', command: () => navigate(-1) },
    { label: 'Update Coupon' }
  ];
  const breadCrumbHome = { icon: 'pi pi-home', label: 'Admin', command: () => navigate(-2) }

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={ breadCrumbItems }
        home={ breadCrumbHome }
      />

      <FormUI
        formTitle={"Update Coupon"}
        coupon={coupon}
        setCoupon={setCoupon}
        handleCoupon={handleUpdateCoupon}
        resetForm={handleCancelCreateCoupon}
        isEmptyField={isEmptyField}
      />
    </>
  )
}
