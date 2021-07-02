import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './typeBar.css'

const TypeBar = observer(() => {
    const { bouquet } = useContext(Context)
    console.log(bouquet?.selectedType?.id)
    return (
        <ListGroup>
            <ListGroup.Item
                style={{ cursor: 'pointer' }}
                active={!bouquet.selectedType?.id}
                onClick={() => bouquet.setSelectedType(null)}
            >
                Все букеты
            </ListGroup.Item>
            {bouquet.types.map((type, index) =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === bouquet?.selectedType?.id}
                    onClick={() => bouquet.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;