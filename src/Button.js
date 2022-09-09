import { Link } from "react-router-dom";

function Button() {
    return (
      <Link to='/calendar'>
        <button className="SignIn">Sign In</button>
      </Link>
    );
  }
  
  export default Button;