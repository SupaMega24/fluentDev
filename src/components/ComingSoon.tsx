import Image from "next/image";
import MailerLiteForm from "@/components/MailerLiteForm";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-4 ">
            <div className="text-center max-w-xl">

                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 px-4 space-y-6">
                    <Image
                        src="/coming-soon.jpg"
                        width={300}
                        height={200}
                        alt="Coming Soon"
                        className="mx-auto w-full max-w-3xl rounded-2xl shadow-lg"
                    />
                    <MailerLiteForm />
                </div>

            </div>
        </main>
    );
}