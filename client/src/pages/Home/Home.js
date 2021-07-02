import React, { useState, useEffect, useContext } from 'react';
import { Container, Carousel, Button, Row, Col, Card } from "react-bootstrap";
import CarouselImage1 from '../../assets/images/background.png'
import CarouselImage2 from '../../assets/images/background2.jpg'
import CarouselImage3 from '../../assets/images/background3.jpg'
import Pions from '../../assets/images/pions.jpg';
import BouquetCard from '../../components/Cards/Card';
import HoseIcon from '../../assets/images/hose.png'
import { observer } from "mobx-react-lite";
import ShopIcon from '../../assets/images/shop.png'
import TruckIcon from '../../assets/images/truck.png'
import FlowerIcon from '../../assets/images/flower.png'
import { fetchFlowers, fetchBouquets, fetchTypes } from "../../http/bouquetAPI";
import { useHistory } from 'react-router-dom';
import { Context } from "../../index";
import './home.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const Home = observer(() => {
    const [list, setList] = useState([])
    const { bouquet } = useContext(Context)
    const history = useHistory()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBouquets(null, null, null, 26)
            const filteredData = []
            data.rows.forEach(row => {
                if (getRandomInt(26) < 7 && filteredData.length < 4) {
                    filteredData.push(row);
                }
            })

            if (filteredData.length < 4) {
                data.rows.forEach(row => {
                    if (filteredData.length < 4) {
                        filteredData.push(row)
                    }
                    else return
                })
            }

            setList(filteredData)
        }
        fetchData();
        setInterval(() => fetchData(), 10000)
    }, [])

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImage3}
                        style={{ objectFit: 'cover' }}
                    />

                    <Carousel.Caption className="caption-3">
                        <div className="slide-title-3">Для цветов не нужен повод</div>
                        <p className="slide-text">Подари букет прямо сейчас!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImage1}
                        alt="First slide"
                        style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption className="caption-1">
                        <div className="slide-title">Всем именинникам скидка 25%</div>
                        <p className="slide-text">В день рождения на любой букет</p>
                        {/* <Button
                            className="btn btn-primary btn-text-uppercase"
                        >Купить сейчас</Button> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-4"
                        src={CarouselImage2}
                        alt="Second slide"
                        style={{ objectFit: 'cover' }}
                    />

                    <Carousel.Caption className="caption-2">
                        <h1 className="slide-title">ПИОНОМАНИЯ</h1>
                        <p className="slide-text">Самые лучшие цветы для ваших букетов</p>
                        <Button
                            className="btn btn-primary btn-text-uppercase"
                            onClick={() => {
                                bouquet.setSelectedFlower({ name: "Пионы", id: 2 })
                                history.push('/shop')
                            }}
                        >Купить сейчас</Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container
                className="d-flex justify-content-center align-items-center container-home"
                style={{ padding: 0 }}
            >
                <div className="section-title" style={{ marginTop: "40px" }}>
                    <h2>Лучшие предожения</h2>
                    <h4>Все девушки любят эти цветы</h4>
                    {/* <h6>(Я хз, что тут еще написать)</h6> */}
                </div>
                <Row className="best-offers d-flex justify-content-between" style={{ width: '100%' }}>
                    {list?.map(item => {
                        return (
                            <BouquetCard bouquetItem={item} />
                        )
                    })}
                </Row>
                <div className="section-title">
                    <h2 style={{ margin: 0 }}>Почему именно мы?</h2>
                </div>
                <div class="separator"></div>
                <Row className="best-offers">
                    <Card xs={3} style={{ width: '15rem', border: 'none' }} className="why">
                        <Card.Body className="d-flex justify-content-center flex-column text-center">
                            <div className="icon">
                                <img src={TruckIcon} />
                            </div>
                            <div className="title">Доставка в тот же день</div>
                        </Card.Body>
                    </Card>
                    <Card xs={3} style={{ width: '15rem', border: 'none' }} className="why">
                        <Card.Body className="d-flex justify-content-center flex-column text-center">
                            <div className="icon">
                                <img src={FlowerIcon} />
                            </div>
                            <div className="title">Большой выбор букетов</div>
                        </Card.Body>
                    </Card>
                    <Card xs={3} style={{ width: '15rem', border: 'none' }} className="why">
                        <Card.Body className="d-flex justify-content-center flex-column text-center">
                            <div className="icon">
                                <img src={ShopIcon} />
                            </div>
                            <div className="title">Магазин у вас под домом</div>
                        </Card.Body>
                    </Card>
                    <Card xs={3} style={{ width: '15rem', border: 'none' }} className="why">
                        <Card.Body className="d-flex flex-column text-center">
                            <div className="icon">
                                <img src={HoseIcon} />
                            </div>
                            <div className="title">Всегда свежие цветы</div>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>
        </>)
})

export default Home;