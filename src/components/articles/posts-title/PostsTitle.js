import "./PostsTitle.css";

export default function PostsTitle({ parentClass, postData }) {
  const titleClass = "title";
  const componentClass = `${parentClass}__${titleClass}`;

  return <h1 className={componentClass}>{postData?.title}</h1>;
}
