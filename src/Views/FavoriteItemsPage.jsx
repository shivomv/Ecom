import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { slide1 } from '../images';

const FavoriteItemsPage = () => {
    const initialFavorites = [
        { id: 1, name: 'Favorite Product 1', price: 120, inStock: true },
        { id: 2, name: 'Favorite Product 2', price: 100, inStock: false },
        // Add more favorite items as needed
    ];

    const [favorites, setFavorites] = useState(initialFavorites);

    const handleRemove = (productId) => {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== productId);
        setFavorites(updatedFavorites);
    };

    return (
        <section className="h-100 gradient-custom">
            <Container className="py-3">
                <Card className="mb-3">
                    <Card.Header>
                        <h5>Favorite Items - {favorites.length} items</h5>
                    </Card.Header>
                </Card>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {favorites.map((favorite) => (
                        <Col key={favorite.id}>
                            <Card className="h-100">
                                <Card.Img variant="top" src={slide1} alt={`Product ${favorite.id}`} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>{favorite.name}</Card.Title>
                                    <Card.Text>
                                        Price: Rs.{favorite.price}
                                    </Card.Text>
                                    {favorite.inStock ? (
                                        <Card.Text className="text-success">In Stock</Card.Text>
                                    ) : (
                                        <Card.Text className="text-danger">Out of Stock</Card.Text>
                                    )}
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleRemove(favorite.id)}
                                    >
                                        Remove
                                    </Button>
                                    {favorite.inStock ? (
                                        <Button variant="primary" size="sm">
                                            View
                                        </Button>
                                    ) : (
                                        <Button variant="warning" size="sm">
                                            Notify
                                        </Button>
                                    )}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FavoriteItemsPage;
