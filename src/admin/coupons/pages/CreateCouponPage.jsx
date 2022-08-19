import { useNavigate } from 'react-router-dom'
import{ useRef, useState } from 'react'

import { FormUI } from '../components'
// import { createCoupon } from '../helpers'

import { BreadCrumb } from 'primereact/breadcrumb'
import { Toast } from 'primereact/toast'
import { createCoupon } from '../helpers'

export const CreateCouponPage = () => {

  const [coupon, setCoupon] = useState({
    code: '',
    discount: ''
  })

  const [isEmptyField, setIsEmptyField] = useState(false)

  const navigate = useNavigate()
  const toast = useRef(null);

  const handleCreateCoupon = async(coupon) => {
    setIsEmptyField(false)
    if( coupon.code === '' ||  coupon.discount === '' ) {
      setIsEmptyField( true )

      toast.current.show({
        severity:'error',
        summary: 'Error',
        detail:'Fields required',
        life: 3000}
      );

    }
    else {
      const response = await createCoupon(coupon)
      console.log('handleCreateCoupon response ', response);

      setCoupon({
        code: '',
        discount: ''
        })

      toast.current.show({severity:'success', summary: 'Success', detail:'Coupon created', life: 3000});
      // navigate(-1)
    }
  }

  const handleCancelCreateCoupon = () => {
    setCoupon({
      code: '',
      discount: ''
    })
  }

  const items = [
    { label: 'Coupons', command: () => navigate(-1)},
    { label: 'Create Coupon' },
  ];
  const home = { icon: 'pi pi-home', label: 'Admin', command: () => navigate(-2) }

  return (
    <>
      <Toast ref={toast} />

      <BreadCrumb
        model={items}
        home={home}
      />

      <FormUI
        formTitle="Create Coupon"
        coupon={coupon}
        setCoupon={setCoupon}
        handleCoupon={handleCreateCoupon}
        resetForm={handleCancelCreateCoupon}
        isEmptyField={isEmptyField}
      />
    </>
  )
}
