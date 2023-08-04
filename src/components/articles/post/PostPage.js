import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../../firebase/Firebase";
import { incrementPostViews } from "../../firebase/Firebase";

import PostHeader from "./post-header/PostHeader";
import BackArrow from "./back-arrow/BackArrow";
import PostsTitle from "../posts-title/PostsTitle";
import PostInfo from "../posts-info/PostInfo";
import PostsImg from "../posts-img/PostsImg";
import SubInfo from "../posts-info/sub-info/SubInfo";
import PostsDescription from "../posts-description/PostsDescription";
import PostTags from "../posts-tags/PostTags";
import PostBody from "./post-body/PostBody";
import BodyPostsTitle from "./post-body/body-title/BodyPostsTitle";
import BodyText from "./post-body/body-text/BodyText";
import RelatedPosts from "./related-posts/RelatedPosts";
import PostsCards from "../posts-cards/PostsCards";
import Title from "../../title/Title";

import "./PostPage.css";

export default function PostPage() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [post, setPost] = useState({});

  const homeFilter = "all";
  const parentClass = "main";
  const articleClass = "article";
  const containerClass = "post-page";
  const componentClass = `${parentClass}__${containerClass} ${containerClass}`;
  const articleBoxClass = `${containerClass}__${articleClass}`;
  const titleText = "Найкращі публікації";
  const cardLimit = 2;

  useEffect(() => {
    let done = false;

    if (!done) {
      getPost(id, setPost);
      incrementPostViews(id);
    }

    return () => {
      done = true;
    };
  }, [id]);

  const postData = post?.data ?? null;
  const postsFilter = pathname.replace(id, "").slice(1, -1) || homeFilter;

  return (
    <section className={componentClass}>
      <article className={articleBoxClass}>
        <PostHeader parentClass={containerClass}>
          <BackArrow parentClass={containerClass} />
          <PostsTitle parentClass={containerClass} postData={postData} />
          <PostInfo
            parentClass={containerClass}
            postData={postData}
            imgIsVisible={true}
          />
          <PostsImg parentClass={containerClass} postData={postData} />
          <SubInfo parentClass={containerClass}>
            <PostsDescription
              parentClass={containerClass}
              postData={postData}
            />
            <PostTags parentClass={containerClass} postData={postData} />
          </SubInfo>
        </PostHeader>
        <PostBody parentClass={containerClass}>
          <BodyPostsTitle parentClass={containerClass} postData={postData} />
          <BodyText parentClass={containerClass} postData={postData} />
        </PostBody>
      </article>
      <RelatedPosts parentClass={containerClass}>
        <Title parentClass={containerClass}>{titleText}</Title>
        <PostsCards
          parentClass={containerClass}
          postsFilter={postsFilter}
          cardLimit={cardLimit}
          isTrending={true}
        />
      </RelatedPosts>
    </section>
  );
}
