import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { slide1 } from '../images';

const CartPage = () => {
    const gstPercentage = 18;
    const initialProducts = [
        { id: 1, name: 'Product 1', quantity: 1, price: 120 },
        { id: 2, name: 'Product 2', quantity: 1, price: 100 },
        { id: 3, name: 'Product 3', quantity: 1, price: 320 },
    ];

    const [products, setProducts] = useState(initialProducts);

    const calculateSubTotal = () => {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    const calculateGST = () => {
        const subTotal = calculateSubTotal();
        return (subTotal * gstPercentage) / 100;
    };

    const calculateTotalAmount = () => {
        const subTotal = calculateSubTotal();
        const gstAmount = calculateGST();
        return subTotal + gstAmount;
    };

    const handleIncrement = (productId) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
        setProducts(updatedProducts);
    };

    const handleDecrement = (productId) => {
        const updatedProducts = products.map((product) =>
            product.id === productId && product.quantity > 1
                ? { ...product, quantity: product.quantity - 1 }
                : product
        );
        setProducts(updatedProducts);
    };

    const handleRemove = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <section className="h-100 gradient-custom">
            <Container className="py-3">
                <Row className="d-flex justify-content-center my-4">
                    <Col md={8}>
                        <Card className="mb-4">
                            <Card.Header>
                                <h5 className="mb-0">
                                    Cart - {products.reduce((total, product) => total + product.quantity, 0)} items,{' '}
                                    {products.length} products
                                </h5>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <Card className="m-2">
                                    <Card.Header>
                                        <Row>
                                            <Col className="col-5">
                                                <h6>Product Description</h6>
                                            </Col>
                                            <Col className="col-2">
                                                <h6>Quantity</h6>
                                            </Col>
                                            <Col className="col-2">
                                                <h6>Price</h6>
                                            </Col>
                                            <Col className="col-2">
                                                <h6>Total</h6>
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                </Card>

                                {/* Main cart Products Start */}
                                {products.map((product) => (
                                    <Card key={product.id} className="mb-2">
                                        <Row className="p-2 d-flex align-items-center">
                                            <Col className="col-2 text-center">
                                                <img src={slide1} alt="" className="img-fluid" />
                                            </Col>
                                            <Col className="col-3 text-center">
                                                <h6>{product.name}</h6>
                                                <p>Product Id: {product.id}</p>
                                            </Col>
                                            <Col className="col-2 text-center">
                                                <ButtonGroup>
                                                    <Button
                                                        className="btn btn-sm"
                                                        onClick={() => handleDecrement(product.id)}
                                                    >
                                                        <i className="fa-solid fa-minus"></i>
                                                    </Button>
                                                    <Button className="btn btn-sm btn-light">{product.quantity}</Button>
                                                    <Button
                                                        className="btn btn-sm"
                                                        onClick={() => handleIncrement(product.id)}
                                                    >
                                                        <i className="fa-solid fa-plus"></i>
                                                    </Button>
                                                </ButtonGroup>
                                            </Col>
                                            <Col className="col-2 text-center">Rs.{product.price}</Col>
                                            <Col className="col-2 text-center">Rs.{(product.quantity * product.price).toFixed(2)}</Col>
                                            <Col className="col-1 text-center">
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleRemove(product.id)}
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                                {/* Main cart Products End */}
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Summary Card  */}
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Header>
                                <h5 className="mb-0">Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        <h6>Sub-Total</h6>
                                        <h6><span>Rs.{calculateSubTotal().toFixed(2)}</span></h6>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        GST ({gstPercentage}%)
                                        <span>Rs.{calculateGST().toFixed(2)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Rs.0</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                                <p className="mb-0">(Including all Taxes)</p>
                                        </div>
                                        <span><strong>Rs.{calculateTotalAmount().toFixed(2)}</strong></span>
                                    </li>
                                </ul>

                                <Button variant="primary">
                                    Go to checkout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CartPage;
