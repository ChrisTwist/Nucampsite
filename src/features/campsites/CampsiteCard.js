import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite, setCampsiteId }) => {
  // If setCampsiteId is provided, this is for the directory page
  if (setCampsiteId) {
    return (
      <Card 
        onClick={() => setCampsiteId(campsite.id)}
        style={{ cursor: 'pointer' }}
      >
        <CardImg
          width="100%"
          src={campsite.image}
          alt={campsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  }

  // Otherwise, this is for navigation to individual campsite pages
  return (
    <Link to={`${campsite.id}`}>
      <Card>
        <CardImg
          width="100%"
          src={campsite.image}
          alt={campsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link> 
  );
};

export default CampsiteCard;