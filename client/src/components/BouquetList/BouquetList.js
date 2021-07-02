import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import BouquetCard from '../Cards/Card'
import { Context } from '../../index';

const BouquetList = observer(() => {
    const { bouquet } = useContext(Context)

    return (
        <Row className="d-flex justify-content-between">
            {bouquet.bouquets.map(bouquet =>
                <BouquetCard bouquetItem={bouquet} key={bouquet.id} />
            )}
        </Row>
    );
});

export default BouquetList;