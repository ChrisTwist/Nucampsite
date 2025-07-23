import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
    return (
        <Container>
            <SubHeader current='Sign Up' />
            
            <Row className="justify-content-center">
                <Col md="8" lg="6">
                    <Card className="shadow-lg">
                        <CardHeader className="bg-primary text-white text-center">
                            <h3 className="mb-0">
                                <i className="fa fa-user-plus"></i> Join NuCamp
                            </h3>
                            <p className="mb-0 mt-2">Create your account to start your camping adventure!</p>
                        </CardHeader>
                        <CardBody className="p-4">
                            <SignUpForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            {/* Benefits Section */}
            <Row className="mt-5">
                <Col>
                    <h4 className="text-center mb-4">Why Join NuCamp?</h4>
                </Col>
            </Row>
            <Row>
                <Col md="4" className="text-center mb-3">
                    <i className="fa fa-map-marker fa-3x text-primary mb-3"></i>
                    <h5>Discover Amazing Campsites</h5>
                    <p>Access our directory of beautiful camping locations across the country.</p>
                </Col>
                <Col md="4" className="text-center mb-3">
                    <i className="fa fa-star fa-3x text-primary mb-3"></i>
                    <h5>Leave Reviews</h5>
                    <p>Share your experiences and help other campers find the perfect spot.</p>
                </Col>
                <Col md="4" className="text-center mb-3">
                    <i className="fa fa-envelope fa-3x text-primary mb-3"></i>
                    <h5>Get Exclusive Updates</h5>
                    <p>Receive camping tips, special offers, and new campsite announcements.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpPage;
