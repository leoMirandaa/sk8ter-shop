
import CarouselStyleAssessment from "../components/carousel"
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const HomePage = () => {

  return (
    <div className="animate__animated animate__fadeIn home-page-bg" >
      <div className="home-page-container grid p-4" style={{justifyContent:'center'}}>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Girls"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/kid-girl-img.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teenagers Girls"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/teen-girl-img2.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 sm:col-6 lg:col-4">
          <Card
            title="Women"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/woman-img.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Boys"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/kid-boy-img.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teenagers Boys"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/teen-boy-img3.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Men"
            // subTitle="Women"
            header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/man-img.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
            footer={ <Button className="p-button-primary" label="Shop now" /> }
          />
        </div>
      </div>

    </div>

  )
}
