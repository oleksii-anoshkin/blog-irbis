import "../../posts-img/PostsImg.css";
import placeholder from "../../posts-img/placeholder.webp";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PostsImg({ parentClass, postData }) {
  const imgAlt = `picture of post`;
  const containerClass = `${parentClass}__post-img-box`;
  const imgClass = `${parentClass}__post-img`;

  const [imageSrc, setImageSrc] = useState(
    postData?.image.img_url || placeholder
  );

  const handleImageError = () => {
    setImageSrc(placeholder);
  };

  return (
    <div className={containerClass}>
      <LazyLoadImage
        className={imgClass}
        src={imageSrc}
        alt={imgAlt}
        placeholderSrc={placeholder}
        effect="blur"
        onError={handleImageError}
      />
    </div>
  );
}
