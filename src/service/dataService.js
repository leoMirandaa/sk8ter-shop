import axios from "axios";




 export class DataService {

    async getCatalog() {
        //get catalog from server
        //return the list pf products
       let response = await axios.get("http://127.0.0.1:5000/api/catalog");
       return response.data;
    }
    async getCoupons(){    //return mockCatalog;
       let getCoupon = await axios.get("http://127.0.0.1:5000/api/couponCode");
       
       return getCoupon.data;
    }
    async saveCoupon(coupon){    //return mockCatalog;
        let response = await axios.post("http://127.0.0.1:5000/api/couponCode", coupon);
        return response.data;
    }
    async saveProduct(product){    //return mockCatalog;
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }
    
};

