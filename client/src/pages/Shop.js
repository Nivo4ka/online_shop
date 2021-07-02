import React, { useContext, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar/TypeBar";
import FlowerBar from "../components/FlowerBar/FlowerBar";
import BouquetList from "../components/BouquetList/BouquetList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import PagePagination from '../components/Pagination/Pagination';
import { fetchFlowers, fetchBouquets, fetchTypes } from "../http/bouquetAPI";

const Shop = observer(() => {
    const { bouquet } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => {
            bouquet.setTypes(data)
        })
        fetchFlowers().then(data => {
            bouquet.setFlowers(data)
        })
        fetchBouquets(null, null, bouquet.page, 12).then(data => {
            bouquet.setBouquets(data.rows)
            bouquet.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchBouquets(bouquet?.selectedType?.id || null, bouquet?.selectedFlower?.id || null, bouquet.page, 12).then(data => {
            bouquet.setBouquets(data.rows)
            bouquet.setTotalCount(data.count)
        })
    }, [bouquet.page, bouquet.selectedType, bouquet.selectedFlower])

    return (
        <Container>
            <Row className='mt-2 d-flex justify-content-end'>
                <Col style={{ paddingLeft: 0 }} md={9}><FlowerBar /></Col>
            </Row>
            <Row className="mt-2">
                <Col md={3} style={{ paddingLeft: 0 }}>
                    <TypeBar />
                </Col>
                <Col md={9} style={{ paddingRigth: 0 }}>
                    <BouquetList />
                    <PagePagination />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;