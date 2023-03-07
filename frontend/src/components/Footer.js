import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ background: "#f0f5fa" }}>
          <Container>
            
          
            <ul style={{listStyleType:'none', marginLeft:'20%', paddingTop:'30px'}}>
            <strong>Links</strong>
            <Link to='/contact' style={{textDecoration:'none'}}>
              <li >Contact Us</li>
              </Link>
              <Link to='/shippinginfo' style={{textDecoration:'none'}}>
              <li>Shipping</li>
              </Link>
              <Link to='/returns' style={{textDecoration:'none'}}>
              <li>Returns</li>
              </Link>
              <Link to='/privacy' style={{textDecoration:'none'}}>
              <li>Privacy</li>
              </Link>
              <Link to='/terms' style={{textDecoration:'none'}}>
              <li>Terms</li>
              </Link>
            </ul>
         
            <Row>
              <Col className="text-center py-3">
                Copyright &copy; Earthship Packaging
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
