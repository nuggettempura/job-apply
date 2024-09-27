import { Col, Row } from 'react-bootstrap'
import latestInsight1 from '../../assets/images/latestInsight1.jpg'
import latestInsight2 from '../../assets/images/latestInsight2.jpg'
import latestInsight3 from '../../assets/images/latestInsight3.jpg'
import latestInsight4 from '../../assets/images/latestInsight4.jpg'

function LatestInsight() {
    return (
        <>
            <Row className='p-4 d-flex justify-content-center align-items-center'>
                <Col>
                    <h1 className='text-center font-regular'>Latest Insights</h1>
                </Col>
            </Row>
            <Row className='p-5 d-flex justify-content-center align-items-center h-50 mb-5'>
                <Col className='wrapper'>
                    <img src={latestInsight1} alt=""
                        className='imageOverlay'
                    />
                    <div className='content'>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quasi</p>
                    </div>
                </Col>
                <Col className='wrapper'>
                    <img src={latestInsight2} alt=""
                        className='imageOverlay'
                    />
                    <div className='content'>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quasi</p>
                    </div>
                </Col>
                <Col className='wrapper'>
                    <img src={latestInsight3} alt=""
                        className='imageOverlay'
                    />
                    <div className='content'>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quasi</p>
                    </div>
                </Col>
                <Col className='wrapper'>
                    <img src={latestInsight4} alt=""
                        className='imageOverlay'
                    />
                    <div className='content'>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quasi</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default LatestInsight