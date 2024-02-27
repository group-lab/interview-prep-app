import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Profile } from '../../components';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Row>
        <Col>
          <Card className='dashboard-image'>
            <Profile />
            <Card.Body>
              <Card.Title>Hello, user name</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Resume inteview</ListGroup.Item>
                <ListGroup.Item>My own questions</ListGroup.Item>
                <ListGroup.Item>Profile/Settings</ListGroup.Item>
                <ListGroup.Item>Feedback/Help</ListGroup.Item>
                <ListGroup.Item>Logout</ListGroup.Item>
              </ListGroup>            
            </Card.Body>
          </Card>
        </Col>
        <Col>
          2
        </Col>
      </Row>
    </section>
  )
}

export default Dashboard;