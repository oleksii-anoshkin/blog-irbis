import "./ThemeSwitch.css";

export default function ThemeSwitch({ parentClass, isLight, setIsLight }) {
  const componentClass = `${parentClass}__switch`;
  const textClass = `${parentClass}__switch-text`;
  const switchLabelText = "Світла / Темна тема";

  return (
    <div className={componentClass}>
      <p className={textClass}>{switchLabelText}</p>
      <div className="form-check form-switch">
        <input
          checked={!isLight}
          readOnly
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={() => setIsLight(!isLight)}
        />
      </div>
    </div>
  );
}
