function Card(props) {
    let special = "";
    switch (props.type) {
        case "dvd":
            special = `Size: ${props.size} MB`;
            break;
        case "furniture":
            special = `Dimension: ${props.length}x${props.width}x${props.height}`;
            break;
        case "books":
            special = `Weight: ${props.weight}KG`;
            break;
    }
    return (
        <div className="card">
            <input id={props.id} className="CheckBox delete-checkbox" type="checkbox"></input>
            <div className='WordHolder'>
                <p>{props.sku}</p>
                <p>{props.name}</p>
                <p>{props.price} $</p>
                <p>{special}</p>
            </div>
        </div>)
}
export default Card