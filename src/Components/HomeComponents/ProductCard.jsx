// In your ProductCard.js file

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ product, isPriceClicked }) => {
  const handlePriceClick = () => {
    // Add any additional logic or state changes as needed
  };

  return (
    <Card className={`position-relative ${isPriceClicked ? 'price-clicked' : ''}`}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={product.image} className="card-img-top border" alt={`Product ${product.id} Image`} height={200} />
        <div className="like-icon">
          <Button variant="danger" className="btn btn-sm">
            <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
              <span className="fa fa-heart"></span>
            </Link>
          </Button>
        </div>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
          <Card.Title style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {product.title}
          </Card.Title>
        </Link>
        <Card.Text style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2 }} className="text-wrap">
          {product.description}
        </Card.Text>
        <div className="price-container" onClick={handlePriceClick}>
          <div className="cut-price-container" style={{ marginBottom: '8px' }}> {/* Custom margin-bottom styling */}
            <h6 className="cut-price">₹{product.price + 1000}</h6>
          </div>
          <div className="new-price-container">
            <h5 className="new-price">₹{product.price}</h5>
          </div>
        </div>
        <div style={{ marginTop: '8px' }}> {/* Custom margin-top styling */}
          <Button className='btn btn-sm btn-success'>
            <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
              Buy
            </Link>
          </Button>
          <Button className='btn btn-sm btn-primary' style={{ marginLeft: '8px' }}> {/* Custom margin-left styling */}
            <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
              Add To Cart
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
