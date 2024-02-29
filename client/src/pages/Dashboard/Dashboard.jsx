import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
          <h3>Completed topics</h3>
          <ul>
            <li>
              topic 1
            </li>
            <li>
              topic 2
            </li>
          </ul>

          <h3>Achievements/Badges</h3>
          <ul>
            <li>
              achivement 1
            </li>
            <li>
              achivement 2
            </li>
          </ul>
        </Col>        
      </Row>
    </section>
  )
}

export default Dashboard;