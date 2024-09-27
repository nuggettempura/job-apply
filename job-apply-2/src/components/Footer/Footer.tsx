import { Col, Container, Row } from "react-bootstrap"
import linkedIn from "../../assets/images/linkedin.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import email from "../../assets/images/email.svg"
import chat from "../../assets/images/chat.svg"
import locate from "../../assets/images/locate.svg"

function Footer() {
    return (
        <Container fluid style={{ backgroundColor: '#3c3f4a' }}>
            <Row className="d-flex justify-content-center align-items-center p-5 text-white" style={{ height: '25vh' }}>
                {/* Social Media Section */}
                <Col className="d-flex justify-content-center align-items-center" style={{ borderRight: "solid secondary 100px" }}>
                    {/* "Get Social" text and icons inline */}
                    <span className="text-white me-4">Get Social</span>

                    {/* Icons container */}
                    <div className="d-flex gap-3">
                        {/* LinkedIn Icon */}
                        <div className="d-flex justify-content-center align-items-center bg-secondary rounded-circle" style={{ width: '40px', height: '40px' }}>
                            <img src={linkedIn} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
                        </div>
                        {/* Twitter Icon */}
                        <div className="d-flex justify-content-center align-items-center bg-secondary rounded-circle" style={{ width: '40px', height: '40px' }}>
                            <img src={twitter} alt="Twitter" style={{ width: '20px', height: '20px' }} />
                        </div>
                        {/* Facebook Icon */}
                        <div className="d-flex justify-content-center align-items-center bg-secondary rounded-circle" style={{ width: '40px', height: '40px' }}>
                            <img src={facebook} alt="Facebook" style={{ width: '20px', height: '20px' }} />
                        </div>
                    </div>
                </Col>

                {/* Other Footer Sections */}
                <Col className="text-center">
                    <div className="mb-2">
                        <img src={email} alt="" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <h5 className="mb-0">EMAIL US</h5>
                    <p className="mb-0">info@volcanic.com</p>
                </Col>
                <Col className="text-center">
                    <div className="mb-2">
                        <img src={chat} alt="" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <h5 className="mb-0">GET IN TOUCH</h5>
                    <p className="mb-0">UK: 0161 217 1517</p>
                </Col>
                <Col className="text-center">
                    <div className="mb-2">
                        <img src={locate} alt="" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <h5 className="mb-0">FIND US</h5>
                    <p className="mb-0">Dale House, Stockport, SK1 1TB</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer