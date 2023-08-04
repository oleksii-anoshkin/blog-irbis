import "./PostDateAndTime.css";

export default function PostDateAndTime({ postData, parentClass }) {
  const componentClass = `${parentClass}__time-and-date`;
  const readTime = postData?.read_time || null;

  const timestamp = postData?.timestamp.seconds * 1000 || Date.now();
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("uk-UA", options).format(date);

  return (
    (formattedDate || readTime) && (
      <p className={componentClass}>
        {formattedDate && <>{formattedDate}</>}
        {formattedDate && readTime && " | "}
        {readTime && <>{`${readTime} хвилин читання`}</>}
      </p>
    )
  );
}
