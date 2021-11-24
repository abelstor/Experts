import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResultsList from '../components/ResultsList';

const SearchResults = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ResultsList />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchResults;
