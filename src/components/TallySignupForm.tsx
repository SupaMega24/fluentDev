"use client";


export default function TallySignupForm() {
    return (
        <div className="w-full flex justify-center">
            <div className="bg-blue-800 p-12 rounded-xl shadow-lg text-center max-w-2xl w-full">
                <h4 className="text-white text-4xl font-bold mb-3">
                    Enroll in #100DaysOfDeFi
                </h4>
                <p className="text-gray-300 mb-6 text-xl">
                    Join other professionals learning decentralized finance together.
                    <br />
                    <br />
                    The cohort begins <strong>February 2, 2026</strong>.
                </p>

                <a
                    href="https://tally.so/r/68J5VO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition"
                >
                    Sign up now
                </a>

                <p className="text-gray-200 text-sm mt-4">
                    You’ll be redirected to our official #100DaysOfDeFi signup form 🔥
                </p>
            </div>
        </div>
    );
}
