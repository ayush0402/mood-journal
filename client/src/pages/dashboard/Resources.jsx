import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import blogging from '../../assets/blogging.svg';
import emergency_call from '../../assets/emergency_call.svg';
import support_group from '../../assets/support_group.svg';


const Resources = () => {
    return (
        <DashboardLayout>
            <Container className='resources text-center'>
                <Row className='shadow heading'>
                    <h2 className='text-center'>
                        If you or someone you know is in immediate danger because of thoughts of suicide, please call <span className='helpline-number'>9152987821</span> or your local emergency number immediately.
                    </h2>
                </Row>
                <Card className='helpline-links'>
                    <Row style={{margin: '20px'}}>
                        <Col className='emergency-call' onClick ={ () => { window.open('http://www.aasra.info/helpline.html')}} style={{ cursor: "pointer" }} xs={12} md={4}>
                            <Row>
                                <img src={emergency_call} alt="" />
                            </Row>
                            <Row>
                                <h5>Crysis Hotline(India)</h5>
                                <p>The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.</p>
                            </Row>
                        </Col>
                        <Col className='support-group' onClick ={ () => { window.open('https://themindclan.com/sharing_spaces/')}} style={{ cursor: "pointer" }} xs={12} md={4}>
                            <Row>
                                <img src={support_group} alt="" />
                            </Row>
                            <Row>
                                <h5>Find a support group</h5>
                                <p>Find an in-person or online support group through the Depressional and Bipolar Support Alliance.</p>
                            </Row>
                        </Col>
                        <Col className='resources-blogging'onClick ={ () => { window.open('https://natashatracy.com/topic/bipolar-blog/')}} style={{ cursor: "pointer" }} xs={12} md={4}>
                            <Row>
                                <img src={blogging} alt="" />
                            </Row>
                            <Row>
                                <h5>Read Blogs</h5>
                                <p>News, writing and other useful information from the app creators and guest posters.</p>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Row>
                            <h4><strong>Other Resources</strong></h4>
                        </Row>
                        <Container className='other-resources pt-5'>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h5 className="text-start">International crisis hotlines</h5>
                                </Col>
                                <Col xs={12} md={4}>
                                    <p className='text-start'>Crisis numbers for INTERNATIONAL users provided by suicide.org. Click this link for a directory of numbers in your country (Suicide.org). </p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Button className="global-theme-button" onClick={ () => {window.open('http://www.suicide.org/international-suicide-hotlines.html')}}>Visit Website</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={4}>
                                    <h5 className="text-start">Bipolar disorder information</h5>
                                </Col>
                                <Col xs={12} md={4}>
                                    <p className='text-start'>Click here for more information about Bipolar: diagnosis, symptoms, risk factors, and statistics. (Depression and Bipolar Support Alliance) </p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Button className="global-theme-button" onClick={ () => {window.open('https://www.dbsalliance.org/education/bipolar-disorder/')}}>Visit Website</Button>
                                </Col>
                            </Row>
                            <Row className='mb-5 p-1'>
                                <Col xs={12} md={4}>
                                    <h5 className="text-start">Online therapy</h5>
                                </Col>
                                <Col xs={12} md={4}>
                                    <p className='text-start'>Affordable, private online counseling. Anytime, anywhere. Talk with a licensed, professional therapist online. (BetterHelp, eMoods partner) </p>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Button className="global-theme-button" onClick={ () => {window.open('https://www.betterhelp.com/get-started/?go=true&transaction_id=102407124d401dea5cbaacc33b9dd2&utm_source=affiliate&utm_campaign=474&utm_medium=Desktop&utm_content=&utm_term=iw1&not_found=1&gor=start')}}>Visit Website</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Card>
            </Container>
        </DashboardLayout>
    )
}

export default Resources;
