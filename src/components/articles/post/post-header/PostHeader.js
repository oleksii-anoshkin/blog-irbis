import "./PostHeader.css";

export default function PostHeader({ parentClass, children }) {
  const containerClass = "header";
  const componentClass = `${parentClass}__${containerClass}`;

  return <section className={componentClass}>{children}</section>;
}
