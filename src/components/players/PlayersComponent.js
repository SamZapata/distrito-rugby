import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Players = () => {
    return (
        <div className="wrap-players">
            <Breadcrumb>
                <Breadcrumb.Item href="#">
                    <FontAwesomeIcon icon={faHome} />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Jugadores
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Lobos Rugby Club</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="text-center">Jugadores de Lobos Rugby Club</h1>
        </div>
    );
};

export default Players;