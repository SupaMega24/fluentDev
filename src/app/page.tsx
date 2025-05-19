export const revalidate = 60; // 1 minute

import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { getOgImageUrl } from "@/lib/ogImage";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import { FilterBar } from "../components/FilterBar";
import { FullWidthHeader } from "../components/FullWidthHeader";
import { config } from "../config";

const { title, description } = config;

export const metadata: Metadata = {
  title: `${title} - Blog`,
  description,
  openGraph: {
    title: `${title} - Blog`,
    description,
    images: [getOgImageUrl(title)],
  },
};

export default async function Page(
  props: {
    searchParams?: Promise<{ query: string; page: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const result = await wisp.getPosts({
    limit: 6,
    query: searchParams?.query,
    page,
  });

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-white border-b border-gray-800">
        <FullWidthHeader title={title} description={description} />
        <div className="text-center mt-6">
          <a
            href="https://fluentdev.vercel.app/courses"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Courses
          </a>
        </div>
        <div className="container mx-auto max-w-6xl ">
          <FilterBar active="latest" className="my-8" />
          <BlogPostList posts={result.posts} />
          <PostPagination
            pagination={result.pagination}
            className="my-16"
            query={searchParams?.query}
          />
        </div>
      </main>
    </>
  );
}
