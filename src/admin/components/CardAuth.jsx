import { Card } from "primereact/card"
import { useNavigate } from "react-router-dom";

export const CardAuth = ({ title, icon }) => {

  const navigate = useNavigate()

  const handleClick = ( titleToSearch ) => {
    console.log('**** ',titleToSearch );
    navigate(`${titleToSearch}`)
  }

  return (
    <Card
      className="admin-card shadow-4"
      title={title}
      style={{ width: '10rem', cursor:'pointer'}}
      onClick={ () => handleClick(title) }
    >
      <i className={`pi ${icon}`} style={{'fontSize': '2em'}}></i>
    </Card>
  )
}