import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { ButtonGroup, Button, Dropdown, DropdownButton } from "react-bootstrap";

const FlowerBar = observer(() => {
    const { bouquet } = useContext(Context)

    return (
        <DropdownButton id="dropdown-item-button" title={bouquet.selectedFlower?.name || 'Все цветы'}>
            <Dropdown.Item
                as="button"
                style={{ cursor: 'pointer', backgroundColor: !bouquet?.selectedFlower?.id ? '#847B9B' : 'white' }}
                className={`flower-btn ` + bouquet.selectedFlower === null ? "active" : ''}
                onClick={() => bouquet.setSelectedFlower(null)}
                active={!bouquet?.selectedFlower?.id}
            >
                Все цветы
            </Dropdown.Item>
            {bouquet.flowers.map((flower, index) =>
                <Dropdown.Item
                    as="button"
                    style={{ cursor: 'pointer', backgroundColor: bouquet.selectedFlower?.id === flower.id ? '#847B9B' : 'white' }}
                    key={flower.id}
                    className={`flower-btn ` + bouquet?.selectedFlower?.id && flower.id === bouquet?.selectedFlower?.id ? "active" : index && !bouquet?.selectedFlower?.id === 0 ? "active" : ''}
                    onClick={() => bouquet.setSelectedFlower(flower)}
                    active={flower.id === bouquet?.selectedFlower?.id}
                >
                    {flower.name}
                </Dropdown.Item>
            )}
        </DropdownButton>

    );
});

export default FlowerBar;