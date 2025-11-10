"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DefiConfirmationPage() {
    return (
        <main className="min-h-screen bg-gray-600 flex items-center justify-center px-6 py-16">
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl bg-white shadow-sm rounded-2xl p-10 border border-gray-100"
            >
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                    Welcome to <span className="text-blue-600">#100DaysOfDeFi</span> 🎉
                </h1>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We’re excited to have you join <strong>100+ professionals</strong> learning DeFi together.
                    This is your first step into the fluentDev ecosystem, where professionals explore Web3
                    through guided learning and community collaboration.
                </p>

                <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        🚀 Next Steps
                    </h2>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>
                            Join our Discord community:{" "}
                            <a
                                href="https://discord.gg/q5KpUY2w9H"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://discord.gg/q5KpUY2w9H
                            </a>
                        </li>
                        <li>
                            Introduce yourself in the{" "}
                            <span className="font-medium text-gray-900">#assignments-and-discussion</span>{" "}
                            channel.
                        </li>
                    </ol>
                </div>
            </motion.section>
        </main>
    );
}
