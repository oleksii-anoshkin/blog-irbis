import "./Logo.css";
import logo from "./logo-irbis.webp";
import { Link } from "react-router-dom";

export default function Logo({ parentClass, handleClick }) {
  const logoAlt = "логотип компанії ИРБИС";
  const logoImgClass = "img";
  const linkClass = "link";
  const containerClass = "logo";
  const componentClass = `${parentClass}__${containerClass} ${containerClass}`;
  const textClass = `${containerClass}__${linkClass}`;
  const imgClass = `${containerClass}__${logoImgClass}`;

  return (
    <div className={componentClass}>
      <Link
        to="/"
        className={textClass}
        onClick={() => handleClick(containerClass)}>
        <img className={imgClass} src={logo} alt={logoAlt} />
      </Link>
    </div>
  );
}
