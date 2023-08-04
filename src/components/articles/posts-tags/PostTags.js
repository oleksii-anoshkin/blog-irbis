import PostTag from "./PostTag";
import "./PostTags.css";

export default function PostTags({ parentClass, postData }) {
  const componentClass = `${parentClass}__tags`;
  const tag = postData?.tag || " ";

  return (
    <ul className={componentClass}>
      <PostTag key={tag.toLowerCase()} parentClass={parentClass}>
        {initTagName(tag)}
      </PostTag>
    </ul>
  );
}

function initTagName(tag) {
  switch (tag) {
    case "bearings":
      return "Підшипники";

    case "filters":
      return "Фільтри";

    case "belts":
      return "Паси";

    default:
      return "Інше";
  }
}
