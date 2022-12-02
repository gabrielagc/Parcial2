

function BandaDetail(props){
	return (
		<Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
		  <Card.Img
			src={props.banda.image}
			alt={props.banda.description}
		  />
		  <Card.Title>{props.banda.name}</Card.Title>
		  <Card.Body>
			<Card.Text>{props.banda.description}</Card.Text>
		  </Card.Body>
		</Card>
	  );


}