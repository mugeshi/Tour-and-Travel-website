import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.heroimg} />
     <div className="hero-text">
      <h1>{props.tittle}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>
        {props.buttonText}
        </a>
      </div>
      </div>
    </>
  );
}

export default Hero;
