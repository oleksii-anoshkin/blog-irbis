import "./PostsPagesBody.css";

export default function PostsPagesBody({ parentClass, children }) {
  const containerClass = "body";
  const componentClass = `${parentClass}-${containerClass}`;

  return <section className={componentClass}>{children}</section>;
}
