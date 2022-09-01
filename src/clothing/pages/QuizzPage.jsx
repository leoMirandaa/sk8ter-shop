import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';

const URL = import.meta.env.VITE_REACT_APP_URL


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

  const sizeChartBra = [
    { size: '28' },
    { size: '30' },
    { size: '32' },
    { size: '34' },
    { size: '36' },
    { size: '38' },
    { size: '40' },
    { size: '42' },
    { size: '44' },
    { size: '46' },
    { size: '48' },
    { size: '50' },
    { size: '52' },
    { size: '54' }
  ]


  const [products, setProducts] = useState(sizeChart);

  const initialStateUserQuizzOptions = {
    genre: '' ,
    shirtBlouse: '' ,
    dress: '' ,
    jeans: '',
    bra: '' ,
    shoe: '' ,
    clothingFit: '',
    maternityClothing: '' ,
    petiteClothing: '' ,
  }

  const [userQuizzOptions, setUserQuizzOptions] = useState( initialStateUserQuizzOptions )
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

  const handleSelectedGenre = (e) => {
    console.log('*** ', e.target.textContent)
    setUserQuizzOptions( options => ({
        ...options, genre: e.target.textContent
      })
    )
  }

  const productTemplate = (sizeChart) => {
    return (
      <>
        <div className=" m-3 field-radiobutton">
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
    <div className='p-4 md:px-8'>
      <h2 className='text-center mb-6'>Quizz</h2>

      <h2>Clothes for </h2>
      <div className='surface-200 animate__animated animate__fadeIn mb-4 flex flex-column justify-content-evenly align-items-center md:flex-row'>
        <div className="col-11 sm:col-6 lg:col-4 inline-block" onClick={(e) => handleSelectedGenre(e)}>
          <Card
            onClick={(e) => handleSelectedGenre(e)}
            title="Woman"
            className={`hover:bg-primary cursor-pointer ${userQuizzOptions.genre === 'Woman' ? 'bg-primary': ''}`}
            style={{transition: '0.2s linear'}}
            header={ <img style={{borderRadius: '5px'}} title="Woman" alt="Woman" src={`${URL}/static/woman-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
          />
          </div>

        <div className="col-11 sm:col-6 lg:col-4 inline-block" onClick={(e) => handleSelectedGenre(e)}>
          <Card
            onClick={(e) => handleSelectedGenre(e)}
            title="Man"
            className={`hover:bg-primary cursor-pointer ${userQuizzOptions.genre === 'Man' ? 'bg-primary': ''}`}
            style={{transition: '0.2s linear'}}
            header={ <img style={{borderRadius: '5px'}} title="Man" alt="Man" src={`${URL}/static/man-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
          />
        </div>
      </div>


      <div
        className="grid surface-0 mb-4 shadow-2"
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
          />
        </div>
      </div>

      <div
        className="grid surface-0 mb-4 shadow-2"
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
          />
        </div>
      </div>

      <div
        className="grid surface-0 mb-4 shadow-2"
      >
        <div className="col-3 bg-primary flex justify-content-center align-items-center font-bold text-lg">
          Jeans
        </div>

        <div className="col-9">
          <Carousel
            value={products}
            numVisible={5}
            numScroll={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>

      <div
        className="grid surface-0 mb-4 shadow-2"
      >
        <div className="col-3 bg-primary flex justify-content-center align-items-center font-bold text-lg">
          Bra
        </div>

        <div className="col-9">
          <Carousel
            value={products}
            numVisible={5}
            numScroll={5}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
    </div>
  )
}
