import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      
      <p>© Interview Prep  / All rights reserved</p>

      <div className="footer-contact">
        <Link className='contact-about' to='/about' >About</Link>
        <Link className='contact-form' to='/contact' >Contact</Link>
      </div>    

    </footer>
  )
}

export default Footer;