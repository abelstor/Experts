import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { GeoAlt, Briefcase } from 'react-bootstrap-icons';

const ResultItem = (props) => {

    const { expertData } = props;

    return (
        <>
            <Stack gap={4} direction="horizontal" >
                <Image src={expertData.photoUrl} roundedCircle width="50px" height="50px"></Image>
                <div>
                    <h5>{expertData.name}</h5>

                    <Stack gap={4} direction="horizontal">
                        <GeoAlt />
                        <div>{expertData.location}</div>
                    </Stack>
                    <Stack gap={4} direction="horizontal">
                        <Briefcase />
                        <div>{expertData.occupation}</div>
                    </Stack>
                </div>
            </Stack>
        </>
    );
}

export default ResultItem;