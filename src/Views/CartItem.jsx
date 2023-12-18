import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CartItem = ({ item }) => {
  return (
    <Card>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{`Price: $${item.price}`}</Card.Text>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
