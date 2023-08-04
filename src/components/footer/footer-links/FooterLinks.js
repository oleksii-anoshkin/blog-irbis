import "./FooterLinks.css";

import facebookBlue from "./imgs/facebook-b.webp";
import facebook from "./imgs/facebook-w.webp";
import linkedin from "./imgs/linkedin-w.webp";
import linkedinBlue from "./imgs/linkedin-b.webp";
import irbisBlue from "./imgs/logo-irbis-blue.webp";
import irbis from "./imgs/logo-irbis.webp";

export default function FooterLinks({ parentClass, isLight }) {
  const componentClass = "links";
  const containerClass = `${parentClass}__${componentClass}`;
  const linkClass = `${parentClass}__link`;
  const imgClass = `${parentClass}__link-img`;
  const textClass = `${parentClass}__link-text`;
  const text = "Слідкуйте за нами:";

  const irbisSrc = isLight ? irbisBlue : irbis;
  const facebookSrc = isLight ? facebookBlue : facebook;
  const linkedinSrc = isLight ? linkedinBlue : linkedin;

  const irbisHref = "https://www.irbis.ua/industries/selskoe-hozyaystvo";
  const facebookHref = "https://www.facebook.com/mykola.novikov.54";
  const linkedinHref = "https://www.linkedin.com/company/td-irbis-jsc/";

  const rel = "noopener noreferrer nofollow";
  const target = "_blank";

  const links = [
    { id: "irbis", imgSrc: irbisSrc, href: irbisHref },
    { id: "facebook", imgSrc: facebookSrc, href: facebookHref },
    { id: "linkedin ", imgSrc: linkedinSrc, href: linkedinHref },
  ];

  return (
    <>
      <p className={textClass}>{text}</p>
      <ul className={containerClass}>
        {links.map((link) => (
          <li key={link.id} className={linkClass}>
            <a href={link.href} target={target} rel={rel}>
              <img className={imgClass} src={link.imgSrc} alt="link img" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
