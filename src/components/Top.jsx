function Top(props){
    return(
        <div>
           
            <div id = "container">
            <h1 id ="title">{props.title}</h1>
            <div id = "button_container">
            <button onClick={props.func1}>{props.buttonname1}</button>
            <button onClick={props.func2}>{props.buttonname2}</button>
            </div>            
            </div>
            <hr></hr>

        </div>
    )
}
export default Top;