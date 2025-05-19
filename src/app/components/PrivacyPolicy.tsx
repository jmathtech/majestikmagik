'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl font-bold mt-12 mb-12 text-center">Privacy Policy for Majestik Magik</h1>

        <p className="mb-4 font-light text-xs italic">
          <strong>Last Updated:</strong> May 18, 2025
        </p>

        <p className="mb-4">
          This Privacy Policy describes how Majestik Magik (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares personal information of users (&quot;you&quot; or &quot;users&quot;) of our website, <Link href="https://www.majestikmagik.com" className="underline">https://www.majestikmagik.com</Link> (the &quot;Site&quot;). This policy also outlines your choices regarding your personal information.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of personal information from you:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Information You Provide Directly:</strong>
            <ul className="list-disc list-inside ml-4">
               <li className="mb-6"><strong>Contact Information:</strong> When you fill out contact forms, subscribe to newsletters, request a quote, or communicate with us, we may collect your name, email address, phone number, and any other information you choose to provide.</li>
               <li className="mb-6"><strong>Project Information:</strong> If you engage our services, we may collect information related to your project requirements, website content, design preferences, and other details necessary for the provision of our services.</li>
               <li className="mb-6"><strong>Account Information:</strong> If we create an account for you on our Site (e.g., for project tracking), we may collect your username and password.</li>
               <li className="mb-6"><strong>Communications:</strong> Records of your correspondence with us, including emails and other messages.</li>
               <li className="mb-6"><strong>Testimonials and Feedback:</strong> If you provide a testimonial or feedback, we may collect your name and the content of your feedback.</li>
            </ul>
          </li>
          <li><strong>Information We Collect Automatically:</strong>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-6"><strong>Log Data:</strong> Our servers automatically record information (&quot;Log Data&quot;) created by your use of the Site. This may include your IP address, browser type, referring/exit pages, operating system, date/time stamps, and related data.</li>
              <li className="mb-6"><strong>Cookies and Similar Technologies:</strong> We may use cookies, web beacons, and other similar technologies to collect information about your browsing activities on our Site. Cookies are small data files stored on your device that help us improve our Site and your experience. You can control the use of cookies at the individual browser level.</li>
              <li className="mb-6"><strong>Usage Information:</strong> We may collect information about how you interact with our Site, such as the pages you visit, the links you click, and the time you spend on certain pages.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">We may use your personal information for the following purposes:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-6">To Provide and Improve Our Services: To deliver the website design and development services you request, manage your projects, and improve our service offerings.</li>
          <li className="mb-6">To Communicate with You: To respond to your inquiries, provide quotes, send you updates about your projects, and communicate important information related to our services.</li>
          <li className="mb-6">Marketing and Promotional Purposes: With your consent where required by law, we may send you newsletters, marketing communications, and information about our services that we think may be of interest to you. You can opt-out of receiving these communications at any time.</li>
          <li className="mb-6">To Personalize Your Experience: To tailor the content and information we provide to you based on your interests and preferences.</li>
          <li className="mb-6">To Maintain and Improve Our Site: To analyze Site usage, monitor the performance of our Site, and make improvements to its functionality and content.</li>
          <li className="mb-6">Security and Fraud Prevention: To detect, prevent, and address security incidents and fraudulent activities.</li>
          <li className="mb-6">Legal Compliance: To comply with applicable laws, regulations, and legal processes.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. How We Share Your Information</h2>
        <p className="mb-4">We may share your personal information with the following categories of recipients:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-6"><strong>Service Providers:</strong> We may engage third-party service providers to assist us in operating our Site, providing our services, conducting our business, or servicing you. These providers may have access to your personal information to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. Examples include hosting providers, payment processors, and analytics providers.</li>
          <li className="mb-6"><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, sale of assets, or similar event, your personal information may be transferred as part of the transaction. We will notify you of any such transfer and any choices you may have regarding your information.</li>
          <li className="mb-6"><strong>Legal Requirements:</strong> We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
          <li className="mb-6"><strong>With Your Consent:</strong> We may share your personal information with third parties when we have your explicit consent to do so.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Your Choices and Rights</h2>
        <p className="mb-4">You may have certain rights regarding your personal information, depending on your location and applicable laws. These rights may include:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-6"><strong>Access:</strong> The right to request access to the personal information we hold about you.</li>
          <li className="mb-6"><strong>Correction:</strong> The right to request that we correct any inaccurate or incomplete personal information.</li>
          <li className="mb-6"><strong>Deletion:</strong> The right to request the deletion of your personal information, subject to certain exceptions.</li>
          <li className="mb-6"><strong>Objection to Processing:</strong> The right to object to the processing of your personal information for certain purposes, such as direct marketing.</li>
          <li className="mb-6"><strong>Restriction of Processing:</strong> The right to request that we restrict the processing of your personal information in certain circumstances.</li>
          <li className="mb-6"><strong>Data Portability:</strong> The right to receive a copy of your personal information in a structured, commonly used, and machine-readable format and to transmit it to another controller.</li>
          <li className="mb-6"><strong>Withdrawal of Consent:</strong> If we are processing your personal information based on your consent, you have the right to withdraw your consent at any time.</li>
          <li className="mb-6"><strong>Do Not Track:</strong> Our Site does not currently respond to &quot;Do Not Track&quot; signals from your browser.</li>
        </ul>
        <p className="mb-4">To exercise any of these rights, please contact us using the contact information provided below. We may require you to verify your identity before responding to your request.</p>

        <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
        <p className="mb-4">We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to provide you with our services, comply with our legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of information and the specific purposes.</p>

        <h2 className="text-xl font-semibold mb-2">6. Security of Your Information</h2>
        <p className="mb-4">We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

        <h2 className="text-xl font-semibold mb-2">7. Links to Other Websites</h2>
        <p className="mb-4">Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s website. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2 className="text-xl font-semibold mb-2">8. Children&apos;s Privacy</h2>
        <p className="mb-4">Our Site and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.</p>

        <h2 className="text-xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page or by other means as required by law. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
        <p className="mb-2">Majestik Magik</p>
        <p className="mb-2">405 E. Laburnum Ave Ste #3</p>
        <p className="mb-2"><Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">jamil.matheny@majestikmagik.com</Link></p>
        <p className="mb-4">804.362.7561</p>

        <p className="text-sm text-gray-500">By using our Site, you consent to the terms of this Privacy Policy.</p>
      </div>
    </div>
  );
}