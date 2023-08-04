import noUserImg from "./no-user-image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./AuthorImg.css";

export default function AuthorImg({ parentClass, postData }) {
  const imgAlt = `picture of author ${postData?.author.full_name}`;
  const containerClass = `${parentClass}__author-img-box`;
  const imgClass = `${parentClass}__author-img`;

  const userImg = postData?.author.picture.pic_url ?? noUserImg;

  return (
    <div className={containerClass}>
      <LazyLoadImage
        className={imgClass}
        src={userImg}
        width={52}
        height={52}
        alt={imgAlt}
        placeholderSrc={noUserImg}
        effect="blur"
      />
    </div>
  );
}
