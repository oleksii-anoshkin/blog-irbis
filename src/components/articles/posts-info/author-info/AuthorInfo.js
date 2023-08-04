import "./AuthorInfo.css";

export default function AuthorInfo({ postData, parentClass }) {
  const componentClass = `${parentClass}__author-name-and-job`;
  const authorName = postData?.author.full_name || null;
  const authorPosition = postData?.author.job || null;

  return (
    (authorName || authorPosition) && (
      <p className={componentClass}>
        {authorName && <>{authorName}</>}
        {authorName && authorPosition && " | "}
        {authorPosition && <>{authorPosition}</>}
      </p>
    )
  );
}
