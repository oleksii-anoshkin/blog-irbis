import "./HeaderLinks.css";
import { Link } from "react-router-dom";

export default function HeaderLinks({ parentClass, linksData, handleClick }) {
  const linkClass = "link";
  const filterClass = "filter";
  const itemsClass = `${parentClass}__${linkClass}s`;
  const itemClass = `${parentClass}__${linkClass}`;
  const currentClass = "current";

  return (
    <ul className={itemsClass}>
      {linksData.map((link) => (
        <li key={link.id} className={itemClass}>
          <Link
            key={link.id}
            to={link.path}
            className={
              link.isCurrent
                ? `${linkClass} ${currentClass} ${filterClass}`
                : `${linkClass} ${filterClass}`
            }
            onClick={() => handleClick(link.id)}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
