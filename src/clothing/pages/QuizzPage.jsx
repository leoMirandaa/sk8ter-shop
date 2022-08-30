import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

export const QuizzPage = () => {
  // const initialState = [
  //   {size: 'xs'},
  //   {size: 'sm'},
  //   {size: 'md'},
  //   {size: 'lg'},
  //   {size: 'xl'},
  //   {size: '2xl'},
  //   {size: '3xl'},
  // ]

  const sizeChart = [
    {size: 'xs'},
    {size: 'sm'},
    {size: 'md'},
    {size: 'lg'},
    {size: 'xl'},
    {size: '2xl'},
    {size: '3xl'},
  ]


  const [products, setProducts] = useState(sizeChart);
  // const [city, setCity] = useState(null);
  const [size, setSize] = useState(null)

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  const productTemplate = (sizeChart) => {
    return (
      <>
          {/* <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span> */}
          <div className=" m-3 field-radiobutton">
              {/* <Button
                label={products.size}
                className="my-2 p-button-rounded"
              /> */}

              <RadioButton
                inputId="city1"
                name="city"
                value={sizeChart}
                onChange={(e) => setSize(e.value.size) }
                checked={size === sizeChart.size}
              />
              <label>{sizeChart.size}</label>
          </div>
      </>

    );
  }

  return (
    <div className='p-6 surface-50'>
      <h2 className='text-center mb-6'>Quizz</h2>


      <div
        className="grid surface-0 mb-4 shadow-2"
        // style={{border: 'solid 1px var(--primary-color)'}}
      >
        <div className="col-3 bg-primary flex justify-content-center align-items-center font-bold text-lg">
          Shirt &amp; Blouse
        </div>

        <div className="col-9">
          <Carousel
            value={products}
            numVisible={5}
            numScroll={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            // header={<h5>Basic</h5>}
          />
        </div>
      </div>

      <div
        className="grid surface-0 mb-4 shadow-2"
        // style={{border: 'solid 1px var(--primary-color)'}}
      >
        <div className="col-3 bg-primary flex justify-content-center align-items-center font-bold text-lg">
          Dress
        </div>

        <div className="col-9">
          <Carousel
            value={products}
            numVisible={5}
            numScroll={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            // header={<h5>Basic</h5>}
          />
        </div>
      </div>

      <div
        className="grid surface-0 mb-4 shadow-2"
        // style={{border: 'solid 1px var(--primary-color)'}}
      >
        <div className="col-3 bg-primary flex justify-content-center align-items-center font-bold text-lg">
          Dress
        </div>

        <div className="col-9">
          <Carousel
            value={products}
            numVisible={5}
            numScroll={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
            // header={<h5>Basic</h5>}
          />
        </div>
      </div>
    </div>
  )
}
