import "./Header.scss";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="meet logo" />
      </a>
    </header>
  );
}
