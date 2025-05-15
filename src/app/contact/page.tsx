//'use client';

//import { useState } from 'react';

export default function ContactPage() {
    // const [form, setForm] = useState({ name: '', email: '', message: '' });
    // const [submitted, setSubmitted] = useState(false);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // TODO: Replace with real submission (e.g., Formspree, API)
    //     console.log('Form submitted:', form);
    //     setSubmitted(true);
    // };

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <section className="container mx-auto px-4 py-16 max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>
                <p className="text-lg text-gray-300 mb-8">
                    Have a question, suggestion, or just want to say hello? Fill out the form below.
                </p>

                <form
                    action="https://formspree.io/f/movdypow"
                    method="POST"
                    target="_blank"
                    className="space-y-6"
                >

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"

                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"


                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"

                            required
                            rows={5}
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
                    >
                        Send Message
                    </button>
                    <input type="hidden" name="_redirect" value="https://fluentdev.vercel.app/thank-you" />
                </form>

            </section>
        </main>
    );
}

