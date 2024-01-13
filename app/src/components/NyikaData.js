import "./NyikaStyles.css";


function NyikaData(){
    return(
    < div className="N-card">
        <div className="N-image">
       <img src={Props.image} alt="image/" /> 
    </div>
    <h4>{Props.heading} </h4>
    <p>{props.text}</p>
    </div>
    )
}

export default NyikaData;