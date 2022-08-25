import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { FileUpload } from 'primereact/fileupload';

export const FormUI = ({formTitle, product, setProduct, handleProduct, resetForm, isEmptyField}) => {

  // const [confirmPassword, setConfirmPassword] = useState('')
  const navigate =useNavigate()

  // const { name, email, password, country, city, zip } = user
  const { title , price, image, styleType, gender, stock, discount, category } = product

  const tableTitle = () => {
    return (
      <div className='text-left flex align-items-center'>
        <Button
          icon="pi pi-arrow-left"
          style={{textAlign:'left'}}
          className='p-button-text p-button-rounded mr-2'
          onClick={ () => navigate(-1)}
        />
        <span className='vertical-align-top'>
          {formTitle}
        </span>
      </div>
    )
  }

  const footer =
    <div style={{textAlign: 'right'}} className="mt-4">
      <Button
        label="Confirm"
        className='p-button-primary p-button-rounded mr-2'
        onClick={() => handleProduct(product)}
      />
      <Button
        label="Reset"
        className='p-button-secondary p-button-rounded p-button-outlined'
        onClick={() => resetForm()}
      />
    </div>


  const onBasicUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card
          className="animate__animated animate__fadeInLeft p-2 w-full lg:w-auto"
          title={tableTitle}
          footer={ footer }
          // style={{width: '95%'}}
        >

          <h3 style={{ margin: '10px 0px 5px 0px', textAlign: 'left'}}>Account data</h3>
          <div className='mt-4'>
            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <InputText
                id="title"
                value={title}
                onChange={(e)=>setProduct({
                  ...product,
                  title: e.target.value
                })}
                className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
              />
              <label htmlFor="title">Product title</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="price"
                value={price}
                onChange={(e)=>setProduct({
                  ...product,
                  price: e.target.value
                })}
                className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
                type="number"
              />
              <label htmlFor="price">Price</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5  lg:mt-0 lg:w-auto">
              <InputText
                id="image"
                value={image}
                onChange={(e)=>setProduct({
                  ...product,
                  image: e.target.value
                })}
                className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
              />
              <label htmlFor="image">Image</label>
            </span>
          </div>

          <h3 style={{ margin: '25px 0px 5px 0px', textAlign: 'left'}}>Personal data</h3>
          <div className='mt-4'>
            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <InputText
                id="styleType"
                value={styleType}
                onChange={(e)=>setProduct({
                  ...product,
                  styleType: e.target.value
                })}
                className='w-full lg:w-auto'
              />
              <label htmlFor="styleType">Style Type</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="gender"
                value={gender}
                onChange={(e)=>setProduct({
                  ...product,
                  gender: e.target.value
                })}
                className='w-full lg:w-auto'
              />
              <label htmlFor="gender">Gender</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="stock"
                value={stock}
                onChange={(e)=>setProduct({
                  ...product,
                  stock: e.target.value
                })}
                className='w-full lg:w-auto'
                type="number"
              />
              <label htmlFor="stock">Stock</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="discount"
                value={discount}
                onChange={(e)=>setProduct({
                  ...product,
                  discount: e.target.value
                })}
                className='w-full lg:w-auto'
              />
              <label htmlFor="discount">Discount</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputText
                id="category"
                value={category}
                onChange={(e)=>setProduct({
                  ...product,
                  category: e.target.value
                })}
                className='w-full lg:w-auto'
              />
              <label htmlFor="category">Category</label>
            </span>

            <FileUpload mode="basic" name="file" url="http://127.0.0.1:5000/api/file/upload" accept="image/*"/>

          </div>
        </Card>
      </div>
    </>
  )
}
