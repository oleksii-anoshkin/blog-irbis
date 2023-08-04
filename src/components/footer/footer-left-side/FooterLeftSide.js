import "./FooterLeftSide.css";

import LogoFooter from "../../logo/logo-footer/LogoFooter";
import ThemeSwitch from "../switch/ThemeSwitch";

export default function FooterLeftSide({ parentClass, isLight, setIsLight }) {
  const containerClass = "left-side";
  const componentClass = `${parentClass}__${containerClass}`;

  return (
    <div className={componentClass}>
      <LogoFooter isLight={isLight} />
      <ThemeSwitch
        parentClass={parentClass}
        isLight={isLight}
        setIsLight={setIsLight}
      />
    </div>
  );
}
