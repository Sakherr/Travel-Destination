import { Link } from "react-router-dom";
import './Tour.css'

function Tour(props) {
  return (
    <Link id="link" to={`/city/${props.id}`}>
      <div className="my-tour">
      
        <img src={props.image} alt={props.name} />
        <h1>{props.name}</h1>
        <div className="overlay">
          <button>{props.name}</button>
        </div>
      </div>
    </Link>
  );
}

export default Tour;