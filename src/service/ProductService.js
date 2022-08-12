export class ProductService {

    getProduct() {
        return fetch('mockdata.json').then(res => res.json()).then(d => d.data);
    }
}