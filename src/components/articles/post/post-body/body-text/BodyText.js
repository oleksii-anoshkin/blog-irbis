import "./BodyText.css";

export default function BodyText({ parentClass, postData }) {
  const textClass = "body-text";
  const componentClass = `${parentClass}__${textClass}`;

  return (
    <p
      className={componentClass}
      dangerouslySetInnerHTML={{
        __html: postData?.body,
      }}></p>
  );
}
