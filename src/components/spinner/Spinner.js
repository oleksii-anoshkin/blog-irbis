import "./Spinner.css";

export default function Spinner() {
  const spinerBoxClass = "spinner-border";
  const spinerInnerClass = "sr-only";
  const spinerRole = "status";

  return (
    <div className={spinerBoxClass} role={spinerRole}>
      <span className={spinerInnerClass}></span>
    </div>
  );
}
