import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router';

const Product=()=>{

    const {id} = useParams();
    const [product, setProduct] =useState([]);
    const [loading, setLoading] =useState(false);

    useEffect (()=>{
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
            Loading....
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <mg src={product.image} alt={product.title} height="480px" width="400px"/>
            </div>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <loading/>:<ShowProduct/>}
                </div>
            </div>
        </div>
    )
}

export default Product;