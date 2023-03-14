import React from 'react'


/* Her bir ürün için çekilecek olan bilgiler burada çekiliyor. O yüzden ismi SingleProduct.   */

const SingleProduct = ({product}) => {
  return (
    <div className="single-product">
      <img className='product-image' src={product.image} alt="" />
      <div className="product-info">
        <h3>
          {product.title}
        </h3>
        <p className="product-description">{product.description}</p>
        <p className='product-price'>{product.price}</p>
      </div>
    </div>
  )
}
  
export default SingleProduct
