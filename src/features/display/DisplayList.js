import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), 
        selectFeaturedPromotion(), 
        selectFeaturedPartner()];
    return (
        <Row className="justify-content-center">
            {items.map((item, idx) => {
                return (
                    <Col md="4" className="mb-3" key={idx}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;