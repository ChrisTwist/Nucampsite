import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'; 

const AnimatedDisplayCard = ({ item }) => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500}
    });

    // Handle case where item is undefined (still loading)
    if (!item) {
        return null; // or return a loading placeholder
    }
    
    const { image, name, description, id } = item;

    // Determine the appropriate link destination based on item type
    const getLinkDestination = () => {
        // Check if item has elevation property (indicates it's a campsite)
        if ('elevation' in item) {
            return `/directory/${id}`;
        }
        // For promotions and partners, link to about page for now
        return '/about';
    };

    return (
        <animated.div style={animatedStyle}>
            <Link to={getLinkDestination()} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card style={{ cursor: 'pointer' }}>
                    <CardImg src={image} alt={name}/>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </Link>
        </animated.div>
    )
}

export default AnimatedDisplayCard; 