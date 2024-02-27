import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const CardGraph = ({data, title}) => {

  return (
    <Card className='dashboard-card'>      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>
          <p>Motivational Messages</p>          
          <p>Total Questions Answered: 0</p>
          <p>Correct Answers: 0</p>
          <p>Time Spent: 0</p>
          <p>Recent Activity: none</p>
          <p>Personal Best Score: 0</p>
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

CardGraph.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default CardGraph;