import { ReactElement, ReactNode, useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import axios from "axios";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Divider } from "primereact/divider";
import { ProgressBar } from "primereact/progressbar";

import { Product } from "../../interfaces";
import productService from "../../services/product.service";

export const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const [boards, setBoards] = useState<any>([]);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location: ", location.pathname.split("/")[2]);

  const getProductById = async (id: string) => {
    const response = await productService.getProduct(id);
    setProduct(response.data);
  };

  const getBoards = async () => {
    const response = await axios(
      "http://localhost:3002/search/findProductsByCategoryId/64c2d97e105160d0391b04e8"
    );
    setBoards(response.data?.results);
  };

  useEffect(() => {
    getProductById(params?.id);
    getBoards();
  }, []);

  useEffect(() => {
    console.log("Params: ", params);
    getProductById(params?.id);

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [params]);

  const speedBoardProgress = (category: string) => {
    switch (category) {
      case "pennyBoard":
        return "70";

      case "skateBoard":
        return "85";

      case "longBoard":
        return "95";
    }
  };

  const controlBoardProgress = (category: string) => {
    switch (category) {
      case "pennyBoard":
        return "80";

      case "skateBoard":
        return "90";

      case "longBoard":
        return "70";
    }
  };

  const GripBoardProgress = (category: string) => {
    switch (category) {
      case "pennyBoard":
        return "75";

      case "skateBoard":
        return "90";

      case "longBoard":
        return "100";
    }
  };

  const productTemplate = (product: Product) => {
    return (
      <div
        className="card__container m-3"
        onClick={() => {
          getProductById(product?._id);
          navigate(`../${product?._id}`);
        }}
      >
        <div className="mb-3">
          <img
            width="80px"
            src={product?.img.url}
            alt={product.name}
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
        </div>
      </div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 4rem auto",
          padding: "0 1.5rem",
          // border: "solid 1px green",
        }}
      >
        <div className="flex justify-content-between">
          <div style={{ flex: "2", textAlign: "center" }}>
            <img
              // width="120px"
              height="550px"
              src={product?.img?.url}
              alt={product?.name}
              // style={{ border: "solid 2px black" }}
            />
          </div>
          <div
            style={{ flex: "2" }}
            className="flex flex-column  my-4"
          >
            <div className="">
              {/* <h3 className="text-600">{product?.category?.name}</h3> */}
              <h1>{product?.name}</h1>
              <h2
                style={{
                  color: "white",
                  backgroundColor: "var(--text-color-secondary)",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "inline-block",
                  padding: "0 10px",
                  margin: "0",
                }}
              >
                $ {product?.price}.00 US
              </h2>

              {/* <div
                style={{
                  display: "flex",
                  // justifyContent: "space-evenly",
                  gap: "30px",
                  margin: "2rem 0",
                }}
              >
                <div>
                  <div className="text-600 mb-1">Speed</div>
                  <ProgressBar
                    style={{
                      height: "15px",
                      width: "120px",
                    }}
                    value={speedBoardProgress(product?.category?.name)}
                  ></ProgressBar>
                </div>

                <div>
                  <div className="text-600 mb-1">Control</div>
                  <ProgressBar
                    style={{
                      height: "15px",
                      width: "120px",
                    }}
                    value={controlBoardProgress(product?.category?.name)}
                  ></ProgressBar>
                </div>

                <div>
                  <div className="text-600 mb-1">Grip</div>
                  <ProgressBar
                    style={{
                      height: "15px",
                      width: "120px",
                    }}
                    value={GripBoardProgress(product?.category?.name)}
                  ></ProgressBar>
                </div>
              </div> */}
              <p className="text-lg">{product?.description}</p>
            </div>

            <div className="description-section text-lg">
              <div className="flex mt-2">
                <i
                  style={{
                    // padding: "1rem",
                    marginRight: "1rem",
                    paddingLeft: "0",
                    fontSize: "1.5rem",
                  }}
                  className="pi pi-palette"
                ></i>

                <div>
                  <b>Deck Design</b>
                  <div>
                    The deck is durable, flexible, and features a distinctive
                    banana-shaped curvature.
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <i
                  style={{
                    // padding: "1rem",
                    marginRight: "1rem",
                    paddingLeft: "0",
                    fontSize: "1.5rem",
                  }}
                  className="pi pi-bolt"
                ></i>

                <div>
                  <b>Portability</b>
                  <div>
                    Ideal for commuting, cruising around town, or navigating
                    through tight spaces.
                  </div>
                </div>
              </div>

              <div className="flex mt-4">
                <i
                  style={{
                    // padding: "1rem",
                    marginRight: "1rem",
                    paddingLeft: "0",
                    fontSize: "1.5rem",
                  }}
                  className="pi pi-user"
                ></i>

                <div>
                  <b>Ideal for All Skill Levels</b>
                  <div>
                    User-friendly design makes them accessible to everyone.
                  </div>
                </div>
              </div>
            </div>

            <Button
              label="Add to cart"
              size="small"
              className="mt-4"
            />
          </div>
        </div>
      </div>

      <Divider className="my-8" />

      <h1 className="text-center">You might also like:</h1>

      <Carousel
        value={boards}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
};
