import React from 'react'
import {  Col, Row } from 'antd';

import {
    Container, 
} from './Homes'

import Login from '../Login';
import Banner from '../Banner';





const Home = () => {

    return (
        
        <Container>
            <Row>
                <Col lg={16}>
                    <Banner/>
                </Col>


                <Col lg={8} style={{margin:'0 auto'}}>
                    <Login />

                </Col>
            </Row>

        </Container>

    )
}

export default Home


