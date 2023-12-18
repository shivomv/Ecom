import React from 'react'
import { Carousel, Container, Row, Col} from 'react-bootstrap';
import { slide1, slide2, slide3, banner1, banner2, banner3 } from '../../images'


const CarouselComponent = () => {
  return (
    <>
    <Container fluid>
<Container className="my-3 text-dark">
  <Row className="gy-3 gx-0 gx-md-4">
    {/* Slider */}
    <Col xs={12} md={7} className="px-0">
      <Carousel id="carouselExampleCaptions">
        <Carousel.Item>
          <img src={slide1} className="d-block w-100" alt="Slide 1" />
          <Carousel.Caption >
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} className="d-block w-100" alt="Slide 2" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} className="d-block w-100" alt="Slide 3" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>

    {/* Right of the slider banner */}
    <Col xs={12} md>
      <Row className="gy-3 gx-3">
        {/* Banner 1 */}
        <Col>
          <img src={banner1} className="img-fluid" alt=""/>
        </Col>
        <Col>
          <img src={banner2} className="img-fluid" alt="" />
        </Col>
        <Col md={12}>
          <img src={banner3} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
</Container>

    </>
  )
}

export default CarouselComponent;