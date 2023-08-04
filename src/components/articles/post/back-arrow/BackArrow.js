import { Link, useLocation, useParams } from "react-router-dom";
import "./BackArrow.css";

export default function BackArrow({ parentClass }) {
  const { pathname } = useLocation();
  const { id } = useParams();

  const arrowClass = "arrow";
  const boxClass = "box";
  const linkClass = "link";
  const containerClass = `${parentClass}__${arrowClass}-${boxClass}`;
  const componentClass = `${parentClass}__${arrowClass}-${linkClass}`;
  const btnText = "Назад";

  return (
    <div className={containerClass}>
      <Link to={pathname.replace(id, "")} className={componentClass}>
        {btnText}
      </Link>
    </div>
  );
}
