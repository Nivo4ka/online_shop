import React, { useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import Pions from '../../assets/images/pions.jpg'
import TrashIcon from '../../assets/images/trash.png'
import './basketItem.css'
import { observer } from 'mobx-react-lite';
import { Context } from "../../index";

const BasketItem = observer(({bouquetItem, index}) => {
    const { bouquet } = useContext(Context)
    return (
        <Card style={{ width: '100%', marginBottom: 10, overflow: 'hidden', boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)' }}>
            <Card.Body className="d-flex justify-content-between align-content-center">
                <div className="d-flex">
                    <div className="image">
                        <img src={process.env.REACT_APP_API_URL + bouquetItem.img} />
                    </div>
                    <div className="info">
                        <Card.Title className="m-t-10">{bouquetItem.name}</Card.Title>
                        <Card.Text className="price-text">{bouquetItem?.price} ₽</Card.Text>
                    </div>
                </div>
                <div className="icon-trash">
                    <img onClick={() => bouquet.setBasket(bouquet.basket.filter((item, i) => i !== index))} src={TrashIcon} />
                </div>
            </Card.Body>
        </Card>
    )
})

export default BasketItem