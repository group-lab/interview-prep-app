import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ProfileImg from '../ProfileImg/ProfileImg';

const ProfileNav = () => {
  return (
      <Card className='profile-nav'>
        <ProfileImg profileSize='profile-nav-image' />
        <Card.Body>
          <Card.Title>Hello, user name</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Link to='/dashboard'>My stats</Link>                  
            </ListGroup.Item>
            {/* show when user has started any */}
            <ListGroup.Item>
              <Link to='/dashboard/interview'>Resume inteview</Link>                  
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/dashboard/questions'>My questions</Link>                  
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/dashboard/settings'>Settings</Link>                   
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/help'>Feedback/Help</Link>                   
            </ListGroup.Item>
            <ListGroup.Item>
            <Link to='/'>Logout</Link>                  
            </ListGroup.Item>
          </ListGroup>            
        </Card.Body>
      </Card>
  )
}

export default ProfileNav;