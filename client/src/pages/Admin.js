import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFlower from "../components/modals/CreateFlower";
import CreateBouquet from "../components/modals/CreateBouquet";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [flowerVisible, setFlowerVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [bouquetVisible, setBouquetVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setFlowerVisible(true)}
            >
                Добавить цветы
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBouquetVisible(true)}
            >
                Добавить букет
            </Button>
            <CreateFlower show={flowerVisible} onHide={() => setFlowerVisible(false)}/>
            <CreateBouquet show={bouquetVisible} onHide={() => setBouquetVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;