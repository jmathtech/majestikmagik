'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
    // -- START: Scroll Effect (for potential header) --
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // -- END: Scroll Effect --

    return (
        <div className="bg-black text-white min-h-screen py-8 px-16 max-w-5xl mx-auto">
            {/* Optional Header (if you want a basic one) */}
            <header className={`bg-black border-b border-gray-600 p-4 sticky top-0 z-10 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-4'}`}>
                <Link href="/" className="inline-block relative">
                    <h1 className={`
              font-extrabold
              relative
              transition-all duration-300 ease-in-out
              ${isScrolled ? 'text-lg' : 'text-xl'}
            `}>
                        <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent opacity-100 transition-opacity duration-600 hover:opacity-0">
                            Majestik Magik
                        </span>
                        <span className="bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent opacity-0 transition-opacity duration-900 hover:opacity-100">
                            Majestik Magik
                        </span>
                    </h1>
                </Link>
            </header>

            {/* Main Content Block */}
            <div className="py-8">
                <h1 className="text-3xl font-bold mt-12 mb-12 text-center">Our Refund Policy</h1>
                <p className="text-xs text-gray-400 italic mb-4">Last Updated: May 17, 2025</p>

                <p className="mb-4">At MajestikMagik.com, we strive to provide high-quality digital products and services. We understand that sometimes things don&apos;t work out as expected. This policy outlines the conditions under which refunds may be issued.</p>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Digital Products (e.g., templates, e-books, software licenses)</h2>
                    <p className="mb-4">Due to the intangible nature of digital products, which cannot be returned once delivered, our refund policy for these items is as follows:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-6"><strong>No Refunds After Download:</strong> Once a digital product has been downloaded or accessed, we generally do not offer refunds.</li>
                        <li className="mb-6"><strong>Exceptions for Technical Issues:</strong> If you experience significant technical issues preventing you from accessing or using the product, and our support team cannot resolve the issue within a reasonable timeframe, you may be eligible for a refund. Please contact us within <b>**7 days**</b> of delivery to report such issues.</li>
                        <li className="mb-6"><strong>Misrepresentation:</strong> If the digital product is significantly different from its description or if it fails to perform as advertised, you may be eligible for a refund. Evidence of misrepresentation will be required. Please contact us within <b>**7 days**</b> of delivery to report such issues.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Services (e.g., custom development, consulting, subscription services)</h2>
                    <p className="mb-4">Refunds for services are handled on a case-by-case basis, depending on the nature of the service and work completed:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Project-Based Services:</strong> For custom development or consulting services, refunds will be evaluated based on the work completed and the agreed-upon milestones. If a project is cancelled before completion, any refund will be prorated based on the services already rendered and expenses incurred.</li>
                        <li><strong>Subscription Services:</strong>
                            <ul className="list-circle list-inside ml-5 mt-2">
                                <li className="mb-6"><strong>Monthly Subscriptions:</strong> Monthly subscriptions are generally non-refundable once the service period has begun. You can cancel your subscription at any time to prevent future charges.</li>
                                <li className="mb-6"><strong>Annual Subscriptions:</strong> For annual subscriptions, a refund may be issued for the unused portion of the subscription, minus any non-refundable setup fees or a pro-rated amount for the time already used. A cancellation fee may also apply.</li>
                            </ul>
                        </li>
                        <li><strong>Cancellation Before Service Commencement:</strong> If you cancel a service before any work has begun or before the subscription period starts, a full refund may be issued.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">How to Request a Refund</h2>
                    <p className="mb-4">To request a refund, please follow these steps:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li className="mb-6"><strong>Contact Us:</strong> Send an email to <Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">jamil.matheny@majestikmagik.com</Link> with your order number and a detailed explanation of why you are requesting a refund.</li>
                        <li className="mb-6"><strong>Provide Evidence:</strong> For technical issues or misrepresentation, please provide screenshots, error messages, or other relevant evidence to support your claim.</li>
                        <li className="mb-6"><strong>Review Process:</strong> We will review your request within 5 business days and may contact you for additional information.</li>
                        <li className="mb-6"><strong>Refund Issuance:</strong> If your refund request is approved, the refund will be processed to your original method of payment within 7-10 business days.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
                    <p className="mb-4">We reserve the right to modify this refund policy at any time. Any changes will be posted on this page, and the &quot;Last Updated&quot; date will be revised accordingly. We encourage you to review this policy periodically.</p>
                </div>

                <p className="mt-8">If you have any questions about our refund policy, please don&apos;t hesitate to <Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">contact us</Link>.</p>
            </div>
        </div>
    );
}