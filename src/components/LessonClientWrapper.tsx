'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { wisp } from '@/lib/wisp';
import BlogModal from '@/components/BlogModal';
import type { GetPostResult } from "@wisp-cms/client";

export default function LessonClientWrapper({ lessonId }: { lessonId: string }) {
    const [showModal, setShowModal] = useState(false);
    const [blogPost, setBlogPost] = useState<GetPostResult<Record<string, any>>["post"]>(null);

    const handleOpenBlog = async (slug: string) => {
        const result = await wisp.getPost(slug);
        if (result?.post) {
            setBlogPost(result.post);
            setShowModal(true);
        } else {
            alert('Blog post not found.');
        }
    };

    return (
        <>
            <div className="text-center my-12">
                <button
                    onClick={() => handleOpenBlog(lessonId)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    📖 Open Reading Assignment
                </button>
            </div>

            {showModal && blogPost && (
                <BlogModal post={blogPost} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}
