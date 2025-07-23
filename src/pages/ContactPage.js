import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

// Functional component for the ContactPage
const ContactPage = () => {
    return (
        <Container>
            {/* SubHeader component for the page title */}
            <SubHeader current='Contact Us' />

            {/* First Row: Address and Contact Links */}
            <Row className='row-content align-items-center'>
                {/* Column for Our Address */}
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way
                        <br />
                        Seattle, WA 98001
                        <br />
                        U.S.A.
                    </address>
                </Col>

                {/* Column for Phone and Email Links */}
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        {/* Font Awesome phone icon */}
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        {/* Font Awesome envelope icon */}
                        <i className='fa fa-envelope-o' /> campsites@nucamp.co
                    </a>
                </Col>
            </Row>

            {/* Second Row: Feedback Section */}
            <Row className='row-content'>
                {/* Column for the Feedback Section Title */}
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr /> {/* Horizontal rule */}
                </Col>

                {/* Column for the ContactForm */}
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage; // Export the component for use in other parts of the application