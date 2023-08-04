import "./PostsPageHeader.css";

export default function PostsPageHeader({ parentClass, children }) {
  const containerClass = "header";
  const componentClass = `${parentClass}-${containerClass}`;

  return <section className={componentClass}>{children}</section>;
}
