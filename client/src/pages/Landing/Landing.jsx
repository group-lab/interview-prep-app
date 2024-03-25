import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import landingSetPic from "../../assets/images/landing-set-pic.jpeg";
import landingPrepPic from "../../assets/images/landing-prep-pic.jpeg";
import landingIntervPic from "../../assets/images/landing-interv-pic.jpeg";

const Landing = () => {
    return (
      <section className="landing">
        <Row>
          <Col md={4} className='mb-4'>
            <Card className='card landing-card'>              
              <Card.Img className='img' src={landingPrepPic}></Card.Img>
              <Button className='landing-btn'>Questions Challenge</Button>
            </Card> 
          </Col>
          <Col md={4} className='mb-4'>
            <Card className='card landing-card'>          
              <Card.Img className='img' src={landingSetPic}></Card.Img>
              <Button className='landing-btn'>Job Search Tools</Button>
            </Card> 
          </Col>              
        
          <Col md={4} className='mb-4'>
            <Card className='card landing-card'>          
              <Card.Img className='img' src={landingIntervPic}></Card.Img>
              <Button className='landing-btn'>Interview Tips</Button>
            </Card>            
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className='card landing-cta'>                        
              <Button variant="dark" className='landing-btn '>Start Preparing!</Button>
            </Card>                        
          </Col>
        </Row>       
      </section>
    )
  }
  
  export default Landing;
