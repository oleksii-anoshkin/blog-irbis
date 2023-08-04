import "./PostTag.css";

export default function PostTag({ parentClass, children }) {
  const componentClass = `${parentClass}__tag`;

  return children && <li className={componentClass}>{children}</li>;
}
