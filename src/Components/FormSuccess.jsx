import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

const FormSuccess = () => {
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
    </Container>
  );
};

export default FormSuccess;
