import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormSuccess = () => {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h1 style={{ textAlign: "center" }}>Pembayaran Berhasil!</h1>
          <p style={{ textAlign: "center" }}>
            Terima kasih telah melakukan pembayaran.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={handleHome}>
            Kembali Ke Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FormSuccess;
