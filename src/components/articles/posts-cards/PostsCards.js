import "./PostsCards.css";

import { useEffect, useState } from "react";
import { getTrendingPosts, getLatestPosts } from "../../firebase/Firebase";
import { Link, useLocation, useParams } from "react-router-dom";

import PostCard from "./post-card/PostCard";
import PostCardImg from "./posts-card-img/PostCardImg";
import PostTags from "../posts-tags/PostTags";
import PostInfo from "../posts-info/PostInfo";
import PostCardTitle from "./post-card-title/PostCardTitle";
import PostsDescription from "../posts-description/PostsDescription";

export default function PostsCards({
  parentClass,
  postsFilter,
  cardLimit,
  isTrending,
}) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [posts, setPostsData] = useState([]);

  const path = pathname.replace(id, "");
  const cardsClass = "posts-cards";
  const linkClass = "link";
  const componentClass = `${parentClass}__${cardsClass} ${cardsClass}`;
  const moreLinkClass = `${cardsClass}__${linkClass} ${linkClass}`;
  const linkText = "Читати публікацію";

  useEffect(() => {
    let done = false;

    if (!done) {
      isTrending
        ? getTrendingPosts(setPostsData, postsFilter, cardLimit)
        : getLatestPosts(setPostsData, postsFilter, cardLimit);
    }

    return () => {
      done = true;
    };
  }, [postsFilter, cardLimit, isTrending]);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ul className={componentClass}>
      {posts.map((post) => (
        <PostCard key={post.id} parentClass={cardsClass}>
          <PostCardImg parentClass={cardsClass} postData={post.data} />
          <PostTags parentClass={cardsClass} postData={post.data} />
          <PostInfo
            parentClass={cardsClass}
            postData={post.data}
            imgIsVisible={false}
          />
          <PostCardTitle parentClass={cardsClass}>
            {post.data.title}
          </PostCardTitle>
          <PostsDescription parentClass={cardsClass} postData={post.data} />
          <Link
            className={moreLinkClass}
            to={path + post.id}
            onClick={handleClick}>
            {linkText}
          </Link>
        </PostCard>
      ))}
    </ul>
  );
}
