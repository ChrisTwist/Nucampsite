import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const CampsiteCard = (props) => {
  return (
    <Link to={`${props.campsite.id}`}>
      <Card>
        <CardImg
          width="100%"
          src={props.campsite.image}
          alt={props.campsite.name}
        />
        <CardImgOverlay>
          <CardTitle>{props.campsite.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link> 
  );
};

export default CampsiteCard;