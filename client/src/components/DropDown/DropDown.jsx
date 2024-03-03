import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropDown = ({title, list}) => {
  return (
    <DropdownButton id={`dropdown-${title}`} title={title}>
      {
        list.map((item, index) => {
          
          return (
            <Dropdown.Item href="/" key={index}>{item}</Dropdown.Item>
          )
        })
      }      
    </DropdownButton>
  )
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default DropDown;