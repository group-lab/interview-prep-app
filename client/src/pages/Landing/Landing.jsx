import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import landingPicLeft from "../../assets/images/landing-page-left.jpeg";
import landingPicPrep from "../../assets/images/landingPic2.jpeg";

// const prepImg = {
//   backgroundImage: `url(${landingPicPrep})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center', 
// }

const Landing = () => {
    return (
      <section className="landing">
        <Row className='d-flex'>

          <Col md={6}>
            <img className='landing-pic1' src={landingPicLeft} alt="landing page pic1" />
          </Col>
          <Col md={6} className='landing-rightSide'>
            <Row>
              <Col>
                <Card className='card landing-card'>  
                  <Card.Header>Prep</Card.Header>
                  <Card.Img className='img' src={landingPicPrep}></Card.Img>
                </Card> 
              </Col>
              <Col>
                <Card className='card landing-card'>  
                  <Card.Header>Prep</Card.Header>
                  <Card.Img className='img' src={landingPicPrep}></Card.Img>
                </Card> 
              </Col>
              <Col>
                <Card className='card landing-card'>  
                  <Card.Header>Prep</Card.Header>
                  <Card.Img className='img' src={landingPicPrep}></Card.Img>
                </Card> 
              </Col>
            </Row>

            <Row>
              <Col>
                {/* <img src={landingPicPrep} alt="" style={{height: "auto"}}/>                 */}
              </Col>
            </Row>

         
            {/* <Row className='landing-equal-height'>
              <Col>
                <Card className='card landing-card'>  
                  <Card.Header>Prep</Card.Header>
                  <Card.Img className='img' src={landingPicPrep}></Card.Img>
                </Card>   
              </Col>           
            </Row>          

            <Row className='landing-equal-height'>
              <Col  className='d-flex justify-content-center'>
                <Card className='card landing-card landing-overlap1'>
                  <Card.Header>Set</Card.Header>
                  <Card.Img src={landingPicPrep}></Card.Img>
                </Card>                   
              </Col>
            </Row>  

            <Row className='landing-equal-height'>
              <Col  className='d-flex justify-content-end'>
                <Card className='card landing-card landing-overlap2'>
                  <Card.Header>Interview!</Card.Header>
                  <Card.Img src={landingPicPrep}></Card.Img>                               
                </Card>                                   
              </Col>             
            </Row>     */}
                  
          </Col>
        </Row>

        {/* <Row>
          <Col>
          s
          </Col>
        </Row> */}


        {/* <div id='img-btn-div'>
          <img className='img' src='/images/pic1.jpg' alt="people interviewing"></img>
          <div id='btn-div'>
            <Button className='btn' id='create-an-account-btn' variant="primary">Create an account</Button>
            <Button className='btn' id='login-btn'variant="primary">Login</Button>
          </div>
        </div>

        <div id='boxes-div'>

          <div id='box-1'>
            <p>Prep,</p>
          </div>

          <div id='box-quote'>
            <p>"This app helped me to smash my interview and get my dream job!"</p>
          </div>

          <div id='box-2'>
          <p>Set,</p>
          </div>

          <div id='box-3'>
          <p>Interview!</p>
          </div>

        </div> */}

        {/* <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/pic1.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card> */}

      </section>
    )
  }
  
  export default Landing;
