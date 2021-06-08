import React from 'react'

function Card({name,img}) {
    return (
        <div className="card m-2" style={{ width: '22rem' }}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href="#" className="btn btn-primary">Add To Card</a>
            </div>
        </div>
    )
}

export default Card
