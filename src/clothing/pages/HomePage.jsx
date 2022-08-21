
import CarouselStyleAssessment from "../components/carousel"
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export const HomePage = () => {

  return (
    <div className="animate__animated animate__fadeIn home-page-bg" >
      <div className="home-page-container grid">
        <div className="col-11 md:col-4">
            <Card

              title="Women"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/home-image5.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

        <div className="col-11 md:col-4">
            <Card

              title="Women"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/home-image6.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

        <div className="col-11 md:col-4">
            <Card

              title="Men"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/man-img1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

        <div className="col-11 md:col-4">
            <Card

              title="Men"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/home-image10.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

        <div className="col-11 md:col-4">
            <Card

              title="Kids"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/woman-img3.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

        <div className="col-11 md:col-4">
            <Card

              title="Kids"
              // subTitle="Women"
              header={ <img style={{borderRadius: '5px'}} alt="Card" src="/images/woman-img1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/> }
              footer={ <Button className="p-button-primary" label="Shop now" /> }
            />
        </div>

      </div>

        {/* <CarouselStyleAssessment/> */}


    </div>

  )
}
