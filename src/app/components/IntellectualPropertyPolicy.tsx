'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function IntellectualPropertyPolicyPage() {
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
        <h1 className="text-3xl font-bold mt-12 mb-12 text-center">Intellectual Property Policy</h1>

        <p className="mb-4 font-light text-xs italic">
          <strong>Last Updated:</strong> May 18, 2025
        </p>

        <p className="mb-4">
          This Intellectual Property Policy outlines the ownership and usage guidelines for the intellectual property associated with Majestik Magik (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and our website, <Link href="https://www.majestikmagik.com" className="underline">https://www.majestikmagik.com</Link> (the &quot;Site&quot;). This policy also addresses the intellectual property rights of others.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Our Intellectual Property</h2>
        <p className="mb-4">
          All content, features, and functionality (including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof) appearing on the Site are the exclusive property of Majestik Magik, its licensors, or other content providers and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p className="mb-4">
          This includes, but is not limited to, the Majestik Magik name and logo, the design and layout of our website, and all original creative works and code developed by us.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Permitted Use of Our Content</h2>
        <p className="mb-4">
          Subject to these terms, you are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Site and its content for your personal and non-commercial use in browsing our services and potentially engaging with us.
        </p>
        <p className="mb-4">
          You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
          <li className="mb-2">You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
          <li className="mb-2">You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. Prohibited Uses</h2>
        <p className="mb-4">
          You are specifically prohibited from the following without the express prior written consent of Majestik Magik:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Using any part of our Site or its content for any commercial purpose or benefit (other than engaging our services).</li>
          <li className="mb-2">Modifying, adapting, translating, reverse engineering, decompiling, or disassembling any portion of the Site or its content.</li>
          <li className="mb-2">Removing, altering, or obscuring any copyright, trademark, or other proprietary rights notices from copies of content from the Site.</li>
          <li className="mb-2">Using any robot, spider, or other automatic device, process, or means to access, scrape, or index any portion of the Site or its content for any purpose, including monitoring or copying.</li>
          <li className="mb-2">Using our trademarks, service marks, or logos in any manner that is likely to cause confusion or that disparages or discredits Majestik Magik.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Trademarks</h2>
        <p className="mb-4">
          The Majestik Magik name and logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Majestik Magik or its affiliates or licensors. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on this Site are the trademarks of their respective owners.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Copyright</h2>
        <p className="mb-4">
          The content and compilation of content included on this Site, including all text, graphics, images, videos, and software, is the copyright of Majestik Magik or its content suppliers and is protected by United States and international copyright laws.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Respect for the Intellectual Property of Others</h2>
        <p className="mb-4">
          Majestik Magik respects the intellectual property rights of others and expects our users to do the same. If you believe that any content on our Site infringes upon your intellectual property rights, please notify us in accordance with the procedure set forth below.
        </p>

        <h2 className="text-xl font-semibold mb-2">7. Procedure for Making Claims of Copyright Infringement</h2>
        <p className="mb-4">
          If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this Site, please notify our designated copyright agent in writing. Your notification must include the following information:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
          <li className="mb-2">A description of the copyrighted work that you claim has been infringed.</li>
          <li className="mb-2">A description of where the material that you claim is infringing is located on the Site.</li>
          <li className="mb-2">Your address, telephone number, and email address.</li>
          <li className="mb-2">A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
          <li className="mb-2">A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner&apos;s behalf.</li>
        </ul>
        <p className="mb-4">
          Please send your notice to our designated copyright agent at:
        </p>
        <p className="mb-2">Majestik Magik</p>
        <p className="mb-2">Attn: Legal Department - IP Claims</p>
        <p className="mb-2">409 E. Laburnum Ave Ste #3</p>
        <p className="mb-2"><Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">jamil.matheny@majestikmagik.com</Link></p>
        <p className="mb-4">804.362.7561</p>

        <h2 className="text-xl font-semibold mb-2">8. Enforcement of Intellectual Property Rights</h2>
        <p className="mb-4">
          We actively protect our intellectual property rights. Any unauthorized use of our intellectual property may result in legal action.
        </p>

        <h2 className="text-xl font-semibold mb-2">9. Changes to This Intellectual Property Policy</h2>
        <p className="mb-4">
          We may update this Intellectual Property Policy from time to time. We will notify you of any material changes by posting the new Intellectual Property Policy on this page or by other means as required by law. You are advised to review this Intellectual Property Policy periodically for any changes. Changes to this Intellectual Property Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Intellectual Property Policy, please contact us at:
        </p>
        <p className="mb-2">Majestik Magik</p>
        <p className="mb-2">405 E. Laburnum Ave Ste #3</p>
        <p className="mb-2"><Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">jamil.matheny@majestikmagik.com</Link></p>
        <p className="mb-4">804.362.7561</p>

        <p className="text-sm text-gray-500">By using our Site, you acknowledge that you have read and understood this Intellectual Property Policy.</p>
      </div>
    </div>
  );
}