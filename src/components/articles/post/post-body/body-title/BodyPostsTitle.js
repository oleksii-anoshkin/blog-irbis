import "./BodyPostsTitle.css";

export default function BodyPostsTitle({ parentClass, postData }) {
  const titleClass = "body-title";
  const componentClass = `${parentClass}__${titleClass}`;

  return <h2 className={componentClass}>{postData?.body_title}</h2>;
}
