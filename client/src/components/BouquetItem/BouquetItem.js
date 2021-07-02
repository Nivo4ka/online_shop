import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import star from '../../assets/star.png'
import {useHistory} from "react-router-dom"
import {BOUQUET_ROUTE} from "../../utils/consts";

const BouquetItem = ({bouquet}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(BOUQUET_ROUTE + '/' + bouquet.id)} style={{padding: 0}}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + bouquet?.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Bouquet...</div>
                    {/* <div className="d-flex align-items-center">
                        <div>{bouquet.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div> */}
                </div>
                <div>{bouquet.name}</div>
            </Card>
        </Col>
    );
};

export default BouquetItem;