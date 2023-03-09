import {
  getPost,
  getAllPostsSlugs,
  getSettings,
} from "../../../utils/sanity.client";
import { Post, Settings } from "../../../utils/sanity.queries";
import { GetStaticProps } from "next";

import PostPage from "../../components/PostPage";

interface PageProps {
  post: Post;
  settings?: Settings;
  preview: boolean;
  token: string | null;
}

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

export default function ProjectSlugRoute(props: PageProps) {
  const { post, settings } = props;
  return <PostPage post={post} settings={settings} />;
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx;

  const token = previewData.token;

  const [settings, { post }] = await Promise.all([
    getSettings(),
    getPost(params.slug, token),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();
  return {
    paths: slugs?.map(({ slug }) => `/posts/${slug}`) || [],
    fallback: true,
  };
};
