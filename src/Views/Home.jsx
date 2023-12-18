// In your React component file (e.g., Home.js)

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { midbanner } from '../images';
import { CarouselComponent, CategorySlider } from '../Components/HomeComponents/Index';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isPriceClicked, setPriceClicked] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlePriceClick = () => {
    setPriceClicked(true);
    // Add any additional logic or state changes as needed
  };

  return (
    <>
      <CarouselComponent />

      {/* Category */}
      <CategorySlider />

      {/* Latest Products */}
      <Container fluid>
        <Container className="mt-4">
          <h3 className="border-bottom border-3 pb-2 mb-4">Latest Products</h3>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {products.slice(0, 8).map((product) => (
              <Col key={product.id} className="mb-4">
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
                      <div className="cut-price-container">
                        <h6 className="cut-price">₹{product.price + 1000}</h6>
                      </div>
                      <div className="new-price-container">
                        <h5 className="new-price">₹{product.price}</h5>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Button className='btn btn-sm btn-success'>
                        <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                          Buy
                        </Link>
                      </Button>
                      <Button className='btn btn-sm btn-primary'>
                        <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                          Add To Cart
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Banner 2 */}
      <Container fluid>
        <Container>
          <img src={midbanner} className="img-fluid" alt="" />
        </Container>
      </Container>

      {/* Other Products */}
      <Container fluid>
        <Container className="mt-4">
          <h3 className="border-bottom border-3 pb-2 mb-4">Featured Products</h3>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {products.slice(9, 17).map((product) => (
              <Col key={product.id} className="mb-4">
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
                      <div className="cut-price-container">
                        <h6 className="cut-price">₹{product.price + 1000}</h6>
                      </div>
                      <div className="new-price-container">
                        <h5 className="new-price">₹{product.price}</h5>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <Button className='btn btn-sm btn-success'>
                        <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                          Buy
                        </Link>
                      </Button>
                      <Button className='btn btn-sm btn-primary'>
                        <Link to={`/product/${product.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                          Add To Cart
                        </Link>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
