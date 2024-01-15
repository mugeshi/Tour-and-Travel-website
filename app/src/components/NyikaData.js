import "./NyikaStyles.css";


function NyikaData(Props){
    return(
    < div className="N-card">
        <div className="N-image">
       <img src={Props.image} alt="image/" /> 
    </div>
    <h4>{Props.heading} </h4>
    <p>{Props.text}</p>
    </div>
    )
}

export default NyikaData;