import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { 
  ProfileNav, 
  ProfileGraph,
} from '../../components';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Row className='justify-content-md-center g-5'>
        <Col md={5} lg={2}>
          <ProfileNav />
        </Col>
        <Col md={7} lg={5}>          
          <ProfileGraph />
        </Col>        
      </Row>
    </section>
  )
}

export default Dashboard;