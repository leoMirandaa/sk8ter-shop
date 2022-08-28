import axios from 'axios'

const URL = import.meta.env.VITE_REACT_APP_URL

export class ProductService {

    async getWomenProducts() {
        // return await fetch('mockdata.json').then(res => res.json()).then(d => d.data);
        let { data } = await axios.get(`${URL}/api/catalog`)
        let productsFiltered = data.filter( d => d.gender === "FM")
        return productsFiltered
    }

    async getMenProducts() {
        // return fetch('mockdatamen.json').then(res => res.json()).then(d => d.data);
        let { data } = await axios.get(`${URL}/api/catalog`)
        // console.log('Catalog... ', data)
        let productsFiltered = data.filter( d => d.gender === "ML")
        // console.log("product filtered ", productFiltered)
        return productsFiltered
    }

    async getTeenGirlsProducts() {
        return fetch('mockdatateengirl.json').then(res => res.json()).then(d => d.data);
    }
}