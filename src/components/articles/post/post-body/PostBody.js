import "./PostBody.css";

export default function PostBody({ parentClass, children }) {
  const containerClass = "body";
  const componentClass = `${parentClass}__${containerClass}`;

  return <section className={componentClass}>{children}</section>;
}
