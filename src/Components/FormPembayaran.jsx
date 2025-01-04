import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

const FormPembayaran = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice;
  const taxRate = 0.12; // Pajak 12%
  const totalafterpajak = totalPrice * (1 + taxRate);

  const [selectedCategoryBayar, setSelectedCategoryBayar] = useState("");
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    address: "",
    phone: "",
    dp: "",
    tenor: "",
  });

  const handleCategoryBayarChange = (event) => {
    setSelectedCategoryBayar(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    const confirmation = window.confirm(
      `Apakah anda yakin akan melakukan pembayaran ${selectedCategoryBayar}?`
    );
    if (confirmation) {
      navigate("/PaymentSuccess");
    }
  };

  const calculateInstallment = () => {
    const dp = parseFloat(buyerInfo.dp) || 0; // Mengambil DP
    const tenor = parseInt(buyerInfo.tenor) || 0; // Mengambil tenor

    if (tenor > 0) {
      const installment = (totalPrice - dp) / tenor;
      return installment.toLocaleString(); // Mengembalikan nilai angsuran dengan dua desimal
    }
    return 0;
  };

  const BayarAfterPajak = () => {
    const dp = parseFloat(buyerInfo.dp) || 0; // Mengambil DP
    const tenor = parseInt(buyerInfo.tenor) || 0; // Mengambil tenor

    if (tenor > 0) {
      const installment = (totalafterpajak - dp) / tenor;
      return installment.toLocaleString(); // Mengembalikan nilai angsuran dengan dua desimal
    }
    return 0;
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: '700px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Row className="text-center my-4">
          <Col>
            <h1>Form Pembayaran</h1>
            <p>Total Yang Harus Dibayar: Rp. {totalPrice.toLocaleString()}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="text-center">Metode Pembayaran</h5>
            <div className="d-flex justify-content-center">
              <Form.Check
                type="radio"
                label="Cash"
                value="cash"
                checked={selectedCategoryBayar === "cash"}
                onChange={handleCategoryBayarChange}
                className="mx-2"
              />
              <Form.Check
                type="radio"
                label="Kredit"
                value="kredit"
                checked={selectedCategoryBayar === "kredit"}
                onChange={handleCategoryBayarChange}
                className="mx-2"
              />
            </div>
          </Col>
        </Row>
        <Row className="mx-5">
          <Col>
            <Form onSubmit={handleSubmit} className="mt-4">
              {selectedCategoryBayar === "cash" && (
                <>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Masukkan Nama"
                      value={buyerInfo.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Masukkan Alamat"
                      value={buyerInfo.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Nomor HP</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Masukkan Nomor HP"
                      value={buyerInfo.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3">
                    Proses Pembayaran
                  </Button>
                </>
              )}

              {selectedCategoryBayar === "kredit" && (
                <>
                  <Form.Group controlId="formDP">
                    <Form.Label>Uang Muka (DP)</Form.Label>
                    <Form.Control
                      type="number"
                      name="dp"
                      placeholder="Masukkan DP"
                      value={buyerInfo.dp}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Label className="mt-3">Tenor Angsuran</Form.Label>
                  <div className="d-flex flex-wrap">
                    {[12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((tenor) => (
                      <Form.Check
                        key={tenor}
                        type="radio"
                        label={`${tenor} Bulan`}
                        name="tenor"
                        value={tenor}
                        checked={buyerInfo.tenor === tenor}
                        onChange={handleInputChange}
                        className="mx-2"
                      />
                    ))}
                  </div>

                  {buyerInfo.tenor && (
                    <>
                      <div className="mt-3">
                        <strong>Total Angsuran per Bulan Sebelum Pajak:</strong> {calculateInstallment()} IDR
                      </div>
                      <div>
                        <strong>Total Angsuran per Bulan Setelah Pajak 12%:</strong> {BayarAfterPajak()} IDR
                      </div>
                    </>
                  )}

                  <Button variant="primary" type="submit" className="mt-4">
                    Proses Pembayaran
                  </Button>
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default FormPembayaran;