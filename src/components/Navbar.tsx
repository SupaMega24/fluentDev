"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-md">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="FluentDev Logo" width={32} height={32} />
                        <span className="text-xl font-bold text-white">fluentDev</span>
                    </Link>

                    <button
                        className="text-white md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>

                    <ul className="hidden md:flex gap-6 text-xl">
                        <li><Link href="/courses" className="text-white hover:underline">Courses</Link></li>
                        <li><Link href="/about" className="text-white hover:underline">About</Link></li>
                        <li><Link href="/contact" className="text-white hover:underline">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Mobile menu - outside header */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center">
                    {/* Close (X) button in top-right */}
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
                    >
                        ✕
                    </button>

                    <nav>
                        <ul className="flex flex-col gap-8 text-3xl text-white text-center">
                            <li>
                                <Link href="/courses" onClick={() => setIsOpen(false)} className="hover:underline">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={() => setIsOpen(false)} className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};
