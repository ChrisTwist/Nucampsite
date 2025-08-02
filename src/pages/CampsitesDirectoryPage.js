import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../components/SubHeader';


const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = useSelector(selectCampsiteById(campsiteId));

    return (
        <Container> 
            <SubHeader current='Directory' />
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm="7" md="5">
                    {selectedCampsite ? (
                        <CampsiteDetail campsite={selectedCampsite} />
                    ) : (
                        <div className="m-1">
                            <h4>Select a Campsite</h4>
                            <p>Click on a campsite image to view details.</p>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;