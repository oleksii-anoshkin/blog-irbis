import "./FooterRightSide.css";

export default function FooterRightSide({ parentClass, children }) {
  const containerClass = "right-side";
  const componentClass = `${parentClass}__${containerClass}`;

  return <div className={componentClass}>{children}</div>;
}
