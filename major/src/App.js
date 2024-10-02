import React from 'react'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Navbar, Nav, Container ,Row,Col} from 'react-bootstrap'; 
const headcolor={
  color:'white',
  backgroundColor:'black',
  textAlign:'center'

}
const divi={
  backgroundColor:'black'
}
const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div style={divi}>
              <h1 style={headcolor}>LBS COLLEGE OF ENGINEERING</h1>
              <h1 style={headcolor}>KASARAGOD</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">LBSCEK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>

    </>
  );
}
export default App;

/*      
<nav className='navbar'>
  <Link to='/' className='link'>Home Page</Link>
  <Link to='/about' className='link'>About Page</Link>
  <Link to='/contact' className='link'>Contact Page</Link>
</nav>
*/