import "./PostInfo.css";
import AuthorImg from "./author-info/AuthorImg";
import AuthorInfo from "./author-info/AuthorInfo";
import PostDateAndTime from "./time-info/PostDateAndTime";

export default function PostInfo({ postData, parentClass, imgIsVisible }) {
  const infoClass = "info";
  const componentClass = `${parentClass}__${infoClass} ${infoClass}`;

  return (
    <div className={componentClass}>
      {imgIsVisible && (
        <AuthorImg postData={postData} parentClass={infoClass} />
      )}
      <AuthorInfo postData={postData} parentClass={infoClass} />
      <PostDateAndTime postData={postData} parentClass={infoClass} />
    </div>
  );
}
