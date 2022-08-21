
import CarouselStyleAssessment from "../components/carousel"


export const HomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="max-w-screen">
        <img
          className="bg-cover w-full"
          // width="100%" height="600"
          src="../../../public/images/home-image13.jpg"
        />
      </div>

        <CarouselStyleAssessment/>

    </div>

  )
}
