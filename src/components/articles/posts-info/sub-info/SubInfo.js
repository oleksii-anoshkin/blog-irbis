import "./SubInfo.css";

export default function SubInfo({ parentClass, children }) {
  const componentClass = `${parentClass}__sub-info`;

  return <div className={componentClass}>{children}</div>;
}
