import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const CardGraph = ({labels, title}) => {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Questions',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 


  return (
    <Card className='card-graph'>      
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Body>
        
        <Pie data={data} className='card-graph-pie' />
          {/* <p>Motivational Messages</p>          
          <p>Total Questions Answered: 0</p>
          <p>Correct Answers: 0</p>
          <p>Incorrect Answers: 0</p>
          <p>Accuracy Rate: 0</p>
          <p>Time Spent: 0</p>
          <p>Average Time per Question: 0</p>
          <p>Quiz Completion Rate: 0</p>
          <p>Recent Activity: none</p>
          <p>Personal Best Score: 0</p>          
          <p>Average Score: 0</p>           */}
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