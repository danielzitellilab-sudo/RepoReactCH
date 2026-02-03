import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Counter from './Counter';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Add ${quantity} units of ${item.title} to cart`);
  };

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow-lg border-0 product-detail-card">
            <Row className="g-0">
              <Col md={5}>
                <div className="position-relative h-100">
                  <Card.Img 
                    src={item.images[0]}
                    alt={item.title}
                    className="w-100 rounded-start"
                    style={{ 
                        height: '500px', 
                        objectFit: 'contain',     
                        objectPosition: 'center', 
                        backgroundColor: '#f8f9fa' 
                    }}
                />
                </div>
              </Col>

              <Col md={7}>
                <Card.Body className="p-5">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h1 className="display-5 fw-bold mb-2">{item.title}</h1>
                      <h6 className="text-muted mb-3">{item.brand}</h6>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-2">Description:</h5>
                    <p className="lead">{item.description}</p>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <strong>Stock: </strong> {item.stock} units
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-star-fill text-warning me-2"></i>
                        <strong>Rating: </strong> {item.rating}/5
                      </div>
                    </div>
                  </div>

                  <hr />

                  
                  <div className="d-flex flex-column gap-4 pb-4">
                    <div className="text-center">
                      <div className="h2 fw-bold text-success mb-1">
                        ${item.price}
                      </div>
                      <small className="text-muted">por unidad</small>
                    </div>

                    <div className="d-flex justify-content-center">
                      <Counter 
                        count={quantity}
                        onChange={setQuantity}
                        maxStock={item.stock}
                      />
                    </div>

                    {/*<div className="text-center">
                      <div className="h4 fw-bold text-dark mb-0">
                        Total: ${(item.price * quantity).toLocaleString()}
                      </div>
                    </div>*/}
                  </div>
                  <div className="d-grid">
                    <Button 
                      variant="success" 
                      size="lg" 
                      className="px-5 py-3 fw-bold fs-5 shadow-lg"
                      onClick={() => alert("todavia no agrega al carrito")}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Add to cart ({quantity})
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;