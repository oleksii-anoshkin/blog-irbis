import "./Main.css";

export default function Main({ paretnClass, children }) {
  const sectionClass = "main";
  const componentClass = `${paretnClass}__${sectionClass} ${sectionClass}`;

  return <main className={componentClass}>{children}</main>;
}
