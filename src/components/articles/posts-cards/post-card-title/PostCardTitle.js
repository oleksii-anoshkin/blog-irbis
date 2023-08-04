import "./PostCardTitle.css";

export default function PostCardTitle({ parentClass, children }) {
  const titleClass = "title";
  const componentClass = `${parentClass}__${titleClass}`;

  return <h3 className={componentClass}>{children}</h3>;
}
