import { useEffect, useState } from "react";
import { DataService } from "../../services/dataService";

// import "./admin.css";
import { CardUI } from "../../components/AdminDashboardCard";

export const AdminPage = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState({});

  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [viewCoupons, setViewCoupons] = useState([]);
  const [viewProduct, setViewProduct] = useState([]);

  const cardData = [
    { title: "Users", icon: "pi-user" },
    { title: "Products", icon: "pi-shopping-cart" },
    { title: "Coupons", icon: "pi-ticket" },
  ];

  const handleTextChange = (e) => {
    let copy = { ...product };

    copy[e.target.name] = e.target.value;
    setProduct(copy);
  };

  const showError = (text) => {
    setErrorMessage(text);
    setErrorVisible(true);
  };
  const handleItemAdd = async () => {
    if (0) {
      //never
      return;
    }

    if (product.title.length < 4) {
      showError("Error, title must have aleast 4 charaters");
      return;
    }
    if (!product.styleType) {
      showError("Error, Style type must be filled in");
      return;
    }
    if (!product.image) {
      showError("Error, image must be filled in");
      return;
    }
    let savedProduct = { ...product };
    savedProduct.price = parseFloat(product.price);

    if (!savedProduct.price || savedProduct.price < 1) {
      showError("Error, Price must be at least $1");
    }
    setErrorVisible(false);

    //send product to server
    let service = new DataService();
    let res = await service.saveProduct(savedProduct);

    let copy = [...product];
    copy.push(res);
    setAllCoupons(copy);
  };

  useEffect(() => {
    loadProduct(); //Catalog loading
    loadCoupons(); //Coupons loading
  }, []);

  const loadCoupons = async () => {
    const service = new DataService();
    let coupon = await service.getCoupons();
    setViewCoupons(coupon);
  };

  const loadProduct = async () => {
    const service = new DataService();
    let prods = await service.getCatalog();
    setViewProduct(prods);
  };

  const handleCodeChange = (e) => {
    let copy = { ...coupon };

    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const handleCodeAdd = async () => {
    let couponSaved = { ...coupon };
    couponSaved.discount = parseFloat(couponSaved.discount);
    //Validation
    if (!coupon.discount || coupon.discount > 35) {
      showError(
        "Error, discount can not be greater than 35% or you must add your discount amount"
      );
      return;
    }

    if (couponSaved.code.length < 5) {
      showError("Error, Must be at least 5 charaters");
      return;
    }

    setErrorVisible(false);
    //send to server

    let service = new DataService();
    let res = await service.saveCoupon(couponSaved);

    let copy = [...coupon];
    copy.push(res);
    setAllCoupons(copy);
  };

  return (
    <div className="animate__animated animate__fadeIn fullWidthHeight flex flex-column md:flex-row align-items-center md:align-items-start justify-content-evenly">
      {cardData.map((card) => (
        <CardUI
          key={card.title}
          title={card.title}
          icon={card.icon}
        />
      ))}
    </div>
  );
};
