'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
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
        <h1 className="text-3xl font-bold mt-12 mb-12 text-center">Cookie Policy for Majestik Magik</h1>

        <p className="mb-4 font-light text-xs italic">
          <strong>Last Updated:</strong> May 18, 2025
        </p>

        <p className="mb-4">
          This Cookie Policy explains how Majestik Magik (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website, <Link href="https://www.majestikmagik.com" className="underline">https://www.majestikmagik.com</Link> (the &quot;Site&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. What are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. How We Use Cookies</h2>
        <p className="mb-4">We use cookies for various purposes, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Site and to use some of its features, such as accessing secure areas. Because these cookies are strictly necessary to deliver the Site, you cannot refuse them.</li>
          <li className="mb-2"><strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Site is being used or how effective our marketing campaigns are, or to help us customize our Site for you. For example, we may use analytics cookies to see which pages are visited most often, to identify and resolve errors, and to understand where our visitors are coming from.</li>
          <li className="mb-2"><strong>Functionality Cookies:</strong> These cookies allow our Site to remember choices you make (such as your language preference) and provide enhanced, more personal features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog.</li>
          <li className="mb-2"><strong>Marketing and Advertising Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers. We may also use these cookies to help us deliver targeted advertising and measure the effectiveness of our advertising campaigns.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <p className="mb-4">The specific types of cookies we may use on our Site include:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>First-Party Cookies:</strong> These are cookies set by the Majestik Magik website.</li>
          <li className="mb-2"><strong>Third-Party Cookies:</strong> These are cookies set by a third-party website other than Majestik Magik. We may use third-party cookies for analytics and advertising purposes.</li>
          <li className="mb-2"><strong>Session Cookies:</strong> These cookies are temporary and expire when you close your browser.</li>
          <li className="mb-2"><strong>Persistent Cookies:</strong> These cookies remain on your device for a longer period or until you manually delete them. The length of time a cookie will remain on your device will depend on the specific cookie.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. How to Control Cookies</h2>
        <p className="mb-4">You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in the following ways:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Site though your access to some functionality and areas of our Site may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser&apos;s help menu for more information.</li>
          <li className="mb-2"><strong>Specific Cookie Opt-Outs:</strong> For certain third-party cookies, you may be able to go directly to the third party&apos;s website to opt-out of their use of cookies. For example, many advertising providers offer opt-out mechanisms.</li>
          <li className="mb-2"><strong>Our Cookie Banner:</strong> When you first visit our Site, we may display a cookie banner that allows you to manage your cookie preferences. You can usually revisit and change your settings at any time through a link on our Site (if implemented).</li>
        </ul>

        <p className="mb-4">Please note that if you disable cookies, some features of our Site may not function properly.</p>

        <h2 className="text-xl font-semibold mb-2">5. Other Tracking Technologies</h2>
        <p className="mb-4">We may also use other tracking technologies similar to cookies, such as web beacons (also known as pixel tags or clear gifs). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Site or opened an email that we have sent them. This allows us, for example, to monitor the traffic patterns of users from one page within our Site to another, to deliver or communicate with cookies, to understand whether you have come to our Site from an online advertisement displayed on a third-party website, and to improve site performance.</p>

        <h2 className="text-xl font-semibold mb-2">6. Changes to This Cookie Policy</h2>
        <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.</p>

        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p className="mb-4">If you have any questions about our use of cookies or other tracking technologies, please contact us at:</p>
        <p className="mb-2">Majestik Magik</p>
        <p className="mb-2">409 E. Laburnum Ave Ste #3</p>
        <p className="mb-2"><Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">jamil.matheny@majestikmagik.com</Link></p>
        <p className="mb-4">804.362.7561</p>

        <p className="text-sm text-gray-500">By continuing to use our Site, you acknowledge that you have read and understood this Cookie Policy.</p>
      </div>
    </div>
  );
}