import React from 'react';
import { Button } from 'react-bootstrap';

function Counter({ count, onChange, maxStock = 99 }) {
  const handleDecrease = () => {
    if (count > 0) onChange(count - 1);
  };

  const handleIncrease = () => {
    if (count < maxStock) onChange(count + 1);
  };

  return (
    <div className="d-flex align-items-center gap-3">
      <Button 
        variant="outline-secondary" 
        size="sm" 
        onClick={handleDecrease}
        disabled={count === 0}
        className="rounded-circle"
        style={{ width: '40px', height: '40px' }}
      >
        -
      </Button>

      <span className="fs-4 fw-bold w-100 text-center" style={{ minWidth: '60px' }}>
        {count}
      </span>

      <Button 
        variant="outline-secondary" 
        size="sm" 
        onClick={handleIncrease}
        disabled={count >= maxStock}
        className="rounded-circle"
        style={{ width: '40px', height: '40px' }}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;