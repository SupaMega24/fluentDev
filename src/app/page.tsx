import { Metadata } from "next";
import Link from "next/link";
import {
  CodeBracketIcon,
  BookOpenIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faTelegram,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "FluentDev | Clear Full-Stack & Web3 Tutorials",
  description:
    "FluentDev publishes practical full-stack and Web3 tutorials with real projects, clear explanations, and production-grade documentation.",
  openGraph: {
    title: "FluentDev | Clear Full-Stack & Web3 Tutorials",
    description:
      "Build real systems and understand how they work. Practical tutorials, architecture explanations, and clear documentation.",
    url: "https://fluentdev.vercel.app/",
    siteName: "FluentDev",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "FluentDev Logo",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-blue-600 dark:bg-gray-900">
        <h1 className="text-6xl text-white font-bold mb-6">
          Clear, Practical Full-Stack & Web3 Tutorials
        </h1>
        <p className="text-2xl font-semibold text-white dark:text-gray-200 mb-8">
          Build real systems. Understand how they work.
        </p>
        <p className="max-w-3xl text-xl text-white dark:text-gray-300 mb-10">
          FluentDev focuses on building real-world applications and explaining
          the architectural decisions behind them. Tutorials emphasize clarity,
          tradeoffs, and documentation quality across modern Web2 and Web3 stacks.
        </p>
      </section>

      {/* What You’ll Find */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50 dark:bg-gray-800">
        <h2 className="text-5xl font-semibold mb-12 text-blue-600">
          What You’ll Find on FluentDev
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
            <CodeBracketIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              End-to-end tutorials that build real applications using modern
              full-stack and Web3 technologies.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
            <BookOpenIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Clear documentation that explains APIs, data models, and system
              behavior in plain, precise terms.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
            <LightBulbIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Architecture decisions, tradeoffs, and common pitfalls explained
              so you understand not just what works, but why.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-gray-900">
        <h2 className="text-5xl font-semibold mb-10 text-blue-600">
          Tutorials & Guides
        </h2>

        <div className="max-w-4xl grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Full-Stack Project Tutorials
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Step-by-step builds using real SaaS-style patterns: authentication,
              APIs, databases, payments, and deployment.
            </p>
            <Link
              href="/courses"
              className="text-blue-600 hover:underline font-semibold"
            >
              Browse Tutorials →
            </Link>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Web3 & Systems Explainers
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Clear explanations of blockchain concepts, smart contracts, and
              distributed systems, grounded in real use cases.
            </p>
            <Link
              href="/blog"
              className="text-blue-600 hover:underline font-semibold"
            >
              Read Explain­ers →
            </Link>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-5xl font-bold mb-6 text-blue-600">
          Systems & Blockchain Glossary
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 mb-12">
          Concise, accurate definitions with plain-language explanations that
          make complex systems easier to reason about.
        </p>

        <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-blue-600">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">
            What is a Blockchain?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            A blockchain is a shared ledger where transactions are recorded in
            blocks and linked together using cryptography, making the data
            verifiable and tamper-resistant.
          </p>
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            To put it plainly: it’s a notebook everyone can read, but no one can
            secretly edit.
          </p>
          <Link
            href="/glossary/blockchain"
            className="text-blue-600 hover:underline font-medium"
          >
            Read the full explainer →
          </Link>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-4">Follow FluentDev</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Tutorials, system breakdowns, and lessons learned from building real
          projects.
        </p>

        <div className="flex justify-center space-x-12">
          <Link href="https://www.youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </Link>
          <Link href="https://t.me/fluentDev" target="_blank">
            <FontAwesomeIcon icon={faTelegram} size="3x" />
          </Link>
          <Link href="https://www.instagram.com/fluent_dev/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </Link>
          <Link href="https://www.patreon.com/c/fluentdev" target="_blank">
            <FontAwesomeIcon icon={faPatreon} size="3x" />
          </Link>
        </div>
      </section>
    </main>
  );
}
