import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../../auth/context/UserContext';
import { getUser, updateUser } from '../helpers';
import { ProductService } from '../../service/ProductService';

import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
// import './CarouselDemo.css';
// import './carousel.css'
const URL = import.meta.env.VITE_REACT_APP_URL

const CarouselStyleAssessment = () => {

    const { globalUser, handleSetGlobalUser } = useContext( UserContext )
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
        let products = await product.getWomenProducts();
        setProducts(products)
    }

    useEffect(() => {
        retrieveProducts()
        // console.log( productService.getProduct().then(data => setProducts(data.slice(0,9))))
        // productService.getProduct().then(data => setProducts(data.slice(0,9)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log('globaluser changed');
    }, [globalUser])

    const handleAddProduct = async( product ) => {
        let productToAdd = {
            productId: product._id,
            quantity: 1
        }

        let data =
        {...globalUser, cart: [...globalUser.cart, productToAdd]}

        await	handleSetGlobalUser(data)

        await	handleUpdateUser(globalUser._id, globalUser)

				// await handleGetUser(globalUser._id)
    }

		const handleUpdateUser = async(id, user) => {
			const response = await updateUser(id, user)
			console.log('response ', response);
		}

		// const handleGetUser = async(id) => {

		// 	const user_request = await getUser(id)
		// 	handleSetGlobalUser(user_request.data)
		// }

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content bg-primary-reverse" >
                    <div className="mb-3">
                        <img width="70%" height="70%" src={`${URL}/static/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image" />
                    </div>
                    <div className=''>
                        <h4 className="mb-1">{product.name}</h4>
                        <h3>{ product.title }</h3>
                        <small><b>Style: </b>{product.styleType}</small>
                        <h5 className='underline'> $ {product.price}</h5>
                        <span className={`product-badge status-${product.inventoryStatus}`}>{product.inventoryStatus}</span>
                        <div className="px-4 car-buttons mt-5">
                            <Button
                                label="Buy now"
                                className="p-button-primary p-button-sm p-button-rounded mr-2 w-full md:w-auto"
                            />
                            <Button
                                label="Add to cart"
                                className="p-button-secondary p-button-outlined p-button-sm p-button-rounded mt-2 w-full md:w-auto md:mt-0 mr-2"
                                onClick={ () => handleAddProduct(product) }
                            />

                            {/* <Button icon="pi pi-star-fill" className=" p-button-secondary p-button-rounded mr-2" />
                            <Button icon="pi pi-cog" className=" p-button-info p-button-rounded" /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            {/* <div className="card">
                <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<div>Basic</div>} />
            </div> */}

            <div className="card">
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<div>Circular, AutoPlay, 3 Items per Page and Scroll by 1</div>} />
            </div>

            {/* <div className="card">
                <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
                    itemTemplate={productTemplate} header={<div>Vertical</div>} style={{maxWidth: '400px', marginTop: '2em'}} />
            </div> */}
        </div>
    );
}

export default CarouselStyleAssessment;