"use client";

import { useEffect } from "react";

export default function MailerLiteForm() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.mailerlite.com/js/universal.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="mlb2-30376574"
            className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30376574 w-full  "
        >
            <div className="ml-form-align-center ">
                <div className="ml-form-embedWrapper embedForm bg-blue-800 p-6 rounded-lg shadow-lg">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form ">
                        <div className="ml-form-embedContent">
                            <h4 className="text-white text-center text-3xl font-bold">
                                Coming Soon!
                            </h4>
                            <p className="text-gray-300 text-center mt-2 ">
                                Get notified when DeFi Essentials goes live!
                            </p>
                        </div>

                        <form
                            className="ml-block-form bg"
                            action="https://assets.mailerlite.com/jsonp/1772894/forms/164414402631566349/subscribe"
                            method="post"
                            target="_blank"
                        >
                            <div className="ml-form-formContent ">
                                <div className="ml-form-fieldRow ml-last-item" >
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required text-xl mt-4 ">
                                        <input
                                            aria-label="email"
                                            aria-required="true"
                                            type="email"
                                            className="form-control w-full rounded-md"
                                            name="fields[email]"
                                            placeholder="Email"
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                <div className="ml-form-embedSubmit bg-gray-800 hover:bg-blue-600
                                     text-gray-200 rounded-md transition mt-4 text-xl py-2"
                                >
                                    <button type="submit">Notify me about this course.</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
