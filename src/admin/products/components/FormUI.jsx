import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber';
import { getImage, uploadImage } from '../helpers';

export const FormUI = ({formTitle, product, setProduct, setImageObject, handleProduct, resetForm, isEmptyField}) => {
  const imgNotFound = 'data:image/png;base64,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'

  // const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  // const { name, email, password, country, city, zip } = user
  const { title , price, image, styleType, gender, stock, discount, category } = product

  const genders = [
    { name: 'Female', value: 'FM' },
    { name: 'Male', value: 'ML' }
  ];

  const categories = [
    { name: 'Girls', value:'Gs' },
    { name: 'Teen girls', value: 'Ts' },
    { name: 'Women', value: 'Wn' },
    { name: 'Boys', value:'Bs' },
    { name: 'Teen boys', value:'Ts' },
    { name: 'Men', value: 'Mn' },
  ]

  const styleTypes = [
    { name: 'Basic', value: 'Basic' },
    { name: 'Bohemian', value: 'Bohemian' },
    { name: 'Casual', value: 'Casual' },
    { name: 'Elegant', value: 'Elegant' },
    { name: 'Sexy', value: 'Sexy' },
    { name: 'Vintage', value: 'Vintage' }
  ]

  const handleUpload = async(e) => {

    let formdata = new FormData()
    formdata.append('file', image)
    await uploadImage(formdata)

    // await getFile(file.name)


    // getImage(image)

  }

  const handleFile = (e) => {
    console.log('handleFiles[0]... ', e.target.files[0]);
    console.log('handleFile.name... ', e.target.files[0].name);
    setProduct({
      ...product,
      image: e.target.files[0].name
    })

    setImageObject(e.target.files[0])
  }


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

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card
          className="animate__animated animate__fadeInLeft p-2 w-full lg:w-auto"
          title={tableTitle}
          footer={ footer }
          // style={{width: '95%'}}
        >

          {/* <h3 style={{ margin: '10px 0px 5px 0px', textAlign: 'left'}}>Account data</h3> */}
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
              <Dropdown
                options={ genders }
                value={ gender }
                onChange={ (e) => setProduct({
                  ...product,
                  gender: e.value
                }) }
                optionLabel='name'
                className='w-full lg:w-auto'
                // placeholder="Select a gender"
              />
              <label htmlFor="gender">Gender</label>
            </span>

            {/* <span className="p-float-label inline-block w-full mt-5  lg:mt-0 lg:w-auto">
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
            </span> */}
          </div>

          <div className='mt-4'>

            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <Dropdown
                id="category"
                options={categories}
                value={category}
                optionLabel="name"
                onChange={(e)=>setProduct({
                  ...product,
                  category: e.value
                })}
                className='w-full lg:w-auto'
              />
              <label htmlFor="category">Category</label>
            </span>

            <span className="p-float-label inline-block w-full lg:mr-4 lg:w-auto">
              <Dropdown
                // id="styleType"
                options={ styleTypes }
                value = { styleType }
                onChange={(e)=>setProduct({
                  ...product,
                  styleType: e.value
                })}
                optionLabel='name'
                className='w-full lg:w-auto'
              />
              <label htmlFor="styleType">Style Type</label>
            </span>
          </div>

          {/* <h3 style={{ margin: '25px 0px 5px 0px', textAlign: 'left'}}>Personal data</h3> */}
          <div className='mt-4'>
            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <InputNumber
                id="stock"
                value={stock}
                onChange={(e)=>setProduct({
                  ...product,
                  stock: e.value
                })}
                className='w-full lg:w-auto'
                min={1}
                max={100}
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
              />
              <label htmlFor="stock">Stock</label>
            </span>

            <span className="p-float-label inline-block w-full mt-5 lg:mt-0 lg:w-auto">
              <InputNumber
                id="price"
                value={price}
                onChange={(e)=>setProduct({
                  ...product,
                  price: e.value
                })}
                className={`w-full lg:w-auto ${isEmptyField && 'p-invalid'}`}
                mode="currency"
                currency="USD"
                min={1}
                max={999}
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
              />
              <label htmlFor="price">Price</label>
            </span>

            {/* <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
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
            </span> */}
          </div>

          <div className='mt-4'>
            <span className="p-float-label inline-block w-full mt-5 lg:mr-4 lg:mt-0 lg:w-auto">
              <input
                type="file"
                className={`w-full lg:w-auto ${isEmptyField && 'file-invalid'} text-primary`}
                onChange={(e) => handleFile(e)}
              />

              {/* <button type='button' onClick={(e) => handleUpload(e)}>Upload</button> */}

              {/* <Image src={product.image} alt="Image Text" width='300px' /> */}
            </span>

            <img
              width="100px"
              src={` ${!image ? imgNotFound : 'http://127.0.0.1:5000/static/'+image} `}
              onError={(e) => e.target.src='data:image/png;base64,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'}
              alt={image}
              className={`product-image ${!image ? 'hidden' : 'inline-block'}`}
            />

          </div>

        </Card>
      </div>
    </>
  )
}
