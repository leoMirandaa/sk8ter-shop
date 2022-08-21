import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { ProductService } from '../../service/ProductService';
// import './CarouselDemo.css';
// import './carousel.css'

const CarouselMen = () => {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    const retrieveProducts = async() => {
        const product = new ProductService();
        let products = await product.getMenProducts();
        setProducts(products)

        console.log('Men products... ', products);
    }

    useEffect(() => {
        retrieveProducts()
        // console.log( productService.getProduct().then(data => setProducts(data.slice(0,9))))
        // productService.getProduct().then(data => setProducts(data.slice(0,9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        <img width="70%" height="70%" src={product.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4 className="mb-1">{product.name}</h4>
                        <small>{product.description}</small>
                        <h5> $ {product.price}</h5>
                        <span className={`product-badge status-${product.inventoryStatus}`}>{product.inventoryStatus}</span>
                        <div className="car-buttons mt-5">
                            <Button icon="pi pi-search" className=" p-button p-button-rounded mr-2" />
                            <Button icon="pi pi-star-fill" className=" p-button-secondary p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className=" p-button-info p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h5>Basic</h5>} />
            </div>

            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} />
            </div>

            <div className="card">
                <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
                    itemTemplate={productTemplate} header={<h5>Vertical</h5>} style={{maxWidth: '400px', marginTop: '2em'}} />
            </div>
        </div>
    );
}

export default CarouselMen;