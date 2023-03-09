import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer>
        <div style={{ background: "#f0f5fa" }}>
          <Container>
            <Row >
              <Col md={6} style={{display:'flex', justifyContent:'center'}}>
          <Image src='images/footer.png' alt="Globe"style={{maxWidth:'180px' }}/>
          </Col>
          <Col md={6} style={{textAlign:'center'}}>
            <ul style={{listStyleType:'none', paddingTop:'30px'}}>
            <strong style={{fontSize:'25px'}}>Links</strong>
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
            </Col>
            </Row>
            <Row>
              <Col className="text-center py-3">
                Copyright &copy; Earthship Packaging 2023<br/>
                <p style={{fontStyle:'italic'}}>Powered by HoffTech Solutions </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
