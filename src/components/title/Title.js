import "./Title.css";

export default function Title({ parentClass, children }) {
  const titleClass = "title";
  const componentClass = `${parentClass}__${titleClass} ${titleClass}`;

  return <h2 className={componentClass}>{children}</h2>;
}
