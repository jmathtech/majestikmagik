'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CybersecurityCommitmentPage() {
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
        <h1 className="text-3xl font-bold mt-12 mb-12 text-center">Our Commitment to Your Website Security</h1>

        <p className="mb-4">At MajestikMagik.com, we understand that the security of your website is paramount. Just like a well-crafted spell requires careful protection, your online presence deserves robust defenses against the ever-evolving landscape of cyber threats. We want to assure you that we are committed to employing diligent practices and technologies to safeguard your website and the information it holds.</p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Proactive Security Measures</h2>
          <p className="mb-4">Here&apos;s a glimpse into our ongoing efforts to protect your digital realm from various cyber threats:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-6"><strong>Protection Against SQL Injection Attacks:</strong> We implement secure coding practices and input validation techniques to prevent malicious SQL queries from being injected into our databases, safeguarding your website&apos;s data integrity.</li>
            <li className="mb-6"><strong>Defense Against Cross-Site Scripting (XSS) Attacks:</strong> We employ measures to sanitize user input and encode output to prevent attackers from injecting malicious scripts into your website, protecting your visitors from potential harm.</li>
            <li className="mb-6"><strong>Regular Security Assessments:</strong> We conduct periodic reviews and assessments of our systems and infrastructure to identify potential vulnerabilities, including those that could be exploited by common attack vectors. This proactive approach allows us to address weaknesses before they can be exploited.</li>
            <li className="mb-6"><strong>Industry-Standard Encryption:</strong> We utilize robust encryption methods (like HTTPS/TLS) to protect sensitive data transmitted between your website visitors and our servers, ensuring the confidentiality and integrity of information during transit.</li>
            <li className="mb-6"><strong>Firewall Protection:</strong> Our systems are fortified with firewalls that act as barriers against unauthorized access, helping to prevent malicious traffic and attempts to exploit known vulnerabilities.</li>
            <li className="mb-6"><strong>Malware Scanning and Prevention:</strong> We implement measures to detect and prevent the introduction of malicious software that could compromise your website&apos;s functionality or security.</li>
            <li className="mb-6"><strong>Secure Hosting Environment:</strong> We partner with reputable hosting providers that maintain stringent security protocols and physical safeguards, contributing to a more resilient infrastructure.</li>
            <li className="mb-6"><strong>Regular Software Updates and Patching:</strong> We diligently keep our software and systems up-to-date with the latest security patches to address known vulnerabilities that attackers might try to exploit.</li>
            <li className="mb-6"><strong>Access Controls:</strong> We implement strict access controls to limit who can access sensitive areas of our systems, minimizing the risk of unauthorized modifications or data breaches.</li>
            <li className="mb-6"><strong>Data Backup and Recovery:</strong> We maintain regular backups of critical data to ensure business continuity and the ability to recover information in the event of an unforeseen incident, including successful cyber attacks.</li>
            <li className="mb-6"><strong>Continuous Monitoring:</strong> Our systems are continuously monitored for suspicious activity and potential indicators of compromise, allowing us to respond promptly to potential security events.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Role in Maintaining Security</h2>
          <p className="mb-4">While we are dedicated to providing a secure environment, website security is a shared responsibility. We encourage you to:</p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-6"><strong>Utilize Two-Factor Authentication (2FA) if available</strong> Think of 2FA as an extra layer of security for your account. After entering your password, you&apos;ll be required to provide a second verification factor, typically a code sent to your phone or generated by an authenticator app. This significantly reduces the risk of unauthorized access, even if your password is compromised.</li>
            <li className="mb-6"><strong>Regularly Update Your Password</strong> It&apos;s important to change your password periodically to prevent unauthorized access to your account.</li>
            <li className="mb-6"><strong>Consider No Password Email-Only Authentication (if offered)</strong> If your website supports email-only authentication, consider using it to provide an additional layer of security.  This method streamlines login by eliminating the need for a traditional password. Instead, you&apos;ll enter your email address, and a unique, temporary link or code will be sent to your inbox to grant access. This removes password-related vulnerabilities, though the security of your email account becomes paramount.</li>
            <li className="mb-6"><strong>Use strong, unique passwords</strong> for your account and any administrative access to your website.</li>
            <li className="mb-6"><strong>Keep your own devices and software updated</strong> with the latest security patches and data backups.</li>
            <li className="mb-6"><strong>Be cautious of suspicious emails, links, and attachments</strong> that could be phishing attempts or vectors for malware.</li>
            <li className="mb-6"><strong>Educate yourself and your team</strong> on basic cybersecurity best practices to minimize the risk of human error leading to security breaches.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Ongoing Commitment</h2>
          <p className="mb-4">The digital landscape is constantly changing, and so too are the tactics employed by cyber attackers. We are committed to staying informed about the latest security threats and adapting our practices accordingly. Our goal is to provide you with a reliable and secure platform for your online endeavors.</p>
          <p className="mb-4">By entrusting your website to MajestikMagik.com, you can be confident that we take its security seriously. We are dedicated to maintaining a secure environment where your online presence can thrive.</p>
        </div>

        <p>If you have any questions or concerns about our security practices, please do not hesitate to <Link href="mailto:jamil.matheny@majestikmagik.com" className="underline">contact us</Link>.</p>
      </div>
    </div>
  );
}