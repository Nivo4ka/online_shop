import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { fetchOneBouquet } from "../http/bouquetAPI";
import { Context } from "../index";
import { observer } from 'mobx-react-lite';

const BouquetPage = observer(() => {
    const [bouquetItem, setBouquetItem] = useState({ info: [] })
    const { bouquet } = useContext(Context)
    const { id } = useParams()
    useEffect(() => {
        fetchOneBouquet(id).then(data => setBouquetItem(data))
    }, [])

    const handleAddToCart = (e) => {
        bouquet.setBasket([...bouquet.basket, bouquetItem])
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} style={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)', objectFit: 'cover' }} src={process.env.REACT_APP_API_URL + bouquetItem.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{bouquetItem.name}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)' }}
                    >
                        <h3>{bouquetItem.price} руб.</h3>
                        <Button onClick={() => handleAddToCart()} variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">

                <h1>Описание</h1>
                {bouquetItem.info.map((info, index) =>
                    <Row key={info.id} style={{ paddingLeft: 20, paddingTop: 10, paddingRight: 20 }}>
                        {info.title}  <div style={{ whiteSpace: 'pre-wrap' }}>{info.description.trim()}</div>
                    </Row>
                )}
            </Row>
        </Container>
    );
});

export default BouquetPage;