// components/BlogModal.tsx
'use client';
import { X } from 'lucide-react';
import { BlogContent } from './BlogContent';
import { useEffect } from 'react';

export default function BlogModal({ post, onClose }: { post: any; onClose: () => void }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-start p-4 pt-12 overflow-y-auto"
            onClick={onClose}
        >
            <div className="relative w-full max-w-5xl bg-white text-black rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:text-red-500"
                >
                    <X size={24} />
                </button>
                <BlogContent post={post} relatedPosts={[]} />
            </div>
        </div>
    );
}
