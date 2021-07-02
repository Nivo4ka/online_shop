import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';
import BasketItem from '../../components/BasketItem/BasketItem';
import { Context } from "../../index";
import { useHistory } from 'react-router-dom'
import './basket.css'

const Basket = observer(() => {
    const { bouquet } = useContext(Context)
    const history = useHistory()
    const [show, setShow] = useState(false);

    const fullPrice = () => {
        let price = 0
        bouquet.basket.forEach(item => {
            console.log(item.price)
            price += item.price;
        })
        return price
    }

    return (
        <Container>
            {bouquet.basket.length
                ?
                <>
                    <h2 style={{ margin: '20px -15px' }}>Корзина</h2>
                    <Row className="d-flex justify-content-between">
                        <Col xs={8} style={{ paddingLeft: 0 }}>
                            {bouquet.basket.map((item, index) => {
                                return <BasketItem bouquetItem={item} index={index} />
                            })}
                        </Col>
                        <Col xs={4} style={{ paddingRight: 0 }}>
                            <Card style={{ width: '100%', marginBottom: 10, overflow: 'hidden', boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)' }}>
                                <Card.Body className="d-flex justify-content-between align-items-center flex-column ">
                                    <Card.Title as="h1" className="price-title">
                                        ИТОГО: <span className="price-text">{fullPrice()} ₽</span>
                                    </Card.Title>
                                    <h6>(без учета стоимости доставки)</h6>
                                    <Button className="submit-button" onClick={() => setShow(true)}>Оформить доставку</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </>
                :
                <Row className="d-flex justify-content-center" style={{ marginTop: '80px' }}>
                    <Col xs={6} style={{ paddingRight: 0 }}>
                        <Card style={{ width: '100%', marginBottom: 10, overflow: 'hidden', boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.15)' }}>
                            <Card.Body className="d-flex align-item-center flex-column">
                                <Card.Title>
                                    В корзине пока ничего нет
                                </Card.Title>
                                <Button className="btn-back" onClick={() => history.push('/')}>На главную</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            }

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <h4>Поздравляем!<br /> Доставка оформлена успешно</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        bouquet.setBasket([]);
                        history.push('/');
                        setShow(false)
                    }}>Подтвердить</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
})

export default Basket;