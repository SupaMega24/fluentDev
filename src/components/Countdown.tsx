"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("2026-02-02T09:00:00+09:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Course starts in
            </h3>
            <div className="flex justify-center gap-6 text-6xl font-bold text-blue-600">
                <div className="flex flex-col items-center">
                    <span>{timeLeft.days}</span>
                    <span className="text-lg text-gray-600 dark:text-gray-400">Days</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.hours}</span>
                    <span className="text-lg text-gray-600 dark:text-gray-400">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-lg text-gray-600 dark:text-gray-400">Min</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-lg text-gray-600 dark:text-gray-400">Sec</span>
                </div>
            </div>
        </div>
    );
}
