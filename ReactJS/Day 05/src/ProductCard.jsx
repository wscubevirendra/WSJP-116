import React from 'react'

function ProductCard(props) {
    return (
        <div className="col-4">
            <div className="featured-product-card">
                <div className="featured-product-image" style={{ background: `url(${props.path})`}}>
                </div>
                <div className="featured-product-details">
                    <h6 className="mb-3">{props.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted">Price: ${props.price}</span>
                        <a href="#" className="btn btn-primary">View Product</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
