import "./RelatedPosts.css";

export default function RelatedPosts({ parentClass, children }) {
  const containerClass = "related-posts";
  const componentClass = `${parentClass}__${containerClass}`;

  return <section className={componentClass}>{children}</section>;
}
