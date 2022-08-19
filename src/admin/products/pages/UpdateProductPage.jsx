import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { FormUI } from '../components'
import { getProduct, updateProduct } from '../helpers'

import { BreadCrumb } from 'primereact/breadcrumb'
import { Toast } from 'primereact/toast'

// import './update.css'

export const UpdateProductPage = () => {

  const initialProduct = {
    title: '',
    price: '',
    image: '',
    styleType: '',
    gender: '',
    stock: '',
    discount: '',
    category: ''
  }

  const [product, setProduct] = useState( initialProduct )

  const [isEmptyField, setIsEmptyField] = useState(false)

  // const { name, email, password, country, city, zip } = user
  const params = useParams()
  const navigate = useNavigate()
  const toast = useRef(null);

  useEffect( () => {
    handleGetProduct()
  },[])


  const handleGetProduct = async() => {
    const product_request = await getProduct(params.id)
    setProduct(product_request.data)
  }


  const handleUpdateProduct= async(product) => {
    setIsEmptyField(false)
    if ( product.title === '' ||  product.price === '' || product.stock === '' ) {
      setIsEmptyField(true)

      toast.current.show({
        severity:'error',
        summary: 'Error',
        detail:'Fields required',
        life: 3000}
      );

    } else {
      const response = await updateProduct(params.id, product)
      console.log('handleUpdateProduct ',response);
      toast.current.show({severity:'success', summary: 'Success', detail:'Product updated', life: 3000});
      // navigate(-1)
    }

  }

  const handleCancelCreateProduct = () => {
    setUser({
      name: '',
      email: '',
      password: '',
      country: '',
      city: '',
      zip:''
    })
  }


  const breadCrumbItems = [
    { label: 'Products', command: () => navigate(-1) },
    { label: 'Update Products' }
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
        formTitle={"Update Product"}
        product={product}
        setProduct={setProduct}
        handleProduct={handleUpdateProduct}
        resetForm={handleCancelCreateProduct}
        isEmptyField={isEmptyField}
      />
    </>
  )
}
