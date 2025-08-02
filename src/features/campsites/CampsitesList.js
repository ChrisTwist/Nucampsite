import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = ({ setCampsiteId }) => {
    const campsites = useSelector(selectAllCampsites);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row>
            {campsites.map((campsite) => (
                <Col
                    sm="6"
                    md="6"
                    lg="6"
                    className="mb-3"
                    key={campsite.id}
                >
                    <CampsiteCard 
                        campsite={campsite} 
                        setCampsiteId={setCampsiteId}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;