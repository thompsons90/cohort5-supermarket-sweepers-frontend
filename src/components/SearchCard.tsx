interface MeatData {
    name: string;
    store: string;
    type: string;
    option: string;
    pricePerLb: number;
}
import { gracefulify } from 'graceful-fs';
import {Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem} from 'reactstrap';


export default function SearchCard(props: MeatData){

    



    return(
        <Card
        style={{
            backgroundColor: "#FEFFFF",
            listStyleType: "none",
            padding: "2rem",
            borderRadius: "20px",
            borderWidth: "2px",
            borderStyle: "solid"
        }}
        >

        <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
        </CardBody>

        <ListGroup style={{ listStyleType: "none", textTransform: "capitalize", marginTop: "1rem" }} flush>
            <ListGroupItem>Price: ${props.pricePerLb}</ListGroupItem>
            <ListGroupItem>Store: {props.store}</ListGroupItem>
            <ListGroupItem>Type: {props.type}</ListGroupItem>
            <ListGroupItem>Option: {props.option}</ListGroupItem>
        </ListGroup>
        </Card>
    )
}



{/* <div className="search-card">
<div className="search-card-element">Name: {props.name}</div>
<div className="search-card-element">Store: {props.store}</div>
<div className="search-card-element">Type: {props.type}</div>
<div className="search-card-element">Price: ${props.pricePerLb}</div>
<div className="search-card-element">Option: {props.option}</div>
</div> */}