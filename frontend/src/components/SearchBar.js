import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SearchBar = () => {

    const redirectUrl = '/search-results';
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" >
                    ¿En dónde necesitas a tu <strong>Experto? </strong>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={redirectUrl}>Centro</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl}>Chía</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl}>Norte</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl}>Occidente</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl}>Soacha</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl}>Sur</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default SearchBar;