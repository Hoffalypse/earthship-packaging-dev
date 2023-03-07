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
              <li>Contact Us</li>
              <Link to='/shippinginfo'>
              <li>Shipping</li>
              </Link>
              <Link to='/returns'>
              <li>Returns</li>
              </Link>
              <Link to='/privacy'>
              <li>Privacy</li>
              </Link>
              <li>Terms</li>
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
