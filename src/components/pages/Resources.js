import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import Arduino from './resource-sections/Arduino'
import ComputerVision from './resource-sections/ComputerVision'
import ROS from './resource-sections/ROS'

const Resources = () => {
    return (
        <>
            <h1>Resources</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">

                        <Nav.Item>
                        <Nav.Link eventKey="arduino">Arduino</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="cv">Computer Vision</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="electrical">Electrical</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="github">Git/Github</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="linux">Linux</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="mechanical">Mechanical</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="ros">Ros</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="arduino">
                        <h1>Arduino</h1>
                        <Arduino />
                        </Tab.Pane>
                        <Tab.Pane eventKey="cv">
                        <h1>Computer Vision</h1>
                        <ComputerVision/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="electrical">
                        <h2>Even More Stuff</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="github">
                        <h2>Less Stuff</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="linux">
                        <h2>Less Stuff</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="mechanical">
                        <h2>Less Stuff</h2>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ros">
                        <h2>Robotic Operating System</h2>
                        <ROS/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Resources