import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import data from '../../data/questions';

const Question = () => {

  const {id} = useParams();

  const result = data.easy.filter((item) => item.id === id)[0];

  const {id:qID, level, answer, question, hint} = result;

  return (
    <section className='question'>
      <Row>
        <Col>
          <div className='question-level'>
            <p>Difficulty</p>    
            <p>{level}</p>     
          </div>         
        </Col>
        <Col className='d-flex justify-content-center'>
          <div className='question-timer'>               
            <span>00:00</span>     
          </div>        
        </Col>
        <Col>
          <div className='question-options'>
            <p>Save <FontAwesomeIcon icon={faStar} /></p>
            <p>Get Hint <FontAwesomeIcon icon={faQuestion} /></p>
          </div>                
        </Col>
      </Row>
      <Row className='justify-content-center'>        
        <Col md={8}>
          <Card className='question-main'>
            <h2 className='question-title'>{question}</h2>
            <Card.Body className='question-card'>
              <ListGroup>
                  {
                    answer.map((item, index) => {                      
                      return (
                        <ListGroup.Item key={`${qID}-${index}`}>
                          <Button>
                            {item}
                          </Button>
                        </ListGroup.Item>            
                      )
                    })
                  }                         
              </ListGroup>
            </Card.Body>
          </Card>
          <Card.Footer className='text-center'>
            <Button variant="warning">Next Question</Button>
          </Card.Footer>        
        </Col>        
      </Row>
    </section>
  )
}

export default Question;