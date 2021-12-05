import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResultsList from '../components/ResultsList';

const SearchResults = () => {

    const location = localStorage.getItem('location');
    return (
        <>
            <Container>
                <Row>
                    <h2>Localidad: {location}</h2>
                </Row>
                <Row>
                    <Col>
                        <ResultsList location={location} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchResults;