import { Metadata } from "next";
//import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  UserGroupIcon,
  CodeBracketIcon,
  SparklesIcon,
  BookOpenIcon,
  LightBulbIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";


export const metadata: Metadata = {
  title: "FluentDev | English for Web3 Developers",
  description:
    "FluentDev helps global Web3 developers and professionals speak and write about blockchain with confidence. Learn grammar, vocabulary, and storytelling built for Web3.",

  openGraph: {
    title: "FluentDev – English for Web3 Developers",
    description:
      "Master English for blockchain and Web3. Learn to explain technical concepts clearly with lessons, glossaries, and immersive storytelling.",
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
      {/* Section 1: What is FluentDev? */}
      <section className="my-8 min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-gray-900">
        <h1 className="text-6xl font-bold mb-6 text-blue-600">
          English for Web3 Professionals
        </h1>
        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
          Learn Blockchain. Improve Your English. Advance Your Career.
        </p>

        <p className="max-w-3xl text-xl text-gray-700 dark:text-gray-300 mb-10">
          FluentDev helps global Web3 professionals speak and write with confidence through realistic lessons, immersive storytelling, and technical clarity.
          We combine essential blockchain knowledge with real-world English communication skills,
          empowering you to thrive in international blockchain teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
            <AcademicCapIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              A unique learning platform that merges blockchain education with
              English language training tailored for Web3 professionals.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
            <BookOpenIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Clear grammar lessons, blockchain vocabulary, and immersive stories
              that build both technical and communication confidence.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
            <SparklesIcon className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Practical, job-focused skills designed to help you grow your career
              in global blockchain teams and communities.
            </p>
          </div>
        </div>
      </section>


      {/* Section 2: Who is FluentDev For? */}
      <section className="mb-8 min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50 dark:bg-gray-800">
        <h2 className="text-5xl font-semibold mb-12 text-blue-600">Who is fluentDev for?</h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-5xl justify-center">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-sm mx-auto">
            <UserGroupIcon className="w-14 h-14 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Non-native Web3 Developers</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Improve your technical English to clearly explain smart contracts, DeFi protocols, and blockchain infrastructure in a Web3 context.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-sm mx-auto">
            <CodeBracketIcon className="w-14 h-14 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Blockchain Professionals</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              From DAO leads to product managers and marketing leads, build confidence communicating with global teams, investors, and communities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-sm mx-auto">
            <AcademicCapIcon className="w-14 h-14 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3">Educators & Hiring Managers</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Provide targeted English training with up-to-date Web3 curriculum designed specifically for technical teams and learners.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Courses Overview + CTA */}
      <section className="mb-4 min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-gray-900">
        <h2 className="text-5xl font-semibold mb-8 text-blue-600">Explore Our Courses</h2>
        <div className="max-w-4xl grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Practical Web3 English</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              Master English communication skills essential for Web3 developers, from explaining smart contracts to delivering technical demos and proposals.
            </p>
            <Link href="/courses" className="inline-block text-blue-600 hover:underline font-semibold">
              Browse Technical English Courses →
            </Link>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Grammar & Vocabulary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              Learn grammar structures and Web3 concepts in context, with scenario-based lessons and interactive practice.
            </p>
            <Link href="/courses" className="inline-block text-blue-600 hover:underline font-semibold">
              Explore English for Web3 Courses →
            </Link>
          </div>
        </div>
        <Link
          href="/courses"
          className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition"
        >
          View All of Our English for Web3 Courses
        </Link>
      </section>

      {/* Section 4: Glossary */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-5xl font-bold mb-6 text-blue-600">
          Blockchain Concepts Glossary
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 mb-12">
          More than just definitions. Our glossary makes complex blockchain terms clear and approachable.
          Each entry includes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <BookOpenIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Clear Definitions</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Concise, accurate explanations of essential blockchain concepts written for global learners.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <LightBulbIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Simple Terms</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Every entry is followed by an analogy in plain English, making abstract ideas easy to grasp.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <ArrowRightCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Deeper Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Links to full explainers let you dive deeper into terminology and explore how concepts work in practice.
            </p>
          </div>
        </div>
        {/* Sample Glossary Entry Preview */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 border border-blue-600">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">What is Blockchain?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
            A blockchain is a shared digital ledger where transactions are recorded in
            blocks and linked together in order. Each block is secured by cryptography,
            making the data tamper-resistant and verifiable by anyone.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-lg">
            To put it in plain English: imagine a notebook that everyone can see but no
            one can erase. Once you write something down, it stays there permanently,
            and everyone can trust it’s accurate.
          </p>
          <Link
            href="/post/blockchain-basics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Read the full blockchain explainer →
          </Link>

        </div>

      </section>


      {/* Section 5: Fragments of The Decrypted */}
      {/* <section className="mb-4 min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-semibold mb-10 text-blue-600">From “The Decrypted”</h2>
        <div className="max-w-3xl space-y-8 text-gray-700 dark:text-gray-300 italic text-lg">
          <blockquote className="border-l-4 border-blue-600 pl-6">
            “When the blockchain cracked, the world of trust shifted forever...”
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-6">
            “A coder’s words could change the fate of entire networks.”
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-6">
            “Every transaction told a story beyond code.”
          </blockquote>
        </div>
      </section> */}

      {/* Section: Community CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-4">Join the fluentDev Community</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Keep learning about blockchain and growing your English skills.
          Connect with us and be part of a global Web3 community.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-12">
          {/* YouTube */}
          <div className="flex flex-col items-center">
            <Link
              href="https://www.youtube.com/channel/UCOcS-HD2YMLvUgwsb8UAm-A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white hover:text-blue-300 transition-colors"
                size="3x"
              />
            </Link>
            <p className="mt-3 text-sm">Lessons & Tutorials</p>
          </div>

          {/* Bluesky */}
          <div className="flex flex-col items-center">
            <Link
              href="https://discord.gg/mQbkQzPkVZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-white hover:text-blue-300 transition-colors"
                size="3x"
              />
            </Link>
            <p className="mt-3 text-sm">Updates & Discussion</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <Link
              href="https://www.instagram.com/fluent_dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-blue-300 transition-colors"
                size="3x"
              />
            </Link>
            <p className="mt-3 text-sm">Concepts & Trivia</p>
          </div>
        </div>
      </section>

    </main>
  );
}
