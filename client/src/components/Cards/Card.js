import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Button } from "react-bootstrap";
import { Context } from "../../index";
import {useHistory} from "react-router-dom"
import {BOUQUET_ROUTE} from "../../utils/consts";
import './card.css';

const BouquetCard = observer(({ bouquetItem }) => {
    const { bouquet } = useContext(Context)
    const history = useHistory()

    const handleAddToCart = (e) => {
        bouquet.setBasket([...bouquet.basket, bouquetItem])
    }

    return (
        <Card style={{ width: '15rem', marginBottom: '20px', boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)' }}>
            <Card.Img variant="top" style={{cursor: 'pointer', height: '300px', objectFit: 'cover'}} onClick={() => history.push(BOUQUET_ROUTE + '/' + bouquetItem.id)} src={process.env.REACT_APP_API_URL + bouquetItem?.img} />
            <Card.Body className="d-flex justify-content-between flex-column text-center">
                <Button className="add-to-cart" onClick={() => handleAddToCart()}>Добавить в корзину</Button>
                <Card.Title className="m-t-10">{bouquetItem?.name}</Card.Title>
                <Card.Text className="price-text">{bouquetItem?.price} ₽</Card.Text>
            </Card.Body>
        </Card>)
})

export default BouquetCard;