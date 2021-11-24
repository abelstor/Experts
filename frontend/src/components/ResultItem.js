import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { GeoAlt, Briefcase } from 'react-bootstrap-icons';
import profile3 from '../assets/img/profile-3.jpeg';

const ResultItem = () => {
    return (
        <>
            <Stack gap={4} direction="horizontal" >
                <Image src={profile3} roundedCircle width="70px" height="70px"></Image>
                <div>
                    <h5>Liset Viviana Paternina</h5>

                    <Stack gap={4} direction="horizontal">
                        <GeoAlt />
                        <div>Manizales</div>
                    </Stack>
                    <Stack gap={4} direction="horizontal">
                        <Briefcase />
                        <div>Clases de Coach</div>
                    </Stack>
                </div>
            </Stack>
        </>
    );
}

export default ResultItem;