import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';
import { deleteImage } from '../../admin/products/helpers';

export const TestingComponents = () => {

  const [value17, setValue17] = useState(null);

  const handleDeleteImage = async(rowData='newspaper.jpg') => {
    console.log('handle delete image');

    let formdata = new FormData()
    formdata.append('filename', rowData)
    console.log('rowData.image ', rowData);
    console.log('formdata ', formdata);
    await deleteImage(formdata)
  }

  return (
    <div className='m-6'>
      <h1 className='mb-4'>TestingComponents</h1>

      <h3>Basic</h3>
      <InputNumber
        inputId="stacked"
        value={value17}
        onValueChange={(e) => setValue17(e.value)}
        showButtons
        mode="currency"
        currency="USD"
        min={0}
        max={999}
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
      />

      <pre>
        {value17}
      </pre>

      <Button
          icon="pi pi-trash"
          className="p-button-danger p-button-outlined"
          onClick={() => handleDeleteImage()}
        />

    </div>
  )
}
