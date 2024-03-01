import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { DropDown } from '../../components';

// import data from '../../data/questions';
const categoryData = ['Javascript', 'SQL', 'CSS'];
const difficultyData = ['Easy', 'Hard', 'Advanced'];

const Questions = () => {
  return (
    <section className="questions">
      <Row className='justify-content-md-center g-5'>
        <Col md={7}>
         <h2>All Questions</h2>
         <div className='questions-filters'>
          <InputGroup className="mb-3 questions-search">
            <Form.Control
              placeholder="Find a question..."
              aria-label="Find a question"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>

          <DropDown title="Category" list={categoryData} />      
          <DropDown title="Difficulty" list={difficultyData} />                
         </div>

         <div className='questions-list'>         

          <Table responsive="md">
            <thead>
              <tr>                
                <th>Title</th>
                <th>Tags</th>
                <th>Difficulty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>                
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>               */}
            </tbody>
          </Table>
         </div>
        </Col>
        <Col md={3}>          
          additional filters
        </Col>        
      </Row>
    </section>
  )
}

export default Questions;