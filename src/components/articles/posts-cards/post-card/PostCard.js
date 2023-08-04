import "./PostCard.css";

export default function PostCard({ parentClass, children }) {
  const cardClass = "post-card";
  const componentClass = `${parentClass}__${cardClass}`;

  return <li className={componentClass}>{children}</li>;
}
