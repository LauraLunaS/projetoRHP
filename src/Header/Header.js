import "./Header.css";
import logoHeader from "../image/logoHeader.svg";

function Header() {
  return (
    <div>
      <img src={logoHeader} className="Logosecund" alt=""></img>
      <hr className="line"></hr>
    </div>
  );
}

export default Header;
