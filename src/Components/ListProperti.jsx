import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXg4OCzs7PCwsLMzMywsLDj4+PX19e2tra4uLja2trf39/R0dG8vLzGxsa6urrU1NTK4/p6AAAB6UlEQVR4nO3b626iUBSAURFQLl7e/22HFstFLTJqgpuu9dOBxC+z5QA53WwAAAAAAAAAAAAAAAAAAAAAAAD4A/J3WDpiSpm+Q7l0xoRz9g67pTMmnLPkdQoXpXA9hS+FRigsts8pwhRun1zqt4EKnzpb4Se4Wzg7N2ZhXp3rud84ZGGeJs2NZrGb9f8YsTDfth9k9ZzEiIV1t/RXM84OWJgfuvuUesbZEQv7O7HjjDFdV+G95/iIhb9O6S6788MMWNg/TRXj46p9drgd24iF+TG796W/FpEsvUmMWLjJ632z4h/Gv7q8XURufoohC5uvXe6u70zLdnJv5jRo4R2Hy+imV5+HL/y5wKbdjc7VnEYvrA7tAlH2L3Gu5jR6YZG1S0bRBV5fT4MXnprPT1X3tHFJHK37sQtP3/9SVPUwsJnT4TGRC/PL5TM57UeB4zkNXDgezbFyeFjUwqnA5DR4pxO1cDJwOKdRC3/uvn9N7OY0aOGjwOYC27+3ilj4OLB//g9ZOLgJfTynEQtnBXZvACIW1sl+jqS9nkYsrPJZe4guR0cs/D8KP4HCaQo/wZ/Zi1Ecn9pOc4yzn+a5TVHduSEKX6FwUQrXULj2fd7r36u//r+3AAAAAAAAAAAAAAAAAAAAAAAA4F3+Acg6HdMv+TcEAAAAAElFTkSuQmCC";

const ukuran = {
  "30/60": {
    image: "https://media-id-live.propertypro.co.id/bm9uZS9ub25l/1080x650/4860f2397a94a9.jpg",
    price: "170000000",
  },
  "40/72": {
    image: "https://i.pinimg.com/originals/af/71/76/af71760108ababf53abe07ec25a2014b.png",
    price: "200000000",
  },
  "45/85": {
    image: "https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/17200410/harga-rumah-tipe-45.jpg",
    price: "250000000",
  },
};

const pondasi = {
  "batu kali": {
    image: "https://gocement.com/blog/wp-content/uploads/2023/08/photo-1494861895304-fb272971c078.jpeg",
    price: "4000000",
  },
  beton: {
    image: "https://housingestate.id/wp-content/uploads/2015/10/beton-precast.jpg",
    price: "8000000",
  },
};

const dinding = {
  batako: {
    image: "https://assets.gocement.com/fit-in/filters:format(webp)/product/46532/mediafiles/8Pq8sUIOwBJrLk1bWhk56y9ogf0Aj7fC8Mel9vMT.png",
    price: "6000000",
  },
  hebel: {
    image: "https://www.renos.id/blog/wp-content/uploads/2023/06/009d41236bf178f670fe587db15b1087.jpg",
    price: "10000000",
  },
  "bata merah": {
    image: "https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/966900125?file_name=182778147771427.jpg",
    price: "3000000",
  },
};

const lantai = {
  keramik: {
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/102/MTA-156049715/habitat_keramik_lantai_habitat_60x60_venato_-_motif_marble_carara_full01_kt0coew3.jpg",
    price: "5000000",
  },
  granit: {
    image: "https://img.lazcdn.com/g/ff/kf/S48a9859c103843a984a00ba58441d1a0F.jpg_720x720q80.jpg",
    price: "7000000",
  },
};

