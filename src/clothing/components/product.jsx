import "./product.css";
import QuantityPicker from "./quanityPicker";
import {useState} from "react";

import { useContext } from "react";
import { DataService } from "../../service/dataService";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(DataService).addProdToCart;

    const handleQuantityChange = (val) => {
        console.log("The quantity change!", val);
        setQuantity(val);
    };

    const handleAdd = () => {
        let prod = {...props.info, quantity: quantity};
        addProdToCart(prod);
        //

    };
    return (
        <div className="product">
            <img src={"/images/" + props.info.image} alt="Product"></img>
            <div className="product-info">
                <h3>{props.info.title}</h3>
                <div className="prices">
                    <label className="price"><span>Unit Price:</span>$ {+props.info.price.toFixed(2)}
                    </label>
                    <label className="total"><span>Total:</span>$ {(+props.info.price * quantity).toFixed(2)}
                    </label>
                </div>
                <div className="qp">
                    <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
                </div>
                <button onClick={handleAdd}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;