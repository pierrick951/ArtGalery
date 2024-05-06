import { Link } from "react-router-dom";
import './Notfound.css';

export default function Notfound() {
  return (
    <div className="containerNotfind">
      <h1>
        <span>Page not found </span>
        <img src="https://media.tenor.com/fcJgxSR8Uf0AAAAM/missingno-pokemon.gif" alt="🔮" width="32" height="32" />
      </h1>
      <div>
        <Link to="/" className="NotfoundLink">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
