export const revalidate = 60; // 1 minute

import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { getOgImageUrl } from "@/lib/ogImage";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import { FilterBar } from "@/components/FilterBar";
import { FullWidthHeader } from "@/components/FullWidthHeader";
import { config } from "@/config";
import ScrollToTop from '@/components/ScrolToTop';

const { title, description } = config;

export const metadata: Metadata = {
    title: "Improve Your Technical Skills | Tutorials by FluentDev",
    description: "The FluentDev blog helps global tech professionals improve their skills and knowledge. Learn to explain blockchain concepts with clarity through immersive, story-driven tutorials.",
    openGraph: {
        title: "Improve Your Technical Skills | Tutorials by FluentDev",
        description: "The FluentDev blog helps global tech professionals improve their skills and knowledge. Learn to explain blockchain concepts with clarity through immersive, story-driven tutorials.",
        images: [getOgImageUrl("Improve Your Technical Skills | Tutorials by FluentDev")],
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
                <div className="container mx-auto max-w-6xl ">
                    <FilterBar active="latest" className="my-8" />
                    <BlogPostList posts={result.posts} />
                    <PostPagination
                        pagination={result.pagination}
                        className="my-16"
                        query={searchParams?.query}
                    />
                </div>
                <ScrollToTop />
            </main>
        </>
    );
}
