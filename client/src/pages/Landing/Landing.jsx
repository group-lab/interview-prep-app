import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic8 from "/images/pic8.jpeg";

const Landing = () => {
    return (
      <div className="landing">

        <div id='img-btn-div'>
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

        </div>

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

      </div>
    )
  }
  
  export default Landing;
