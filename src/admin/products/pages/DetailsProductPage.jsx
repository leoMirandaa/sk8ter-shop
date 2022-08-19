import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TableUI, SkeletonUI } from "../components";
import { getAllProducts, getProductsFiltered } from "../helpers";

import { BreadCrumb } from "primereact/breadcrumb"
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export const DetailsProductPage = () => {

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

  const [products, setProducts] = useState([initialProduct])
  const [isLoading, setIsLoading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [productsFiltered, setProductsFiltered] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async() => {
    const fetchUsers = await getAllProducts()
    setProducts( fetchUsers.data )
    setProductsFiltered( fetchUsers.data )
    setIsLoading(false)
    // console.log('products.. ', products);
  }

  const handleCreateProduct = () => {
    navigate('create')
  }

  const handleInputSearch = async(event) => {
    // console.log('handleInputSearch');
    let name = event.target.value
    setInputSearchFilter(name)
    setProductsFiltered( getProductsFiltered(products, name) )
  }

  const breadcrumbItems = [{ label: 'Products' }];
  const breadcrumbHome = { icon: 'pi pi-home', label: 'Admin', command: () => navigate('/admin') }
  // const skeletonFields = ["Name", "Email", "Country", "City", "Zip", "Status", "Password", "Actions"]
  const skeletonFields = Object.keys(initialProduct)

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
            Products
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
              label="Create Product"
              icon="pi pi-plus"
              className='p-button-primary p-button-rounded mr-2 mt-2 md:mt-0'
              onClick={ () => handleCreateProduct()}
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
        {/* <div > */}
          <SkeletonUI  fields={ skeletonFields }/>
        </div>
        :
        <div>
          <BreadCrumb
            model = { breadcrumbItems }
            home = { breadcrumbHome }
          />

          <div style={{ display: 'flex', justifyContent: 'center'}}>
            {/* <div> */}
            <TableUI
              className="align-content-center"
              products = { productsFiltered }
              title = { title }
              getProducts = { getProducts }
            />
          </div>
        </div>
      }
    </>
  )
}
