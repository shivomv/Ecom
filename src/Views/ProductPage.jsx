import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const ProductPage = () => {
    const [selectedImage, setSelectedImage] = useState(1);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const smallImageURLs = [
        'https://images.unsplash.com/photo-1682695799561-033f55f75b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1696838770987-aa5cc609f57b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669385169163-946584657986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1701453031904-dbec6ef40984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1671718840234-37e7c6c5001c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
    ];

    const largeImageURL = smallImageURLs[selectedImage - 1];

    return (
        <Container className="py-3">
            <Card className='py-2'>
                <Row className='row-cols-1 row-cols-md-2'>
                    <Col>
                        <Container>
                            <Card className='p-1 mb-2' style={{ height: '400px' }}>
                                <img src={largeImageURL} alt="" className='img-fluid' style={{ width: '100%', height: '100%' }} />
                            </Card>
                            <Card className='p-1'>
                                <Row>
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <Col key={`image-${index}`} style={{ height: '60px' }}>
                                            <img
                                                src={smallImageURLs[index - 1]}
                                                alt='Product'
                                                className={`img-fluid ${selectedImage === index ? 'active' : ''}`}
                                                onClick={() => handleImageClick(index)}
                                                style={{ width: '100%', height: '100%' }}
                                            
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Card>
                        </Container>
                    </Col>
                    <Col md={6}>
                        <Container className='d-flex align-items-center justify-content-center'>
                            <Card className='border-0'>
                                <h3 className='mb-3'>Men's Shoes Fashion</h3>
                                <div className='rating'>
                                    {/* Replace this with your rating stars component */}
                                    <div className='stars'>
                                        <span className='fa fa-star checked'></span>
                                        <span className='fa fa-star checked'></span>
                                        <span className='fa fa-star checked'></span>
                                        <span className='fa fa-star'></span>
                                        <span className='fa fa-star'></span>
                                        <span className='review-no'> (41 reviews)</span>
                                    </div>
                                </div>
                                <p className='product-description pt-2'>
                                    Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.
                                </p>
                                <Card.Text className="text-success mb-3">In Stock</Card.Text>
                                <h4 className="price mb-3">Current Price: <span>Rs. 180</span></h4>
                                <p className="vote mb-3"></p>

                                <Form.Group className="mb-3">
                                    <div>
                                        <Form.Label className="mb-2 me-3">Sizes:</Form.Label>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="S"
                                            name="size"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="M"
                                            name="size"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="L"
                                            name="size"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="XL"
                                            name="size"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <div>
                                        <Form.Label className="mb-2 me-3">Colors:</Form.Label>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Orange"
                                            name="color"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Green"
                                            name="color"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Blue"
                                            name="color"
                                        />
                                    </div>
                                </Form.Group>

                                <div className="action">
                                    <Button variant="primary" className="me-2">Add to Cart</Button>
                                    <Button variant="danger"><span className="fa fa-heart"></span></Button>
                                </div>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default ProductPage;
