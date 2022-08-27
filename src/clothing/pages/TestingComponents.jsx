import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';

export const TestingComponents = () => {

  const [value17, setValue17] = useState(null);

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

    </div>
  )
}
