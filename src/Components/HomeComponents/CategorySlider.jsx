import React, { useState, useEffect } from 'react'
import { Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CategorySlider = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <>
      <Container fluid className="category">
        <Container className="px-0 d-flex justify-content-between text-danger overflow-x-auto overflow-y-hidden">
          {/* Card Category */}
          {categories.slice(0,5).map((category) => (
            <Link to="#" key={category.id} className="text-decoration-none"> {/* Add text-decoration-none class to remove the underline from the link */}
              <Card className="card-cat border-0"> {/* Add border-0 class to remove the border */}
                <Card.Img src={category.image} className="card-img-top rounded-circle" alt={`Category-${category.id}`} />
                <Card.Body className="text-center">
                  <Card.Title className='category-title'>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
          {categories.slice(0,5).map((category) => (
            <Link to="#" key={category.id} className="text-decoration-none"> {/* Add text-decoration-none class to remove the underline from the link */}
              <Card className="card-cat border-0"> {/* Add border-0 class to remove the border */}
                <Card.Img src={category.image} className="card-img-top rounded-circle" alt={`Category-${category.id}`} />
                <Card.Body className="text-center">
                  <Card.Title className='category-title'>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </Container>
      </Container>
    </>
  )
}

export default CategorySlider