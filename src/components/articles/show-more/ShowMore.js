import "./ShowMore.css";

import { getPostsCount } from "../../firebase/Firebase";
import { useState, useEffect } from "react";

export default function ShowMore({
  parentClass,
  setTrendingPostsLimit,
  trendingPostsLimit,
  postsFilter,
  targetElementRef,
}) {
  const btnsClass = "btns";
  const componentClass = `${parentClass}__${btnsClass} ${btnsClass}`;
  const btnClass = `${btnsClass}__btn`;
  const moreBtnText = "Більше";
  const hideBtnText = "Приховати";
  const btnType = "button";
  const postsStap = 6;
  const postsStartValue = 6;
  const [postsNowValue, setPostsNowValue] = useState(null);

  useEffect(() => {
    let done = false;

    if (!done) {
      getPostsCount(postsFilter, setPostsNowValue);
    }

    return () => {
      done = true;
    };
  }, [postsFilter]);

  function showMore() {
    setTrendingPostsLimit(trendingPostsLimit + postsStap);
  }

  function showLess() {
    setTrendingPostsLimit(postsStartValue);

    targetElementRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={componentClass}>
      {postsNowValue > trendingPostsLimit && (
        <button className={btnClass} type={btnType} onClick={showMore}>
          {moreBtnText.toUpperCase()}
        </button>
      )}
      {trendingPostsLimit > postsStartValue && (
        <button className={btnClass} type={btnType} onClick={showLess}>
          {hideBtnText.toUpperCase()}
        </button>
      )}
    </div>
  );
}
