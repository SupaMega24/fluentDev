export default function ComingSoonPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Coming Soon!</h1>

                <img
                    src="/coming-soon.jpg"
                    alt="Coming Soon"
                    className="mx-auto w-full max-w-3xl rounded-2xl shadow-lg mb-8"
                />

                <p className="text-lg md:text-xl text-gray-200">
                    We’re working hard to get this page ready. Stay tuned!
                </p>
                <a
                    href="/"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}