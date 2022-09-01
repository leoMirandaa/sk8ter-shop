import { useContext, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { UserContext } from '../../auth/context/UserContext';

export const TestingComponents = () => {

  const { globalUser } = useContext( UserContext )
  const [items, setItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify('michael'));
  }, [items]);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    console.log('items..', items);
    if (items) {
    setItems(items);
    }
  }, []);


  return (
    <div className='p-6 surface-200'>

      {/* <input
        type="text"
        onChange={ handleInputChange }
        className="block"
      />

      <button
        onClick={ saveData }
      >
        Save
      </button> */}

      <br />
      <hr />

      <h1>{items}</h1>
      <h2>{localStorage.getItem('user')}</h2>
      <h2>{JSON.stringify(globalUser)}</h2>
      <h3>{globalUser.name}</h3>


    </div>
  )
}
