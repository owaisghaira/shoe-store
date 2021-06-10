import React from 'react'
import Shoes from '../shoes.json'
import Card from '../Components/Card'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'
function Product() {
    return (
        <>
            <NavBar />
            <div className='m-3'>
                <h1 className='p-2'>Fresh Recommendations</h1>
                <div className='row '>
                    {Object.keys(Shoes).map((keyname) => {
                        return (
                            <Link className='col-lg-3 col-md-4 col-12' to={`/product/${keyname}`} >
                                <Card name={Shoes[keyname].name} img={Shoes[keyname].img} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Product
