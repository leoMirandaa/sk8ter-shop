export class ProductService {

    async getProduct() {
        return await fetch('mockdata.json').then(res => res.json()).then(d => d.data);
    }
}