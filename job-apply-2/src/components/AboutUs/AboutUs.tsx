import { Container, Row, Col } from "react-bootstrap"
import coffee from "../../assets/images/coffee.jpg"

// const mediaBelowScreen = window.matchMedia('max-width: 768px')


// useEffect(() => {

// }, [])

function AboutUs() {
  return (
    <>
      <Container fluid className="bg-danger filter: brightness(0.5)" style={{
        height: "50vh", backgroundImage: `url(${coffee})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        filter: 'brightness(0.5)'
      }}>
        <Row className="h-100">
          {/* Column for the "About Us" heading */}
          <Col className="text-light font-regular d-flex flex-column justify-content-center align-items-center text-center ">
            <p className="h2">About Us</p>
            <p className=" font-light text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga officiis officia quidem qui non deserunt excepturi
              reprehenderit temporibus earum obcaecati, enim tenetur
              beatae similique eius neque voluptatum, minus cum
              possimus!
            </p>
          </Col>
        </Row>
      </Container>
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <Row>
          <p className="font-semibold fs-2 m-0">
            2,000+
          </p>
          <p className="font-regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet temporibus dolore?
          </p>
        </Row>
        <Row>
          <p className="font-semibold fs-2 m-0">
            90,000+
          </p>
          <p className="font-regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet temporibus dolore?
          </p>
        </Row>
        <Row>
          <p className="font-semibold fs-2 m-0">
            35
          </p>
          <p className="font-regular">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet temporibus dolore?
          </p>
        </Row>
      </div>
    </>
  )
}

export default AboutUs