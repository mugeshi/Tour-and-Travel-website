import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.heroimg} />
     
      <h1>{props.tittle}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>
        {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;
