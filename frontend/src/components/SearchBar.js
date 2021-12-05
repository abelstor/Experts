import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SearchBar = () => {

    const setSearchedLocation = (selectedLocation) => {
        localStorage.setItem('location', selectedLocation);
    }

    const redirectUrl = '/search-results';
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" >
                    ¿En dónde necesitas a tu <strong>Experto? </strong>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('centro')} >Centro</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('chia')} >Chia</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('norte')} >Norte</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('occidente')} >Occidente</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('soacha')} >Soacha</Dropdown.Item>
                    <Dropdown.Item href={redirectUrl} onClick={() => setSearchedLocation('sur')} >Sur</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default SearchBar;