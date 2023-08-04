import PostsCards from "../posts-cards/PostsCards";
import PostsPageHeader from "./posts-page-header/PostsPageHeader";
import PostsPagesBody from "./posts-pages-body/PostsPagesBody";
import Title from "../../title/Title";
import ShowMore from "../show-more/ShowMore";

import { useState, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function PostsPage({ postsFilter }) {
  const componentClass = "main__posts-pages";
  const parentClass = "posts-pages";
  const headerParentClass = `${parentClass}-header`;
  const bodyParentClass = `${parentClass}-body`;
  const latestPostsLimit = 3;
  const todayPostsText = "Нові публікації";
  const trendingPostsText = "Найкращі публікації";

  const [trendingPostsLimit, setTrendingPostsLimit] = useState(6);
  const targetElementRef = useRef(null);
  const { pathname } = useLocation();
  
  useMemo(() => setTrendingPostsLimit(6), [pathname]);

  return (
    <>
      <PostsPageHeader parentClass={`${componentClass} ${parentClass}`}>
        <Title parentClass={headerParentClass}>{todayPostsText}</Title>
        <PostsCards
          parentClass={headerParentClass}
          postsFilter={postsFilter}
          cardLimit={latestPostsLimit}
        />
        <div ref={targetElementRef}></div>
      </PostsPageHeader>
      <PostsPagesBody parentClass={`${componentClass} ${parentClass}`}>
        <Title parentClass={bodyParentClass}>{trendingPostsText}</Title>
        <PostsCards
          parentClass={bodyParentClass}
          postsFilter={postsFilter}
          cardLimit={trendingPostsLimit}
          isTrending={true}
        />
        <ShowMore
          parentClass={bodyParentClass}
          setTrendingPostsLimit={setTrendingPostsLimit}
          trendingPostsLimit={trendingPostsLimit}
          postsFilter={postsFilter}
          targetElementRef={targetElementRef}
        />
      </PostsPagesBody>
    </>
  );
}
