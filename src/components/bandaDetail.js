
import Card from 'react-bootstrap/Card';

function BandaDetail(props){
	return (
		<Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
		  <Card.Img
			src={props.image}
			alt={props.description}
		  />
		  <Card.Title>{props.name}</Card.Title>
		  <Card.Body>
			<Card.Text>{props.description}</Card.Text>
		  </Card.Body>
		</Card>
	  );


}
export default BandaDetail;