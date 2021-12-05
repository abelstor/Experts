import React, { useState, useEffect } from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import ResultItem from './ResultItem';
import Profile from './Profile';

import { searchExperts } from '../apis/crud';

const ResultsList = (props) => {

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        searchExperts(props.location, setSearchResults);
    }, [props.location]);

    return (
        <>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                <Row>
                    <Col sm={5}>
                        <ListGroup>
                            {searchResults.map((result, idx) => (
                                <ListGroup.Item
                                    key={idx}
                                    action href={"#" + idx}>
                                    <ResultItem expertData={result} />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={7}>
                        <Tab.Content>
                            {searchResults.map((result, idx) => (
                                <Tab.Pane
                                    key={idx}
                                    eventKey={"#" + idx}>
                                    <Profile expertData={result} />
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}

export default ResultsList;