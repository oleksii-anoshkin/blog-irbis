import "./Menu.css";

export default function Menu({ parentClass, setIsMenuVisible, isMenuVisible }) {
  const componentClass = `${parentClass}__menu menu`;
  const closeClass = "close";
  const componentType = `button`;
  const menuLineClass = "menu__line";
  const menuLinePosition = ["top", "mid", "bot"];

  function handleClick() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <button
      type={componentType}
      className={
        isMenuVisible ? componentClass + " " + closeClass : componentClass
      }
      onClick={handleClick}>
      {menuLinePosition.map((pos) => (
        <span key={pos} className={`${menuLineClass} ${pos}`}></span>
      ))}
    </button>
  );
}
