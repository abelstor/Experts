import React from 'react';
import { Container, Row, Col, Stack, Image } from 'react-bootstrap';
import Logo from '../assets/img/exp.png';
import SearchBar from './SearchBar';

const UserHome = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stack gap={2} className="align-items-center mt-2">
                            <Image src={Logo} width="280px" height="200px" />
                            <SearchBar />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default UserHome;