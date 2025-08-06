"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-md">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* LEFT: Logo + Site Name */}
                    <div className="flex items-center gap-2">
                        <Link href="/home" className="flex items-center gap-2">
                            <Image src="/logo.png" alt="FluentDev Logo" width={32} height={32} />
                            <span className="text-3xl font-bold text-white hover:text-blue-500">fluentDev</span>
                        </Link>
                    </div>

                    {/* CENTER: Page Links */}
                    <ul className="hidden md:flex gap-6 text-xl text-white absolute left-1/2 transform -translate-x-1/2">
                        <li><Link href="/home" className="hover:underline hover:text-blue-500">Home</Link></li>
                        <li><Link href="/courses" className="hover:underline hover:text-blue-500">Courses</Link></li>
                        <li><Link href="/glossary" className="hover:underline hover:text-blue-500">Glossary</Link></li>
                        <li><Link href="/about" className="hover:underline hover:text-blue-500">About</Link></li>
                        <li><Link href="/contact" className="hover:underline hover:text-blue-500">Contact</Link></li>
                        <li><Link href="/" className="hover:underline hover:text-blue-500">Blog</Link></li>
                    </ul>

                    {/* RIGHT: Social Icons + Hamburger */}
                    <div className="hidden md:flex text-3xl gap-4 items-center">
                        <Link href="https://www.youtube.com/channel/UCOcS-HD2YMLvUgwsb8UAm-A" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-blue-500" />
                        </Link>
                        <Link href="https://bsky.app/profile/fluentdev1.bsky.social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faBluesky} className="text-white hover:text-blue-500" />
                        </Link>
                        <Link href="https://www.instagram.com/fluent_dev/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-blue-500" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white text-3xl md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
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
                                <Link href="/home" onClick={() => setIsOpen(false)} className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" onClick={() => setIsOpen(false)} className="hover:underline">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/glossary" onClick={() => setIsOpen(false)} className="hover:underline">
                                    Glossary
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
                            <li>
                                <Link href="/" className="hover:underline hover:text-blue-500">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};
