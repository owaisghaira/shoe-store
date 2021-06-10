import React from 'react'
import NavBar from '../Components/NavBar'
import { useParams } from 'react-router-dom'
import shoes from '../shoes.json'
function ProductDetail() {
    const { id } = useParams();
    const shoe = shoes[id]
    // console.log(shoe)
    return (
        <div>
            <NavBar />
            <h2 className='row justify-content-center m-3'>{shoe.name}</h2>
            <div className='container-fluid row'>
                <div className='col-lg-5 col-12 m-5 border'>
                    <img className='card-img' src={shoe.img} alt="" />
                </div>
                <div className='col-lg-5 col-12 m-5 justify-content-center'>
                    <h3 className='mt-5'>{shoe.name}</h3>
                    <h3>Price : 24555</h3>
                    <a href="#" className="btn btn-primary btn-lg">Buy Now</a>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail
