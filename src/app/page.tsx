'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu
  const buttonRef = useRef<HTMLButtonElement>(null); //   Ref for the button

  // -- START: Scroll Effect --
  const [isScrolled, setIsScrolled] = useState(false); // State to manage scroll position

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Set isScrolled to true if the page is scrolled down more than 50px
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []); // Empty dependency array to run only on mount and unmount
  // -- END: Scroll Effect --

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close the mobile menu when clicking outside of it
    if (!isMobileMenuOpen) return; // If the menu is not open, do nothing
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

  }, [isMobileMenuOpen]); // Cleanup function to remove event listeners

  return (
    <>
      {/* Header */}
      <header className={`bg-black shadow-slate-900 border-b border-gray-600 text-white p-4 flex items-center justify-between sticky top-0 z-20 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2 px-4' : 'p-2' // Shrink padding when scrolled
        }`}> {/* Changed justify-center to justify-between, added sticky, top-0, z-20 */}
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <Image
              src="/img/logo.webp"
              alt="Majestik Magik Logo"
              width={isScrolled ? 30 : 40} // Smaller width when scrolled
              height={isScrolled ? 30 : 40} // Smaller height when scrolled
              className={`transition-all duration-600 ease-in-out ${isScrolled ? '' : 'group-hover:scale-125'}`} // Adjust hover effect slightly if needed
            />

          </div>
          <div>
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

          </div>
        </div>

        {/* Desktop Navigation (Hidden on small screens) */}
        <nav className="hidden lg:flex justify-center gap-10 py-2"> {/* Reduced gap slightly, added 'hidden md:flex' */}
          <Link
            href="#portfolio"
            className={`px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className={`px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

            Testimonials
          </Link>
          <Link
            href="#contact"
            className={`px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

            Contact
          </Link>
          <Link
            href="https://www.github.com/jmathtech"
            target="_blank" // Added target="_blank" for external link
            rel="noopener noreferrer" // Added rel for security
            className={`px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01bfab6a82f6cc6c6c?mp_source=share" target="_blank" rel="noopener noreferrer" // Added rel for security
            className={`px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>
            <Image src="img/upwork-white.svg" alt="Upwork Logo" width={isScrolled ? 22 : 23} height={isScrolled ? 22 : 23} className="transition-all duration-600 ease-in-out" />
          </Link>
        </nav>

        {/* Hamburger Menu Button (Visible only on small screens) */}
        <div className="lg:hidden"> {/* This container is hidden on medium screens and up */}
          <button
            ref={buttonRef} // Attach the button ref
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 rounded-md p-2 "
            aria-label="Toggle menu" // Accessibility
            aria-expanded={isMobileMenuOpen} // Accessibility
          >
            {/* Animated Hamburger/Close Icon */}
            <div className="w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out mb-1.5" style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
            <div className="w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out" style={{ opacity: isMobileMenuOpen ? 0 : 1 }}></div>
            <div className="w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out mt-1.5" style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu (Appears below header when open) */}
      <nav
        ref={menuRef} // Attach the menu ref
        className={`lg:hidden fixed inset-x-0 bg-black text-white flex flex-col items-center gap-4 py-16 transition-transform duration-300 ease-in-out transform z-10 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full' // Slide down/up animation
          } ${isScrolled ? 'top-12' : 'top-16' // Adjust padding based on scroll state
          }`}

      >
        <Link href="#portfolio" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Portfolio</Link>
        <Link href="#testimonials" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Testimonials</Link>
        <Link href="#contact" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Contact</Link>
        <Link href="https://www.github.com/jmathtech" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faGithub} className="text-white text-2xl" /> </Link>
        <Link href="https://www.upwork.com/freelancers/~01bfab6a82f6cc6c6c?mp_source=share" target="_blank" rel="noopener noreferrer" // Added rel for security
          className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out w-full hover:bg-gray-700 text-center">
          <Image src="img/upwork-white.svg" alt="Upwork Logo" width={22} height={22} className="transition-all duration-600 ease-in-out inline-block" />
        </Link>
      </nav>


      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4 ">

        {/* === Hero Section Start === */}
        <section className="text-center py-16 md:py-24 lg:py-32 mb-6"> {/* Added padding and bottom margin */}
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-extrabold mb-4
             bg-gradient-to-r from-blue-400 via-blue-400 to-purple-900 
             [-webkit-background-clip:text] 
             bg-clip-text text-transparent
             select-none
          ">
            Crafting Digital Excellence
          </h2>
          <p className="text-md md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"> {/* Subheading styling */}
            Stay Ahead in the Digital Age: Outdated websites, technical hurdles, and a lack of scalable solutions can hold businesses back. Don’t miss out on opportunities for growth, engagement, and efficiency—partner with a solopreneur to create impactful web solutions that deliver results!
          </p>
          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r bg-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105" // Styled CTA button
          >
            Get In Touch
          </Link>
        </section>
        {/* === Hero Section End === */}

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-26">
          <h2 className="text-2xl font-bold text-center">Website Portfolio</h2>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Explore my latest web development projects for real clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black transition duration-300 ease-in-out transform hover:scale-103">
              <h3 className="font-semibold text-lg">CearcoChemicals.com</h3>
              <Image src="/img/cearcochemicals_screenshot.webp" alt="CearcoChemicals.com" width={500} height={300} className="rounded-md mt-4 mb-4" />

              <p className="text-sm text-gray-500">
                Cleaning Equipment & Repair Company is a locally owned business out of Richmond, Virginia. CEARCO has been established since 1981. We make specialty blended cleaning solutions that are not powdered- based. All of our specialty blended solutions are liquid-based. With this said, we have remained faithful to the original formulas.
                <br /><br />
                <b>Website Project:</b><br />
                Made with the React JS framework and Vanilla CSS.
              </p>
              <div className="text-right">
                <button
                  className="btn mt-4 bg-blue-400 transition-colors duration-600 ease-in-out text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                  onClick={() => (window.location.href = "https://cearcochemicals.com")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black transition duration-300 ease-in-out transform hover:scale-103">
              <h3 className="font-semibold text-lg">ParrisGainer.com</h3>
              <Image src="/img/parrisgainer_screenshot.webp" alt="ParrisGainer.com" width={500} height={300} className="rounded-md mt-4 mb-4" />

              <p className="text-sm text-gray-500">
                Parris Gainer relocated to Richmond VA in 2007 where she continued her private practice and community work. Parris Gainer earned her Master of Social Work (MSW), and Master of Education (M.Ed.) both from the University of Pittsburgh. She has a Masters of Divinity from Pittsburgh Theological Seminary and Doctor of Divinity from Samuel DeWitt Proctor School of Theology. Dr. Parris Gainer has extensive work experience in program administration, community and school mental health, behavior modification and resolution counseling.
                <br /><br />
                <b>Website Project:</b><br />
                Made with the React JS framework, Tailwind CSS, and Wordpress CMS.
              </p>
              <div className="text-right">
                <button
                  className="btn mt-4 bg-blue-400 transition-colors duration-600 ease-in-out text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                  onClick={() => (window.location.href = "https://parrisgainer.com")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black transition duration-300 ease-in-out transform hover:scale-103">
              <h3 className="font-semibold text-lg">cleaning.majestikmagik.com</h3>
              <Image src="/img/cleaningmajestikmagik.webp" alt="Cleaning Majestik Magik" width={500} height={300} className="rounded-md mt-4 mb-4" />
              <p className="text-sm text-gray-500">
                Let&apos;s bring cleanliness & comfort to your space.
                <br /><br />
                <b>Website Project:</b><br />
                Made with the Next.js framework (javascript/typescript), Tailwind CSS, AWS RDS, and deployed onVercel hosting.</p>
              <div className="text-right">
                <button
                  className="btn mt-4 bg-blue-400 transition-colors duration-600 ease-in-out text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                  onClick={() => (window.location.href = "https://cleaning.majestikmagik.com")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black transition duration-300 ease-in-out transform hover:scale-103">
              <h3 className="font-semibold text-lg">Zeus Suit Shop (Mock Design)</h3>
              <video
                width="500" // Keep width
                height="300" // Keep height (adjust aspect ratio if needed)
                controls // Add controls (play/pause, volume, etc.)
                className="rounded-md mt-4 mb-4" // Keep styling
              >
                <source src="https://user-images.githubusercontent.com/36749450/182264129-b7336ab1-84e3-46f1-a5e9-2cef906c0cd5.mp4" type="video/mp4" />
                Your browser does not support the video tag. {/* Fallback text */}
              </video>
              <p className="text-sm text-gray-500">
                An ecommerce website for a clothing store. A custom front-end ReactJS E-Commerce website for a tailored suits shop.
                <br /><br />
                <b>Website Project:</b><br />
                Made with the React JS and Material UI framework.</p>
              <div className="text-right">
                <button
                  className="btn mt-4 bg-blue-400 transition-colors duration-600 ease-in-out text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer end inline-block"
                  onClick={() => (window.location.href = "https://github.com/jmathtech/Zeus-Suits-Online-Shop")}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mockup Section */}
        <section id="mockup" className="mb-26">
          <h2 className="text-2xl font-bold mb-6 text-center"> Ask About Our Free Mockup Design</h2>
          <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black transition duration-300 ease-in-out transform hover:scale-103">
            <h3 className="font-semibold text-lg text-center">Get Inspiration From Our Design Free Mockups</h3>
            <p className="p-4 text-sm text-center text-gray-500">
              Want to see your design ideas come to life? Ask us about our free mockup options! We&apos;ll take your concept and create a custom mockup design, giving you a realistic preview. To help you visualize the final product, we&apos;ll send you a link where you can view the mockup design. Get inspired by our diverse range of free mockups and discover the potential of your ideas.
            </p>
            <Image src="/img/mockup-website-design.jpg" alt="Free Mockup Website Design" width={1280} height={1024} className="mt-4 mb-4 rounded-lg justify-center" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-26"> {/* Increased bottom margin */}
          <h2 className="text-2xl font-bold mb-6 text-center">What Clients Say</h2> {/* Centered title, increased margin */}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Testimonial Card 1 */}
            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black flex flex-col transition duration-300 ease-in-out transform hover:scale-103"> {/* Increased padding, flex column */}
              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => ( // Loop to create 5 stars
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"> {/* Filled star SVG */}
                    <path fillRule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.424 4.865.707c.847.123 1.184 1.158.57 1.753l-3.52 3.43.832 4.846c.144.843-.74 1.485-1.49.995L10 15.816l-4.34 2.28c-.75.395-1.634-.152-1.49-.995l.832-4.846-3.52-3.43c-.614-.595-.277-1.63.57-1.753l4.865-.707 1.83-4.424Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-gray-300 italic mb-4 flex-grow"> {/* Lighter gray, margin, flex-grow */}
                &quot;Omg you are the freaking best!! The changes has made my life so much easier. I&apos;ll definitely be in contact when I need someone.&quot;
              </blockquote>
              {/* Client Name */}
              <p className="text-sm font-semibold text-gray-400 text-right">- <Link href="https://noelcustoms.shop/">NoelCustoms.shop</Link></p> {/* Smaller, bold, gray, right-aligned */}
            </div>

            {/* Testimonial Card 2 */}
            <div className="border border-gray-700 rounded-lg p-12 shadow-md bg-black flex flex-col transition duration-300 ease-in-out transform hover:scale-103"> {/* Increased padding, flex column */}
              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => ( // Loop to create 5 stars
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"> {/* Filled star SVG */}
                    <path fillRule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.424 4.865.707c.847.123 1.184 1.158.57 1.753l-3.52 3.43.832 4.846c.144.843-.74 1.485-1.49.995L10 15.816l-4.34 2.28c-.75.395-1.634-.152-1.49-.995l.832-4.846-3.52-3.43c-.614-.595-.277-1.63.57-1.753l4.865-.707 1.83-4.424Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              {/* Client Name */}
              <p className="text-sm font-semibold text-gray-400 text-right">- <Link href="https://www.parrisgainer.com/">Dr. Parris Gainer, ParrisGainer.com</Link></p> {/* Smaller, bold, gray, right-aligned */}
            </div>

            {/* Add more testimonial cards here following the same structure */}

          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <div className=" bg-black border border-gray-700 text-white p-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-103"
          >
            <p className="mb-4">Have a project in mind? Reach out to me at:</p>
            <p className="mb-4">
              <Link
                href="mailto:jamil.matheny@majestikmagik.com"
                className="underline hover:text-gray-300"
              >
                jamil.matheny@<br />majestikmagik.com
              </Link> | (804) 362-7561
            </p>
            <p className="mt-4">409 E. Laburnum Ave. Ste #3, Richmond, VA 23222 </p>

            <p className="text-xs text-zinc-800 mt-4 text-end">Designed by Jamil Matheny</p>
          </div>
        </section>
      </main>
    </>
  );
}
