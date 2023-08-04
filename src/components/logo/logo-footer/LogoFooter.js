import "../Logo.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import logo from "../logo-irbis.webp";
import logoBlue from "../logo-irbis-blue.webp";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LogoFooter({ isLight }) {
  const parentClass = "footer";
  const logoAlt = "логотип компанії ИРБИС";
  const logoImgClass = "img";
  const containerClass = "logo";
  const componentClass = `${parentClass}__${containerClass} ${containerClass}`;
  const imgClass = `${containerClass}__${logoImgClass}`;

  const logoSrc = isLight ? logoBlue : logo;

  return (
    <div className={componentClass}>
      <LazyLoadImage
        className={imgClass}
        src={logoSrc}
        alt={logoAlt}
        height={52}
        effect="blur"
      />
    </div>
  );
}
