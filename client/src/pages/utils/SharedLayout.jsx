import { Outlet } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import Container from 'react-bootstrap/Container';

const SharedLayout = () => {
  return (
    <>
        <Navigation />
        <Container fluid className="content">
            {/* Content outlet for rendering routes */}
            <Outlet />
        </Container>
        <Footer />
    </>
  )
}

export default SharedLayout;