import "./Theme.css";

export default function Theme({ isLight, parentClass, children }) {
  const containerThemeClass = `${parentClass}__theme`;
  const lightThemeClass = "light";
  const darkThemeClass = "dark";

  const componentClass = `${containerThemeClass}_${
    isLight ? lightThemeClass : darkThemeClass
  }`;

  return <div className={componentClass}>{children}</div>;
}
