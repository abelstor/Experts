import React from 'react';

const Menu = (props) => {
    return (
        <div>
            <ul>
                <li>Cedula: {props.cedula}</li>
                <li>Correo: {props.correo}</li>
                <li>Celular: {props.celular}</li>
            </ul>
        </div>
    );
}

export default Menu;
