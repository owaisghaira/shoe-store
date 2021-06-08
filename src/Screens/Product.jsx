import React from 'react'
import Shoes from '../shoes.json'
import Card from '../Components/Card'


function Product() {
    return (
        <div>
            <h1 className=''>Products</h1>
            <div className='row m-3'>
                {Object.keys(Shoes).map((keyname) => {
                    return (
                        <div className='col-lg-3 col-md-4 col-12'>
                            <Card name={keyname} img={Shoes[keyname].img} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product
