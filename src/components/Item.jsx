import React from 'react';
import { useNavigate } from 'react-router';
import { Card, Button } from 'react-bootstrap';

function Item({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 col-sm-6 mb-2">
      <Card className="h-100 shadow-sm product-card">
        <Card.Img
          variant="top"
          src={product.image_url}
          alt={product.name}
          className="product-image"
          style={{ height: '250px', objectFit: 'cover' }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-5 fw-bold text-truncate" title={product.name}>
            {product.name}
          </Card.Title>
          <Card.Title className="flex-grow-1 text-muted small" title={product.category.map((cat) => cat)}>
            Categories: {product.category.map((cat) => cat + ", ")}
          </Card.Title>
          <Card.Text className="flex-grow-1 text-muted small">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </Card.Text>

          {/* Precio centrado */}
          <div className="text-center my-2">
            <span
              className="fs-4 fw-bold"
              style={{
                color: '#e63946',
                background: '#fff5f5',
                border: '1.5px solid #e63946',
                borderRadius: '8px',
                padding: '4px 18px',
                letterSpacing: '0.04em',
                display: 'inline-block',
              }}
            >
              ${product.price}
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-end mt-auto">
            <div>
              <small className="text-success fw-bold">Stock: {product.stock}</small>
            </div>
            <Button variant="outline-primary" size="sm" onClick={() => navigate(`/item/${product.id}`)}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;