const kasoreng = {
  "kanal baja ringan": {
    image: "https://betonbesibaja.com/wp-content/uploads/2020/02/harga-baja-ringan-kanal-c-75-rangka-1.jpg",
    price: "9000000",
  },
  "kaso kayu": {
    image: "https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/965615107?file_name=930678149021933.jpg",
    price: "5000000",
  },
};

const genteng = {
  "metal roof": {
    image: "https://static.homeguide.com/assets/images/content/homeguide-metal-roofing-repair-replacing-screws-resealing-seams.jpg",
    price: "5000000",
  },
  spandek: {
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-72747116/no_brands_atap_spandek_metal_polos_per_meter_-thickness_0-25_mm-_full01_c2xrkuwi.jpg",
    price: "3000000",
  },
  "genteng tanah": {
    image: "https://asset.kompas.com/crops/ofjDCgl7RvCm25sGh8_T_ZWEvZc=/0x0:657x438/1200x800/data/photo/2023/06/28/649c2e892be2c.jpg",
    price: "4000000",
  },
  "genteng onduvila": {
    image: "https://mataharijaya.co.id/wp-content/uploads/2019/10/02500011_ONDUVILLA-1060X400-mm-HIJAU-3D.jpg",
    price: "8000000",
  },
  "genteng keramik": {
    image: "https://filebroker-cdn.lazada.co.id/kf/S4b124e0b35e84a36a4c08d70df63f1d3G.jpg",
    price: "6000000",
  },
};

const plafon = {
  PVC: {
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2560,h_1440/https://wijayamandiri.com/wp-content/uploads/2024/09/plafonpvc.jpg",
    price: "16000000",
  },
  GRC: {
    image: "https://awsimages.detik.net.id/community/media/visual/2023/08/17/plafon-rumah-1_169.jpeg",
    price: "9000000",
  },
  gipsum: {
    image: "https://asset.kompas.com/crops/ysiyLyMTd4aBmYSUAFo5emgQ_g4=/0x60:1000x727/1200x800/data/photo/2022/07/21/62d97ff94654c.jpg",
    price: "13000000",
  },
  triplek: {
    image: "https://www.griyasatria.co.id/wp-content/uploads/2023/12/Cara-Pasang-Plafon-Triplek.png",
    price: "6000000",
  },
};

