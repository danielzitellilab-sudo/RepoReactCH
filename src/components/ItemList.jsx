import Item from './Item'
import { Container, Row } from 'react-bootstrap';

function ItemList({items = [], categoryN = ''}){
	return(
        <Container fluid className="py-5 px-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">
                {categoryN 
                ? `${categoryN.charAt(0).toUpperCase() + categoryN.slice(1)}`
            :       'All products'
                }
                </h2>
                <small className="text-muted">({Array.isArray(items) ? items.length : 0} products)</small>
            </div>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {items.map(prod=> <Item product={prod} key={prod.id}/>)}
            </Row>
        </Container>
    )
}

export default ItemList