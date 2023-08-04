import "./Footer.css";

import FooterRightSide from "./footer-right-side/FooterRightSide";
import FooterLeftSide from "./footer-left-side/FooterLeftSide";
import FooterLinks from "./footer-links/FooterLinks";

export default function Footer({ parentClass, isLight, setIsLight }) {
  const containerClass = "footer";
  const componentClass = `${parentClass}__${containerClass} ${containerClass}`;

  return (
    <footer className={componentClass}>
      <FooterLeftSide
        parentClass={containerClass}
        isLight={isLight}
        setIsLight={setIsLight}
      />
      <FooterRightSide parentClass={containerClass}>
        <FooterLinks parentClass={containerClass} isLight={isLight} />
      </FooterRightSide>
    </footer>
  );
}
