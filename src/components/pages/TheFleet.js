import React from 'react'
import Footer from '../Footer'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../pages/fleet.css';
// import '../../../public/images/'

const TheFleet = () => {
    return(
        <div className='fleet-container'>
            {/* 2020-2021 */}
            <Jumbotron fluid className='jumbotron-container'>
                <h1 className='jumbotron-h1'>ROBOSUB 2020-2021 (Online-Competition)</h1>
                <h2 className='jumbotron-h2'>Rankings:</h2>
                <p className='jumbotron-p'>Overall: ~ </p>
                <p className='jumbotron-p'>Video: ~ </p>
                <p className='jumbotron-p'>Website: ~ </p>
                <p className='jumbotron-p'>Technical-Design Report: ~</p>
                <div className='button-container'>
                    <Button className='jumbotron-button' href='/'>Team Video</Button>
                    <Button className='jumbotron-button' href='/'>Design Report</Button> 
                </div>
                
                

            </Jumbotron>
            
            <CardDeck>
                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/lanturn.png'} />
                    <Card.Body>
                        <Card.Title>Lanturn 2019-2021</Card.Title>
                        <Card.Text>
                            Currently under construction...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/donphan2.jpg'} />
                    <Card.Body>
                        <Card.Title>Donphan 2019-2021</Card.Title>
                        <Card.Text>
                            Currently under construction...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
            </CardDeck>

            {/* 2019-2020 */}
            <Jumbotron fluid className='jumbotron-container'>
                <h1 className='jumbotron-h1'>ROBOSUB 2019-2020 (Online-Competition)</h1>
                <h2 className='jumbotron-h2'>Rankings:</h2>
                <p className='jumbotron-p'>Overall: 11th </p>
                <p className='jumbotron-p'>Video: 9th </p>
                <p className='jumbotron-p'>Website: 13th </p>
                <p className='jumbotron-p'>Technical-Design Report: 20th </p>
                <div className='button-container'>
                    <Button className='jumbotron-button' href='/'>Team Video</Button>
                    <Button className='jumbotron-button' href='/'>Design Report</Button> 
                </div>    

            </Jumbotron>
            
            <CardDeck>
                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/lanturn.png'}  />
                    <Card.Body>
                        <Card.Title>Lanturn 2019-2021</Card.Title>
                        <Card.Text>
                            Complications Due to COVID-19...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/donphan.jpg'}  />
                    <Card.Body>
                        <Card.Title>Donphan 2019-2021</Card.Title>
                        <Card.Text>
                        Complications Due to COVID-19...
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                
            </CardDeck>
            
            {/* 2018-2019 */}
            
            <Jumbotron fluid className='jumbotron-container'>
                <h1 className='jumbotron-h1'>ROBOSUB 2018-2019</h1>
                <h2 className='jumbotron-h2'>Ranked: 31st</h2>
                
                <div className='button-container'>
                    <Button className='jumbotron-button' href='/'>Team Video</Button>
                    <Button className='jumbotron-button' href='/'>Design Report</Button> 
                </div>    

            </Jumbotron>
            <CardDeck>
                
                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/gyarados.png'}  />
                    <Card.Body>
                        <Card.Title>Gyarados 2018-2019</Card.Title>
                        
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


                <Card border="info" >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/magikarp.png'}  />
                    <Card.Body>
                        <Card.Title>Magikarp 2018-2019</Card.Title>
                        
                    </Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

            </CardDeck>
            
            <Footer/>
        </div>
    )
}

export default TheFleet