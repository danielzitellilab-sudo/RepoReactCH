import React from 'react';
import { useNavigate } from 'react-router';
import { Card, Button, Badge } from 'react-bootstrap';

function Item({ product }) {
    const navigate = useNavigate()

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <Card className="h-100 shadow-sm product-card">
        <div className="position-relative">
          <Card.Img 
            variant="top" 
            src={product.thumbnail} 
            alt={product.title}
            className="product-image"
            style={{ height: '250px', objectFit: 'cover' }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <Badge bg="danger" pill>${product.price}</Badge>
          </div>
        </div>
        
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-5 fw-bold text-truncate" title={product.title}>
            {product.title}
          </Card.Title>
          
          <Card.Text className="flex-grow-1 text-muted small">
            {product.description.length > 100 
              ? `${product.description.substring(0, 100)}...` 
              : product.description
            }
          </Card.Text>
          
          <div className="d-flex justify-content-between align-items-end mt-auto">
            <div>
              <small className="text-success fw-bold">
                Stock: {product.stock}
              </small>
              <br />
              <small className="text-muted">
                {product.brand}
              </small>
            </div>
            <Button variant="outline-primary" size="sm" onClick = {() => navigate (`/item/${product.id}`)}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;