import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const LoginPage = () => {
    return (
        <Container>
            <SubHeader current='Login' />
            
            <Row className="justify-content-center">
                <Col md="6" lg="4">
                    <Card className="shadow-lg">
                        <CardHeader className="bg-primary text-white text-center">
                            <h3 className="mb-0">
                                <i className="fa fa-sign-in"></i> Welcome Back
                            </h3>
                        </CardHeader>
                        <CardBody className="p-4 text-center">
                            <p className="lead">Login functionality coming soon!</p>
                            <p>
                                Don't have an account yet?{" "}
                                <a href="/signup" className="text-primary">
                                    Sign up here
                                </a>
                            </p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
