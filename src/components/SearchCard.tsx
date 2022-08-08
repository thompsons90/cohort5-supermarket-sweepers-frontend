interface MeatData {
    name: string;
    store: string;
    type: string;
    option: string;
    pricePerLb: number;
}

export default function SearchCard(props: MeatData){

    



    return(
        <div className="search-card">
            <div className="search-card-element">Name: {props.name}</div>
            <div className="search-card-element">Store: {props.store}</div>
            <div className="search-card-element">Type: {props.type}</div>
            <div className="search-card-element">Price: ${props.pricePerLb}</div>
            <div className="search-card-element">Option: {props.option}</div>
        </div>
    )
}