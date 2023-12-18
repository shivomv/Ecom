// In your Home.js file

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { midbanner } from '../images'; // Import the ProductCard component
import { CarouselComponent, CategorySlider,ProductCard } from '../Components/HomeComponents/Index';

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

  const renderProductCards = (productList) => {
    return (
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
        {productList.map((product) => (
          <Col key={product.id} className="mb-4">
            <ProductCard product={product} isPriceClicked={isPriceClicked} />
          </Col>
        ))}
      </Row>
    );
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
          {renderProductCards(products.slice(0, 10))}
        </Container>
      </Container>

      {/* Banner 2 */}
      <Container fluid>
        <Container>
          <img src={midbanner} className="img-fluid" alt="" />
        </Container>
      </Container>

      {/* Featured Products */}
      <Container fluid>
        <Container className="mt-4">
          <h3 className="border-bottom border-3 pb-2 mb-4">Featured Products</h3>
          {renderProductCards(products.slice(10, 20))}
        </Container>
      </Container>
    </>
  );
};

export default Home;
