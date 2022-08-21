export class ProductService {

    async getProduct() {
        return await fetch('mockdata.json').then(res => res.json()).then(d => d.data);
    }

    async getMenProducts() {
        return fetch('mockdatamen.json').then(res => res.json()).then(d => d.data);
    }

    async getTeenGirlsProducts() {
        return fetch('mockdatateengirl.json').then(res => res.json()).then(d => d.data);
    }
}