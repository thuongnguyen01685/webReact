import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

const HomePage = () => {
  // Dữ liệu mẫu tin tức và sản phẩm hot
  const news = [
    { id: 1, title: "Tin tức 1", content: "Nội dung tin tức 1" },
    { id: 2, title: "Tin tức 2", content: "Nội dung tin tức 2" },
    { id: 3, title: "Tin tức 3", content: "Nội dung tin tức 3" },
    { id: 4, title: "Tin tức 4", content: "Nội dung tin tức 4" },
    { id: 5, title: "Tin tức 5", content: "Nội dung tin tức 5" },
  ];

  const hotProducts = [
    { id: 1, name: "Sản phẩm hot 1", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Sản phẩm hot 2", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Sản phẩm hot 3", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div>
      <Container>
        {/* Tin tức section */}
        <Row>
          <Col md={8}>
            <section className='py-5'>
              <h2 className='mb-4'>Tin tức lớn</h2>
              <Card>
                <Card.Body>
                  <img
                    className='d-block w-100'
                    src='https://via.placeholder.com/800x400'
                    alt='Second slide'
                  />
                  <Card.Title>{news[0].title}</Card.Title>
                  <Card.Text>{news[0].content}</Card.Text>
                </Card.Body>
              </Card>
            </section>
          </Col>
          <Col md={4}>
            <section className='py-5'>
              <h2 className='mb-4'>Tin tức nhỏ</h2>
              {news.slice(1, 5).map((item) => (
                <Card key={item.id} className='mb-3'>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </section>
          </Col>
        </Row>

        {/* Sản phẩm hot section */}
        <Row>
          <Col md={12}>
            <section className='py-5 bg-light'>
              <h2 className='mb-4'>Sản phẩm hot</h2>
              <Row>
                {hotProducts.map((product) => (
                  <Col md={4} key={product.id}>
                    <Card>
                      <Card.Img variant='top' src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          </Col>
        </Row>

        {/* Carousel ảnh section */}
        <Row>
          <Col md={12}>
            <section className='py-5'>
              <h2 className='mb-4'>Carousel ảnh</h2>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://via.placeholder.com/800x400'
                    alt='First slide'
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://via.placeholder.com/800x400'
                    alt='Second slide'
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='https://via.placeholder.com/800x400'
                    alt='Third slide'
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
