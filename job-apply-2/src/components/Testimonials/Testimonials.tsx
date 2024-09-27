import { Row, Col } from "react-bootstrap"
import testimonialPic from "../../assets/images/testimonialPic.jpg"
import workWithUs from "../../assets/images/workWithUs.jpg"

function Testimonials() {
    return (
        <Row className="d-flex flex-column p-5 h-100">
            <Col className="mb-5">
                <h1 className="text-center font-regular">Testimonials</h1>
            </Col>
            <Col className="text-center py-4 text-gray mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et neque, autem iusto enim nisi, voluptatibus voluptates fuga inventore natus atque animi rem eveniet minima, obcaecati dignissimos rerum officia assumenda expedita!
            </Col>
            <Col className="d-flex justify-content-center align-items-center mb-5">
                <img src={testimonialPic} alt="Testimonial Pic" style={{ height: '80px', width: '80px', borderRadius: '3rem' }} />
                <span className="p-3" style={{ color: "#FF9100" }}>
                    Dwayne M.Johson
                    <br />
                    Head of Sales, Capita EB
                </span>
            </Col>
            <Col className="p-5 mb-5">
                <Row>
                    <Col className='p-0 d-flex justify-content-around flex-column px-3 text-white' style={{ backgroundColor: '#FF9100' }}>
                        <div className="text-center font-bold">
                            <h1>Work for us</h1>
                        </div>
                        <div className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reiciendis laborum facere ullam, voluptatum accusantium! Nesciunt optio veritatis suscipit dolore autem inventore pariatur corporis eveniet magnam consequatur eum ducimus temporibus ab repudiandae fuga hic reiciendis, accusantium recusandae. Vitae, doloremque odio?
                        </div>
                        <div className="text-center">
                            <button style={{ border: 'none', padding: '1rem' }} className="fs-6">
                                Learn More
                            </button>
                        </div>
                    </Col>
                    <Col className="p-0">
                        <img src={workWithUs} alt="" className="object-fit-cover w-100" />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Testimonials