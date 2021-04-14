import React from "react";
import {Row,Figure, Container,Jumbotron, Accordion, Button, Card } from "react-bootstrap";

import './resourceSection.css'




const GetStarted = () => {
  return (
    <>
      <Jumbotron className='getstarted-jumbo-container' fluid>
        <Container>
          <h1 className='resources-section-h1'>Welcome Members & RoboSub Teams</h1>

          <p className='resources-section-p'> 
            Here at <span className='accent-color'>RoboSub LA </span> we are passionate about Robotics and 
            we want to share what we know with our community of Robotic 
            enthusiast.
          </p>

          <h1 className='resources-section-h1' ><span className='robosub-accent-color'>RoboSub International Competition</span></h1>

          <h3 className='resources-section-h3'>What is RoboSub?</h3>
          <p className='resources-section-p'>
          RoboSub is an international student competition. Student teams from around the world design and build robotic submarines, otherwise known as Autonomous Underwater Vehicles (AUV). The behaviors demonstrated by these experimental AUVs mimics those of real-world systems, currently deployed around the world for underwater exploration, seafloor mapping, and sonar localization, amongst many others.
          </p>

          <h3 className='resources-section-h3'>The Competition</h3>
          <p className='resources-section-p'>Assemble your team and get busy designing, building and testing the sub-systems of your AUV. Now put it all together and demonstrate your vehicles autonomy by completing a series of tasks through a pre-defined mission.</p>

          <h3 className='resources-section-h3'>Rules and Task</h3>

          <Row id='figure-getstarted'>
            <Figure className='getstarted-figure'>
              <a className='' href='https://robonation.org/app/uploads/sites/4/2021/03/RoboSub-2021-Mission-and-Rules_V1.pdf'>
              <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://robonation.org/app/uploads/sites/4/2019/10/robosub-logo_vert.png"
              />
              <Figure.Caption className='getstarted-cap'>
                <br></br>
                <br></br>
                2021 Mission and Rules
              </Figure.Caption>
              </a>
            </Figure>

            <Figure className='getstarted-figure'>
              <a className='getstarted-a' href='https://robonation.org/app/uploads/sites/4/2021/03/Skills-Video_RoboSub21-Online_V1.pdf'> 
              <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://robonation.org/app/uploads/sites/4/2021/03/video-icon_RS21.svg"
              />
              <Figure.Caption className='getstarted-cap'>
                Skills Video
              </Figure.Caption>
              </a>
            </Figure>

            <Figure className='getstarted-figure'>
              <a className='getstarted-a' href='https://robonation.org/app/uploads/sites/4/2021/03/Technical-Design-Report_RoboSub21-Online_V1.pdf'>
              <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://robonation.org/app/uploads/sites/4/2021/03/tdr-icon_RS21.svg"
              />
              <Figure.Caption className='getstarted-cap'> 
                Technical Design Report
              </Figure.Caption>
              </a>
            </Figure>
          </Row>
          

        </Container>

        <Container>
          <h1 className='resources-section-h1' ><span className='accent-color'>RoboSub LA Team</span></h1>
          <p className='resources-section-p'>Our team is split up into two project teams, the student organization and the senior design team. The senior design team builds one vehicle, and the club members build a separate vehicle while being mentored by senior design members. Both vehicles are intended for use in the competition and strategies will be carefully considered based on the capabilities of both vehicles. Members have the opportunity to design advanced robotics systems and work on an interdisciplinary project to gain experience working with a team. Please see the progress tab for a better idea of what our members are working on and what tasks and projects are available to new members</p>
          
          <h3 className='resources-section-h3'>
            Team Breakdown Subteams:
          </h3>

          <Accordion >
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Frame and Hull
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body  className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Actuated Systems
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body  className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Power Distribution
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Controls
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Mission Planning
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='getstarted-card'>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Computer Vision
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body className='getstarted-card-p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
                  varius nulla, vitae ullamcorper tellus. Proin feugiat libero at mi
                  congue tincidunt. Nulla facilisi. Proin feugiat accumsan
                  sollicitudin. Quisque sed metus eget urna suscipit tristique.
                  Morbi a blandit tellus. Duis condimentum eros a ex hendrerit,
                  gravida pretium orci feugiat. Vestibulum a pharetra augue. Sed
                  vulputate elementum elit et laoreet. Mauris pulvinar scelerisque
                  est id feugiat. Nunc egestas lorem nec sapien sagittis, a mattis
                  mauris hendrerit. Nam sed dolor ut lorem euismod varius eget quis
                  tortor. Donec tempor scelerisque auctor. Sed quis velit nec felis
                  eleifend euismod eget vitae justo. Etiam placerat libero id libero
                  hendrerit, eget hendrerit dolor mollis. Duis vel lorem in ante
                  bibendum maximus nec nec orci.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        
        </Container>
      
      </Jumbotron>
      















     
    </>
  );
};

export default GetStarted;
