import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import { GeoAlt, Briefcase, Whatsapp } from 'react-bootstrap-icons';
import profile3 from '../assets/img/profile-3.jpeg';

const Profile = () => {
    return (
        <>
            <Stack gap={2} className="align-items-center">
                <Image src={profile3} roundedCircle width="130px" height="100px"></Image>
                <h4>Liset Viviana Paternina</h4>
                <div>
                    <Stack gap={2} direction="horizontal">
                        <GeoAlt />
                        <div>Manizales</div>
                    </Stack>

                    <Stack gap={2} direction="horizontal">
                        <Briefcase />
                        <div>Clases de Coach</div>
                    </Stack>
                </div>
                <p className="text-center">¡Hola me encanta el couching, y tengo experiencia en diferentes campos como: Tecnología, Deportes y Artes</p>
                <Whatsapp size={40} color="green" />
            </Stack>
        </>
    );
}

export default Profile;