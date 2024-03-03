import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
  ProfileNav,   
} from '../../components';

const Favourites = () => {
  return (
    <section className="favourites">
      <Row className='justify-content-md-center g-5'>
        <Col md={5} lg={2}>
          <ProfileNav />
        </Col>
        <Col md={7} lg={5}>          
          List of favourites questions
        </Col>        
      </Row>
    </section>
  )
}

export default Favourites;