function ListProperti() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryPondasi, setSelectedCategoryPondasi] = useState(null);
  const [selectedCategoryDinding, setSelectedCategoryDinding] = useState(null);
  const [selectedCategoryLantai, setSelectedCategoryLantai] = useState(null);
  const [selectedCategoryKasoreng, setSelectedCategoryKasoreng] = useState(null);
  const [selectedCategoryGenteng, setSelectedCategoryGenteng] = useState(null);
  const [selectedCategoryPlafon, setSelectedCategoryPlafon] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleCategoryPondasiChange = (event) => {
    setSelectedCategoryPondasi(event.target.value);
  };
  const handleCategoryDindingChange = (event) => {
    setSelectedCategoryDinding(event.target.value);
  };
  const handleCategoryLantaiChange = (event) => {
    setSelectedCategoryLantai(event.target.value);
  };
  const handleCategoryKasorengChange = (event) => {
    setSelectedCategoryKasoreng(event.target.value);
  };
  const handleCategoryGentengChange = (event) => {
    setSelectedCategoryGenteng(event.target.value);
  };
  const handleCategoryPlafonChange = (event) => {
    setSelectedCategoryPlafon(event.target.value);
  };

  const selectedUkuran = ukuran[selectedCategory] || { image: defaultImage, price: "0" };
  const selectedPondasi = pondasi[selectedCategoryPondasi] || { image: defaultImage, price: "0" };
  const selectedDinding = dinding[selectedCategoryDinding] || { image: defaultImage, price: "0" };
  const selectedLantai = lantai[selectedCategoryLantai] || { image: defaultImage, price: "0" };
  const selectedKasoreng = kasoreng[selectedCategoryKasoreng] || { image: defaultImage, price: "0" };
  const selectedGenteng = genteng[selectedCategoryGenteng] || { image: defaultImage, price: "0" };
  const selectedPlafon = plafon[selectedCategoryPlafon] || { image: defaultImage, price: "0" };

  const totalPrice =
    Number(selectedUkuran.price) +
    Number(selectedPondasi.price) +
    Number(selectedDinding.price) +
    Number(selectedLantai.price) +
    Number(selectedKasoreng.price) +
    Number(selectedGenteng.price) +
    Number(selectedPlafon.price);

  const handleLockCustomization = () => {
    const confirmation = window.confirm(
      "Apakah Anda yakin dengan kustomisasi ini? Jika ya, Anda akan diarahkan ke halaman pembayaran."
    );

    if (confirmation) {
      navigate("/Pembayaran", { state: { totalPrice } });
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

   return (
    <Container>
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <h1 style={{ textAlign: "center" }}>Simulasi Pembelian Rumah</h1>
        </Col>
      </Row>

      {/* Slider for each category */}
      <Slider {...settings}>
        {/* Ukuran Rumah */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedUkuran.image}
                    alt="Ukuran Rumah"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Ukuran Rumah</h5>
                  {Object.keys(ukuran).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategory === option}
                          onChange={handleCategoryChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedUkuran.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

         {/* Pondasi */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedPondasi.image}
                    alt="Pondasi"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Pondasi</h5>
                  {Object.keys(pondasi).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryPondasi === option}
                          onChange={handleCategoryPondasiChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedPondasi.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Dinding */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedDinding.image}
                    alt="Dinding"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Dinding</h5>
                  {Object.keys(dinding).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryDinding === option}
                          onChange={handleCategoryDindingChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedDinding.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

         {/* Lantai */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedLantai.image}
                    alt="Lantai"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Lantai</h5>
                  {Object.keys(lantai).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryLantai === option}
                          onChange={handleCategoryLantaiChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedLantai.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Kaso / Reng */}
        <div>
          <Card className="mb-4" style={{ objectFit: "cover", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedKasoreng.image}
                    alt="Kaso/Reng"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Kaso / Reng</h5>
                  {Object.keys(kasoreng).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryKasoreng === option}
                          onChange={handleCategoryKasorengChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedKasoreng.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Genteng */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedGenteng.image}
                    alt="Genteng"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                 <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Genteng</h5>
                  {Object.keys(genteng).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryGenteng === option}
                          onChange={handleCategoryGentengChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedGenteng.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        {/* Plafon */}
        <div>
          <Card className="mb-4" style={{ height: "400px", border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", marginTop: "20px" }}>
            <Card.Body>
              <Row>
                <Col xs={5} md={4} className="text-center">
                  <img
                    src={selectedPlafon.image}
                    alt="Plafon"
                    style={{
                      width: "100%",
                      height: "369px",
                      borderRadius: "10px",
                      transition: "transform 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Col>
                <Col xs={7} md={6}>
                  <h5 style={{ textTransform: "capitalize" }}>Plafon</h5>
                  {Object.keys(plafon).map((option) => (
                    <div key={option} style={{ marginBottom: "10px" }}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedCategoryPlafon === option}
                          onChange={handleCategoryPlafonChange}
                        />
                        <span style={{ marginLeft: "5px", textTransform: "capitalize" }}>{option}</span>
                      </label>
                    </div>
                  ))}
                </Col>
                <Col xs={12} md={2} className="text-center">
                  <h5>Rp. {selectedPlafon.price}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Slider>

      <Row style={{ marginTop: "15px" }}>
        <Col>
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Total Biaya: Rp. {totalPrice.toLocaleString()}
          </h2>
        </Col>
      </Row>

      <Row style={{ marginTop: "15px" }}>
        <Col className="text-center">
          <Button variant="primary" onClick={handleLockCustomization}>
            Kunci Kustomisasi
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ListProperti;