
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import './home.css'
import { Settings } from './Settings';

export const Home = () => {
  return (
    <>
      <NavBar />

      <h1>Home component</h1>

      <Routes>
        <Route path="/settings" element={<Settings/>} />

      </Routes>


    </>
  )
}