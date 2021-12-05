import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { GeoAlt, Briefcase, Whatsapp } from 'react-bootstrap-icons';

const Profile = (props) => {
    const { expertData } = props;

    const goToWhatsApp = (contactLink) => {
        window.open(contactLink);
    }
    return (
        <>
            <Stack gap={2} className="align-items-center">
                <Image src={expertData.photoUrl} roundedCircle width="100px" height="100px"></Image>
                <h4>{expertData.name}</h4>
                <div>
                    <Stack gap={2} direction="horizontal">
                        <GeoAlt />
                        <div>{expertData.location}</div>
                    </Stack>

                    <Stack gap={2} direction="horizontal">
                        <Briefcase />
                        <div>{expertData.bio}</div>
                    </Stack>
                </div>
                <p className="text-center">{expertData.occupation}</p>

                <Whatsapp size={40} color="green" onClick={() => goToWhatsApp(expertData.contactLink)} />

            </Stack>
        </>
    );
}

export default Profile;