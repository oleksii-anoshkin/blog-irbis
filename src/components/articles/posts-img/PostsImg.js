import "./PostsImg.css";
import placeholder from "./placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useState, useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PostsImg({ parentClass, postData }) {
  const imgAlt = `picture of post`;
  const containerClass = `${parentClass}__post-img-box`;
  const imgClass = `${parentClass}__post-img`;

  const imageSrc = postData?.image.img_url || placeholder;

  // const [pageWidth, setPageWidth] = useState(window.innerWidth);

  // const imgWidth = pageWidth * 0.69445;
  // const imgHeight = pageWidth * 0.39072;

  // useEffect(() => {
  //   const handleResize = () => {
  //     setPageWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={containerClass}>
      <LazyLoadImage
        className={imgClass}
        src={imageSrc}
        alt={imgAlt}
        // width={pageWidth < 1000 ? imgWidth : 1000}
        // height={pageWidth < 1000 ? imgHeight :}
        placeholderSrc={placeholder}
        effect="blur"
      />
    </div>
  );
}
