
import CarouselStyleAssessment from "../components/carousel"
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const URL = import.meta.env.VITE_REACT_APP_URL

export const HomePage = () => {

  return (
    <div className="animate__animated animate__fadeIn home-page-bg" >
      <div className="home-page-container grid p-4" style={{justifyContent:'center'}}>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Girls"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/kid-girl-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teen Girls"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/teen-girl-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 sm:col-6 lg:col-4">
          <Card
            title="Women"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/woman-img.jpg`}onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Boys"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/kid-boy-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teen Boys"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/teen-boy-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Men"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src={`${URL}/static/man-img.jpg`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>
      </div>

    </div>

  )
}
