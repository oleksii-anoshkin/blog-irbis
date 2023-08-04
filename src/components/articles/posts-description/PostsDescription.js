import "./PostsDescription.css";

export default function PostsDescription({ parentClass, postData }) {
  const componentClass = `${parentClass}__description`;

  return <p className={componentClass}>{postData?.description ?? null}</p>;
}
