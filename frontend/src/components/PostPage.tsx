// import Container from "components/BlogContainer";
// import BlogHeader from "components/BlogHeader";
// import Layout from "components/BlogLayout";
// import PostBody from "components/PostBody";
import PostIngredients from "./PostIngredients";
// import PostHeader from "components/PostHeader";
// import PostPageHead from "components/PostPageHead";
// import PostTitle from "components/PostTitle";
// import SectionSeparator from "components/SectionSeparator";
import type { Post, Settings } from "../../utils/sanity.queries";
import { notFound } from "next/navigation";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  post: Post;
  settings: Settings;
}

const NO_POSTS: Post[] = [];

export default function PostPage(props: PostPageProps) {
  const { preview, loading, post, settings } = props;
  const { title } = settings || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <>
      {JSON.stringify(post)}
      <article>
        {post.recipe && <PostIngredients content={post.recipe} />}
      </article>
    </>
  );
}
