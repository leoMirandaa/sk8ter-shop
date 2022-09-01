import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

export const userOptions =  [
  {icon: 'pi pi-home', command: () => navigate('/home')},
  {icon: 'pi pi-bolt', label: 'Quizz' ,command: () => navigate('/quizz')},
  {label: 'Women', command: () => navigate('/women')},
  {label: 'Men', command: () => navigate('/men')},
  {label: 'Kids', command: () => navigate('/kids')},
  {label: 'Discounts', command: () => navigate('/coupons')},
];