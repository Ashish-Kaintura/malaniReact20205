import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaShieldAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();
    const effectiveDate = "October 8, 2025"; // Set the policy effective date

    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div className="bg-gray-500 min-h-screen py-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title> Malani Marbles | privacy policy</title>
                <meta name="description" content="Learn how Malani Marbles collects, uses, and protects your personal information in accordance with our privacy practices and data protection policy."></meta>
                <link rel="canonical" href="https://www.malanimarbles.com/privacy-policy" />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <header className="text-center mb-12">
                    {/* <IoIosDocument className="text-6xl text-emerald-600 mx-auto mb-4 dark:text-emerald-400" /> */}
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 mt-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-white">
                        Effective Date: <span className="font-semibold">{effectiveDate}</span>
                    </p>
                </header>

                {/* Content Container */}
                <div className="space-y-12 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">

                    {/* Introduction */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FaShieldAlt className="text-emerald-600 dark:text-emerald-400 mr-3" />
                            Our Commitment to Privacy
                        </h2>
                        <p className="leading-relaxed">
                            At **Malani Marbles Pvt. Ltd**, your privacy matters to us. We are dedicated to safeguarding any personal data you provide while visiting or using our website. This Privacy Policy describes the personal data Malani Marbles Pvt. Ltd may collect, why we collect it, and how that data will be securely used and stored. Whether you are submitting an inquiry, requesting a quote, or browsing our products, we will safeguard your privacy and, in all cases, will keep your information confidential. It is our intention to maintain a safe user experience, enable openness in our trading relationship, and respect your data privacy at all times.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Information We Collect
                        </h3>
                        <p className="mb-4">
                            We may collect the following forms of information while visiting our website:
                        </p>
                        <ul className="space-y-3 list-disc list-inside ml-4">
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">Personal Details:</span> Name, email address, phone number, company name, and any other data submitted via contact or inquiry forms.
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900 dark:text-white">Technical Data:</span> Browser type, IP address, device information, and user interaction with the site, collected through cookies and analytics tools.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="mb-4">
                            The information that we gather from you will be used for the following:
                        </p>
                        <ul className="space-y-3 list-disc list-inside ml-4">
                            <li>Responding to your inquiries or requests</li>
                            <li>Providing you with quotes and product information.</li>
                            <li>Processing orders or service requests.</li>
                            <li>Enhancing our website and customer experience.</li>
                            <li>Occasional promotional e-mails (with the option to opt-out).</li>
                        </ul>
                    </section>

                    {/* Cookies and Analytics */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Cookies and Analytics
                        </h2>
                        <p className="leading-relaxed">
                            We utilize cookies and similar technologies to help analyze website traffic, enhance your user experience, and optimize website performance. Cookies allow us to recognize your online activity with us, determine what else has interests for you, and improve navigation in the future. Third-party services like Google Analytics may include anonymous, non-personally identifying data for statistical analysis of web activity. By using our website, you are agreeing to our cookie policy. You can control or disable cookie settings at any time through your web browser preferences for your privacy and customization.
                        </p>
                    </section>

                    {/* Sharing of Information */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Sharing of Information
                        </h2>
                        <p className="mb-4">
                            Your personal information may be shared with:
                        </p>
                        <ul className="space-y-3 list-disc list-inside ml-4">
                            <li>Trusted service providers (e.g., hosting, analytics, customer service tools)</li>
                            <li>Authorities, if required by law</li>
                        </ul>
                        <p className="mt-4 font-semibold text-emerald-600 dark:text-emerald-400">
                            We do not sell or rent your personal data to third parties.
                        </p>
                    </section>

                    {/* Data Protection & Your Rights */}
                    <div className="grid md:grid-cols-2 gap-8 border-b border-gray-200 dark:border-gray-700 pb-8">

                        {/* Data Protection */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Data Protection
                            </h2>
                            <p className="leading-relaxed">
                                We take reasonable steps to protect your personal data using security tools like SSL encryption, secure servers, and regular monitoring. However, no system can guarantee 100% protection.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Your Rights
                            </h2>
                            <p className="mb-4">
                                You may request:
                            </p>
                            <ul className="space-y-2 list-disc list-inside ml-4">
                                <li>Access to your personal data</li>
                                <li>Correction of inaccurate details</li>
                                <li>Deletion of your information (when legally permitted)</li>
                                <li>To opt-out of promotional communications</li>
                            </ul>
                            <p className="mt-2 text-sm">
                                Contact us using the details below to exercise any of these rights.
                            </p>
                        </section>
                    </div>

                    {/* Policy Updates */}
                    <section className="border-b border-gray-200 dark:border-gray-700 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Policy Updates
                        </h2>
                        <p className="leading-relaxed">
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Effective Date.” Please review it periodically for any updates.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Us
                        </h2>
                        <p className="mb-4">
                            For any questions or concerns regarding this Privacy Policy or your personal data, please contact us at:
                        </p>

                        <div className="space-y-4 font-medium">
                            <div className="flex items-center text-lg">
                                <FaEnvelope className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Email:</span>
                                <a href="mailto:Sales@malanimarbles.com" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">sales@malanimarbles.com</a>
                            </div>

                            <div className="flex items-center text-lg">
                                <FaPhone className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Phone:</span>
                                <a href="tel:+919319685290" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">9810387297, 9811012011</a>
                            </div>

                            <div className="flex items-start text-lg">
                                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 mt-1 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Address:</span>
                                <p className="ml-2">Malani Marbles Pvt. Ltd.
                                    Khasra No. 809-810 Chattarpur Mandir Road, Near Tivoli Garden New Delhi- 110074, India </p>
                            </div>

                            <div className="flex items-center text-lg">
                                <FaGlobe className="text-emerald-600 dark:text-emerald-400 mr-3 w-5 h-5 flex-shrink-0" />
                                <span className="text-gray-900 dark:text-white">Website:</span>
                                <a href="https://www.malanimarbles.com" target="_blank" rel="noopener noreferrer" className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline">https://www.malanimarbles.com</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer / Copyright Strip */}
            <div className="text-center mt-12 text-sm text-gray-500 dark:text-gray-600">
                © {currentYear} Malani Marbles Pvt. Ltd. All Rights Reserved.
            </div>
        </div>
    );
}