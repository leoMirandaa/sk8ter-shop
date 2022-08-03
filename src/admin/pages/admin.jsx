
import { useEffect, useState } from "react";
import {DataService } from "../../service/dataService";

import "./admin.css";

export const Admin = () => {
    const[coupon, setCoupon] = useState({});
    const[product, setProduct] = useState({});
    const [allCoupons, setAllCoupons] = useState({});
    
    const[errorVisible, setErrorVisible] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");
    const [viewCoupons, setViewCoupons] = useState([]);
    const [viewProduct, setViewProduct] = useState([]);
    
    
    const handleTextChange = (e) => {
        let  copy = {...product};

        copy[e.target.name] = e.target.value;
        setProduct(copy);

       
        
    };

    const showError = (text) => {
        setErrorMessage(text);
        setErrorVisible(true);
        
    }
    const handleItemAdd = async () => {
        if(0){
            //never
            return;
        }

        if (product.title.length < 4 ) {
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
        let savedProduct = {...product};
        savedProduct.price = parseFloat(product.price);

        if(!savedProduct.price || savedProduct.price < 1){
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
        loadProduct();//Catalog loading
        loadCoupons();//Coupons loading
    }, []);

    const loadCoupons = async () =>{
        const service = new DataService();
        let coupon = await service.getCoupons();
        setViewCoupons(coupon);
        
        
    };

    const loadProduct = async () =>{
        const service = new DataService();
        let prods = await service.getCatalog();
        setViewProduct(prods);
        
        
    };

    
    const handleCodeChange = (e) => {
        let  copy = {...coupon};

        copy[e.target.name] = e.target.value;
        setCoupon(copy);

        
        
    };

    
    const handleCodeAdd = async () => {
        

        let couponSaved = {...coupon};
        couponSaved.discount = parseFloat(couponSaved.discount);
            //Validation
        if (!coupon.discount || coupon.discount > 35) {
            showError("Error, discount can not be greater than 35% or you must add your discount amount");
            return
        }

        if(couponSaved.code.length < 5){
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

           
    return(

        <div className="admin-page">

            {errorVisible ? <div className="alert alert-danger">{errorMessage}</div> : null }

            <div className="sections-container">
                <section className="section-products">
                    <h4>Mange Product</h4>
                        <div className="form">
                            <div className="my-control">
                                <label>Title:</label>
                                <input onChange={handleTextChange} name="title" type="text"   />
                            </div>

                            <div className="my-control">
                                <label>Style Type:</label>
                                <input onChange={handleTextChange} name="styleType" type="text"  />
                            </div>

                            <div className="my-control">
                                <label>Image:</label>
                                <input onChange={handleTextChange} name="image" type="text"   />
                            </div>

                            <div className="my-control">
                                <label>Price:</label>
                                <input onChange={handleTextChange} name="price" type="number" />
                            </div>

                            <div className="my-control">
                                <label>Gender:</label>
                                <input onChange={handleTextChange} name="gender" type="text"   />
                            </div>

                            <div className="my-control">
                                <label>Discount:</label>
                                <input onChange={handleTextChange} name="discount" type="text"  />
                            </div>

                            <div className="my-control">
                                <button onClick={handleItemAdd}  className="btn btn-dark">Register Product</button>
                            </div>
                            
                        </div>
                        <div className="coupons">
                            <ul>
                                {viewProduct.map((prods) => ( 
                                    <li key={prods._id}>
                                        {prods.title}-{prods.price}
                                    </li>))}
                            </ul>
                        </div>
                </section>
            </div>
            <section className="section-coupons">
                    <h4>Manage Coupons</h4>
                        <div className="coupon-form">
                        <div className="my-control">
                                <label>Code:</label>
                                <input onChange={handleCodeChange} name="code" type="text" />
                            </div>

                            <div className="my-control">
                                <label>Discount:</label>
                                <input onChange={handleCodeChange} name="discount" type="number"   />
                            </div>

                            <div className="my-control">
                                <button onClick={handleCodeAdd}  className="btn btn-dark">Apply Coupon</button>
                            </div>
                        </div>
                        <div className="coupons">
                            <ul>
                                {viewCoupons.map((coupon) => ( 
                                    <li key={coupon._id}>
                                        {coupon.code}-{coupon.discount}
                                    </li>))}
                            </ul>
                        </div>
            </section>
            
        
        </div>
            

    )


};
 