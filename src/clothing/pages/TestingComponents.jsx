import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export const TestingComponents = () => {

  const [selectedCity, setSelectedCity] = useState('NY')

  const cities = [
    {name: 'Female', value: 'FM'},
    {name: 'Male', value: 'ML'}
  ];

  return (
    <>
      <div>TestingComponents</div>

       <h5>Basic</h5>
      <Dropdown
        className='sm: w-3'
        value={selectedCity}
        options={cities}
        onChange={(e)=>setSelectedCity(e.value)}
        optionLabel="name"
        placeholder="Select a City"
      />


    </>
  )
}
