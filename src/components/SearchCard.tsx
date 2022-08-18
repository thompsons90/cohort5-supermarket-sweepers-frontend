import { gracefulify } from 'graceful-fs';
import {Card, CardBody, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

interface MeatData {
    name: string;
    store: string;
    type: string;
    option: string;
    pricePerLb: number;
}


export default function SearchCard(props: MeatData){

    return(
        <Card>
        <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
        </CardBody>

        <ListGroup flush>
            <ListGroupItem style={{textTransform: "capitalize"}}>Price: ${props.pricePerLb}</ListGroupItem>
            <ListGroupItem style={{textTransform: "capitalize"}}>Store: {props.store}</ListGroupItem>
            <ListGroupItem style={{textTransform: "capitalize"}}>Type: {props.type}</ListGroupItem>
            <ListGroupItem style={{textTransform: "capitalize"}}>Option: {props.option}</ListGroupItem>
        </ListGroup>
        </Card>
    )
}