import noUserImg from "./no-user-image.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getProfilePicUrl, getUserName } from "../../../firebase/Firebase-auth";

export default function UserImg({ parentClass, isSignIn }) {
  const userName = isSignIn ? getUserName() : "user";
  const userPic = isSignIn ? getProfilePicUrl() : noUserImg;

  const imgAlt = `picture of ${userName}`;
  const containerClass = `${parentClass}__user-img-box`;
  const imgClass = `${parentClass}__user-img`;

  return (
    <div className={containerClass}>
      <LazyLoadImage
        className={imgClass}
        src={userPic}
        width={36}
        height={36}
        alt={imgAlt}
        placeholderSrc={noUserImg}
        effect="blur"
      />
    </div>
  );
}
