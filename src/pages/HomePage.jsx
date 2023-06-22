import { Card } from "primereact/card";
import { Button } from "primereact/button";
import PrimeReact from "primereact/api";
import { ScrollTop } from "primereact/scrolltop";
import { Footer } from "../components/Footer";

const URL = import.meta.env.VITE_REACT_APP_URL;

export const HomePage = () => {
  return (
    // <div className="animate__animated animate__fadeIn home-page-bg">
    <div style={{ backgroundColor: "#E8DCD2" }}>
      <div
        className="animate__animated animate__fadeIn splash relative"
        // style={{ backgroundColor: "var(--primary-color)" }}
      >
        <div className="absolute splashScreen-text text-center">
          <h2 className="text-6xl md:text-8xl m-0">Find your style</h2>
          <p className="text-3xl">
            Summer whites and bringth tropila prints capture a breeze.
          </p>
          <div className="mb-8 text-5xl font-bold text-primary price">
            $249.99{" "}
            <span className="ml-2 text-gray-600 font-normal line-through	">
              $99.99
            </span>
          </div>
          <Button size="large">Shop now</Button>
        </div>
      </div>

      <div className="flex justify-content-center ">
        <div className="font-bold md:text-xl xl:text-2xl surface-ground w-full h-5rem  flex align-items-center justify-content-center border-dashed border-primary">
          <span>20%Off</span>
          <span className="mx-8">20%Off</span>
          <span>20%Off</span>
          <span className="mx-8">20%Off</span>
          <span>20%Off</span>
        </div>
      </div>

      <div
        className=" py-4 container flex flex-wrap column-gap-4"
        style={{ justifyContent: "center" }}
      >
        <div className="col-11 sm:col-6 lg:col-4 ">
          <Card
            title="Girls"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/kid-girl-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teen Girls"
            // subTitle="Women"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/teen-girl-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>

        <div className="col-11 sm:col-6 sm:col-6 lg:col-4">
          <Card
            title="Women"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/woman-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Boys"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/kid-boy-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Teen Boys"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/teen-boy-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>

        <div className="col-11 sm:col-6 lg:col-4">
          <Card
            title="Men"
            header={
              <img
                style={{ borderRadius: "5px" }}
                alt="Card"
                src={`${URL}/static/man-img.jpg`}
                onError={(e) =>
                  (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
              />
            }
            footer={
              <Button
                className="p-button-primary"
                label="Shop now"
              />
            }
          />
        </div>
      </div>

      <Footer />
      {/* <ScrollTop
        target="parent"
        threshold={100}
        className="w-2rem h-2rem border-round bg-primary"
        icon="pi pi-arrow-up text-base"
      /> */}
    </div>
  );
};