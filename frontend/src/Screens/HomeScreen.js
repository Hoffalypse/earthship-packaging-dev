import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <div>
        <Image
          src="images/Earthship-with-text-white.png"
          alt="Earthship Packaging"
          style={{marginBottom:'200px'}}
        />
        <Meta />
        {!keyword ? (
          <ProductCarousel />
        ) : (
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
        )}

        <h1 style={{ marginTop:'50px'}}>Our Mission</h1>
        <div style={{display:'flex', justifyContent:'center'}}>
          <Image src="images/Earthship-black.png" alt="Earthship logo" style={{marginRight:'50px'}}></Image>
          <p style={{fontSize:'25px', fontWeight:'bold', maxWidth:'300px'}}> 
            Earthship Packaging was created with the goal of reducing plastic
            waste on a local level. We are a minority owned and operated
            business based in Denver, CO.
          </p>
        </div>
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
