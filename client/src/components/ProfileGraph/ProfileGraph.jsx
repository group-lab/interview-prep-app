import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const ProfileGraph = () => {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const labels = [
    'Total Questions', 
    'Correct Answers', 
    'Incorrect Answers', 
    'Accuracy Rate', 
    'Time Spent', 
    'Avg. Time', 
    'Quiz Completion %', 
    'Recent Activity', 
    'Best Score',
    'Avg. Score'
  ]

  const data = {
    labels: labels,
    datasets: [
      {
        // label: 'Questions',
        data: [12, 19, 3, 5, 2, 3, 50, 45, 6, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 200, 0, 0.5)',
          'rgba(0, 200, 255, 0.5)',
          'rgba(0, 100, 100, 0.5)',
          'rgba(255, 100, 200, 0.5)',
        ],
        borderColor: [
          'rgb(255, 255, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    animation: {
      duration: 0
    },
    plugins: {
      tooltips: {
        enabled: false,
        mode: 'dataset'
      },
      legend: {
        position: 'right', 
        // offsetX: 10,        
        labels:{
          boxWidth: 10,          
          padding: 9,
          filter: ({index}, data)=>{                          
            // show only labels that are have data        
            return data.datasets[0].data[index]            
          }
        },       
      },
    },
  }

  return (
    <Card className='card-graph'>      
      <Card.Title>
        <h2 className='card-graph-title'>User Progress</h2>
      </Card.Title>
      <Card.Body className='card-graph-pie'>
        <Pie data={data} options={options}  />  
      </Card.Body>
    </Card>
  )
}

export default ProfileGraph;