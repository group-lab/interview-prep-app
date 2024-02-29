import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
  ProfileNav,   
} from '../../components';

const Help = () => {
  return (
    <section className="help">
      <Row className='justify-content-md-center g-5'>
        <Col md={5} lg={2}>
          <ProfileNav />
        </Col>
        <Col md={7} lg={5}>          
          Help
        </Col>        
      </Row>
    </section>
  )
}

export default Help;