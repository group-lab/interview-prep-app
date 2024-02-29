import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Questions = () => {
  return (
    <section className="questions">
      <Row className='justify-content-md-center g-5'>
        <Col md={9}>
         <h2>All Questions</h2>
         <div className='questions-filters'>
          list        
         </div>
        </Col>
        <Col md={3}>          
          my questions
        </Col>        
      </Row>
    </section>
  )
}

export default Questions;