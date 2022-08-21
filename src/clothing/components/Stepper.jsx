import { Steps } from 'primereact/steps';

export const Stepper = () => {

  const items = [
    {label: 'Personal'},
    {label: 'Seat'},
    {label: 'Payment'},
    {label: 'Confirmation'}
];

  return (
    <>
      <div className='stepper-container'>
        {/* <h1>Stepper</h1> */}
        <Steps model={items} />

      </div>
    </>
  )
}
