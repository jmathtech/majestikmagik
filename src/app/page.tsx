'use client';

/* Majestik Magik - Home Page */
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import RocketScene from './components/RocketScene';
import MoonScene from './components/MoonScene';

/* Font Awesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  // State to manage mobile menu visibility
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu
  const buttonRef = useRef<HTMLButtonElement>(null); //   Ref for the button

  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Feature-specific state
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing display state
  const [showStarterSparkPrice, setShowStarterSparkPrice] = useState(false);
  const [showMagikWeaverPrice, setShowMagikWeaverPrice] = useState(false);
  const [showGrandArchitectPrice, setShowGrandArchitectPrice] = useState(false);

  // Define your base monthly prices
  const prices = {
    basic: {
      monthlyPrice: 49.99,
      monthlyLink: "https://checkout.majestikmagik.com/b/dRmcN48Yo0aFb9Agerf7i04",
      annualLink: "https://checkout.majestikmagik.com/b/4gM8wOdeEf5z4Lc3rFf7i09", // <--- Replace with actual ANNUAL link for Basic
    },
    standard: {
      monthlyPrice: 99.99,
      monthlyLink: "https://checkout.majestikmagik.com/b/5kQbJ0caA5uZdhId2ff7i05",
      annualLink: "https://checkout.majestikmagik.com/b/00w5kC7Uk6z3elMgerf7i07", // <--- Replace with actual ANNUAL link for Standard
    },
    premium: {
      monthlyPrice: 199.99,
      monthlyLink: "https://checkout.majestikmagik.com/b/14AdR8eiI0aFelMe6jf7i06",
      annualLink: "https://checkout.majestikmagik.com/b/aFa3cufmMbTn3H81jxf7i0a", // <--- Replace with actual ANNUAL link for Premium
    },
  };

  // Calculate annual prices (with a hypothetical 10% discount for annual plans)
  const getAnnualPrice = (monthlyPrice: number) => {
    return (monthlyPrice * 12 * 0.999).toFixed(0); // 10% discount for annual
  };

  // -- START: Cookie Banner Logic --
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cookieConsent', '');
      }

      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error accepting cookies:', error);
    } finally {
      setShowCookieBanner(false);
    }
  };
  // -- END: Cookie Banner -- 



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

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Cleanup function to remove event listeners

  return (
    <>
      <div>
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
              ${isScrolled ? 'text-xl' : 'text-2xl'}
            `}>

                  <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent opacity-100 transition-opacity duration-2000 hover:opacity-40 hover:from-blue-400 hover:to-purple-900">
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
              className={`px-4 py-4 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

              Portfolio
            </Link>
            <Link
              href="#design"
              className={`px-4 py-4 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

              Design
            </Link>
            <Link
              href="#services"
              className={`px-4 py-4 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

              Services
            </Link>
            <Link
              href="#testimonials"
              className={`px-4 py-4 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`px-4 py-4 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-sm' : 'text-md'}`}>

              Contact
            </Link>
          </nav>

          {/* Hamburger Menu Button (Visible only on small screens) */}
          <div className="lg:hidden"> {/* This container is hidden on medium screens and up */}
            <button
              ref={buttonRef} // Attach the button ref
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 rounded-md p-2 cursor-pointer"
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
          className={`lg:hidden fixed inset-x-0 bg-black text-white flex flex-col items-center gap-4 py-16 transition-transform duration-600 ease-in-out transform z-15 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full' // Slide down/up animation
            } ${isScrolled ? 'top-12' : 'top-16' // Adjust padding based on scroll state
            }`}
        >
          <Link href="#portfolio" className="px-4 py-2 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Portfolio</Link>
          <Link href="#design" className="px-4 py-2 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Design</Link>
          <Link href="#services" className="px-4 py-2 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Services</Link>
          <Link href="#testimonials" className="px-4 py-2 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Testimonials</Link>
          <Link href="#contact" className="px-4 py-2 rounded-md font-normal transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}>Contact</Link>
        </nav>


        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-8 px-4 ">

          {/* === Hero Section Start === */}
          <section className="text-center py-16 md:py-24 lg:py-32 mb-12 relative"> {/* Added padding and bottom margin */}

            <div className="absolute inset-0 flex justify-center items-center z-5"> {/* z-0 relative to its parent (the z-10 div) */}
              {/* Adjust size of the moon as needed. It will be centered within the 'inset-0' div. */}
              <div style={{ width: '900px', height: '900px' }}> {/* Example size, adjust as needed */}
                <MoonScene modelPath="/models/moon.glb" spinSpeed={0.0007} />
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <RocketScene />
              <h2 className="text-4xl md:text-5xl lg:text-8xl mb-4 font-bold
             bg-gradient-to-r from-blue-400 via-blue-400 to-purple-900 
             [-webkit-background-clip:text] 
             bg-clip-text text-transparent
             select-none
          ">
                Crafting Digital Excellence
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl font-semibold mx-auto"> {/* Subheading styling */}
                Overcome digital hurdles with accelerating, impactful and scalable web solutions designed for growth.
              </p>
              <Link
                href="#services"
                className="inline-flex items-center bg-gradient-to-r bg-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105" // Styled CTA button
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </section>
          {/* === Hero Section End === */}

          {/* Portfolio Section */}
          <section id="portfolio" className="mb-26">
            <h2 className="text-4xl font-bold text-center mb-4">Website Portfolio</h2>
            <p className="text-md text-gray-300 mb-6 text-center">
              Explore my latest web development projects for real clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-102"
              >
                <div className="bg-black h-full rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg">CearcoChemicals.com</h3>
                  <Image src="/img/cearcochemicals_screenshot.webp" alt="CearcoChemicals.com" width={570} height={370} className="rounded-md mt-4 mb-4 cursor-pointer" onClick={() => (window.location.href = "https://cearcochemicals.com")} />

                  <p className="text-sm text-gray-300">
                    Cleaning Equipment & Repair Company is a locally owned business out of Richmond, Virginia. CEARCO has been established since 1981. We make specialty blended cleaning solutions that are not powdered- based. All of our specialty blended solutions are liquid-based. With this said, we have remained faithful to the original formulas.
                    <br /><br />
                    <b>Website Project:</b><br />
                    Made with the React JS framework and Vanilla CSS.
                  </p>
                  <div className="text-right">
                    <button
                      className="btn mt-4 bg-blue-500 transition-colors duration-600 ease-in-out font-bold text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                      onClick={() => (window.location.href = "https://cearcochemicals.com")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-102"
              >
                <div className="bg-black h-full rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg">ParrisGainer.com</h3>
                  <Image src="/img/parrisgainer_screenshot.webp" alt="ParrisGainer.com" width={570} height={370} className="rounded-md mt-4 mb-4 cursor-pointer" onClick={() => (window.location.href = "https://parrisgainer.com")} />

                  <p className="text-sm text-gray-300">
                    Parris Gainer relocated to Richmond VA in 2007 where she continued her private practice and community work. Dr. Parris Gainer has extensive work experience in program administration, community and school mental health, behavior modification and resolution counseling.
                    <br /><br />
                    <b>Website Project:</b><br />
                    Made with the React JS framework, Tailwind CSS, and Wordpress CMS.
                  </p>
                  <div className="text-right">
                    <button
                      className="btn mt-4 bg-blue-500 transition-colors duration-600 ease-in-out font-bold text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                      onClick={() => (window.location.href = "https://parrisgainer.com")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-102"
              >
                <div className="bg-black h-full rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg">Cleaning.MajestikMagik.com</h3>
                  <Image src="/img/cleaningmajestikmagik.webp" alt="Cleaning Majestik Magik" width={570} height={370} className="rounded-md mt-4 mb-4 cursor-pointer" onClick={() => (window.location.href = "https://cleaning.majestikmagik.com")} />
                  <p className="text-sm text-gray-300">
                    Let&apos;s bring cleanliness & comfort to your space.
                    <br /><br />
                    <b>Website Project:</b><br />
                    Made with the Next.js framework (javascript/typescript), Tailwind CSS, AWS RDS, and deployed onVercel hosting.</p>
                  <div className="text-right">
                    <button
                      className="btn mt-4 bg-blue-500 transition-colors duration-600 ease-in-out font-bold text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer inline-block"
                      onClick={() => (window.location.href = "https://cleaning.majestikmagik.com")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-102"
              >
                <div className="bg-black h-full rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-lg">Zeus Suit Shop (Mock Design)</h3>
                  <video
                    width="570" // Keep width
                    height="370" // Keep height (adjust aspect ratio if needed)
                    controls // Add controls (play/pause, volume, etc.)
                    className="rounded-md mt-4 mb-4" // Keep styling
                  >
                    <source src="https://user-images.githubusercontent.com/36749450/182264129-b7336ab1-84e3-46f1-a5e9-2cef906c0cd5.mp4" type="video/mp4" />
                    Your browser does not support the video tag. {/* Fallback text */}
                  </video>
                  <p className="text-sm text-gray-300">
                    An ecommerce website for a clothing store. A custom front-end ReactJS E-Commerce website for a tailored suits shop.
                    <br /><br />
                    <b>Website Project:</b><br />
                    Made with the React JS and Material UI framework.</p>
                  <div className="text-right">
                    <button
                      className="btn mt-4 bg-blue-500 transition-colors duration-600 ease-in-out font-bold text-white px-4 py-2 rounded-md bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer end inline-block"
                      onClick={() => (window.location.href = "https://github.com/jmathtech/Zeus-Suits-Online-Shop")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Mockup Section */}
          <section id="design" className="mb-26">
            <h2 className="text-4xl font-bold mb-6 text-center"> Ask About Our Free Mockup Design</h2>
            <div
              className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-102"
            >
              {/* Inner div for content with its own background */}
              <div className="bg-black rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-center">Get Inspiration From Our Design Free Mockups</h3>
                <p className="p-4 text-sm text-center text-gray-300">
                  Want to see your design ideas come to life? Ask us about our free mockup options! We&apos;ll take your concept and create a custom mockup design, giving you a realistic preview. To help you visualize the final product, we&apos;ll send you a link where you can view the mockup design. Get inspired by our diverse range of free mockups and discover the potential of your ideas.
                </p>
                <Image src="/img/mockup-website-design.jpg" alt="Free Mockup Website Design" width={1280} height={1024} className="mt-4 mb-4 rounded-lg justify-center" />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-26">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Services</h2>
            <div
              className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-101"
            >
              <div className="bg-black rounded-lg p-6 shadow-md">
                <p className="p-4 text-lg text-center text-gray-300">
                  We offer <b>FREE consultation</b> and a range of services to help you achieve your online goals. Our services include:
                </p>

                <div className="text-center font-bold text-white text-xl m-6">Technical Support Services</div>
                {/* Monthly/Annual Switch */}
                <div className="flex justify-center mb-10">
                  <div className="relative inline-flex rounded-full bg-gray-800 p-1">
                    <button
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer duration-300 ${!isAnnual ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      onClick={() => setIsAnnual(false)}
                    >
                      Monthly
                    </button>
                    <button
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer duration-300 ${isAnnual ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      onClick={() => setIsAnnual(true)}
                    >
                      Annually
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                  {/* Tier 1: Basic Maintenance */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 flex flex-col">
                    <Image src="/img/web-maintenance_01.png" alt="Basic Maintenance" width={192} height={192} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Basic Maintenance Plan</h3>
                    <p className="text-gray-400 mb-4">Perfect for active personal sites and small blogs. Ensures your website stays updated and secure with fundamental maintenance.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: Personal Websites, Basic Blogs</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>Core WordPress Updates</li>
                      <li>Plugin & Theme Updates</li>
                      <li>Weekly Database Backups</li>
                      <li>Basic Security Scans</li>
                      <li>Uptime Monitoring (24/7)</li>
                      <li>Basic Performance Checks</li>
                      <li>Email/Phone Support (48-hour response)</li>
                      <li>1 Website</li>
                      <li>All-access: Tech video training resources</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-blue-500">
                        ${isAnnual ? getAnnualPrice(prices.basic.monthlyPrice) : prices.basic.monthlyPrice}
                        {isAnnual ? '/yr' : '/mo'}
                      </span>
                      <Link href={isAnnual ? prices.basic.annualLink : prices.basic.monthlyLink} passHref>
                        <button className="transition duration-300 ease-in-out bg-gradient-to-r cursor-pointer bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Subscribe</button>
                      </Link>
                    </div>
                  </div>

                  {/* Tier 2: Standard/Growth Plan */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 relative flex flex-col">
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-sm font-bold py-1 px-2 rounded-full">Best Deal</span>
                    <Image src="/img/web-maintenance_02.png" alt="Standard/Growth Plan" width={192} height={192} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Standard/Growth Plan</h3>
                    <p className="text-gray-400 mb-4">Ideal for active small business websites and active blogs. Includes advanced security, performance boosts, and limited content updates.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: Small Businesses, Growing Blogs</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>All Basic Maintenance features</li>
                      <li>Daily File & Database Backups</li>
                      <li>Advanced Security Monitoring & Hardening</li>
                      <li>Malware Scanning & Removal</li>
                      <li>Performance Optimization (Caching, Image Opt.)</li>
                      <li>Small Content Edits (Up to 1 hour/month)</li>
                      <li>Broken Link Monitoring</li>
                      <li>Priority Email/Phone Support (24-hour response)</li>
                      <li>1 Website</li>
                      <li>All-access: Tech video training resources</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-blue-500">
                        ${isAnnual ? getAnnualPrice(prices.standard.monthlyPrice) : prices.standard.monthlyPrice}
                        {isAnnual ? '/yr' : '/mo'}
                      </span>
                      <Link href={isAnnual ? prices.standard.annualLink : prices.standard.monthlyLink} passHref>
                        <button className="transition duration-300 ease-in-out bg-gradient-to-r cursor-pointer bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Subscribe</button>
                      </Link>
                    </div>
                  </div>

                  {/* Tier 3: Premium/Proactive/E-commerce Plan */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 flex flex-col">
                    <Image src="/img/web-maintenance_03.png" alt="Premium/Proactive/E-commerce Plan" width={192} height={192} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Premium/Proactive/E-commerce Plan</h3>
                    <p className="text-gray-400 mb-4">Comprehensive support for active e-commerce and high-traffic sites. Maximum security, performance, and dedicated strategic partnership.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: E-commerce, High-Traffic Sites, Critical Websites</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>All Standard/Growth Plan features</li>
                      <li>Real-time Security Monitoring</li>
                      <li>24/7 Uptime & Performance Monitoring</li>
                      <li>Emergency 4-Hour Response Time</li>
                      <li>Proactive Site Audits (Quarterly)</li>
                      <li>Content Updates (Up to 3 hours/month)</li>
                      <li>Staging Environment Management</li>
                      <li>Advanced SEO Monitoring</li>
                      <li>Phone Support</li>
                      <li>Up to 3 Websites</li>
                      <li>All-access: Tech video training resources</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-2xl font-bold text-blue-500">
                        ${isAnnual ? getAnnualPrice(prices.premium.monthlyPrice) : prices.premium.monthlyPrice}
                        {isAnnual ? '/yr' : '/mo'}
                      </span>
                      <Link href={isAnnual ? prices.premium.annualLink : prices.premium.monthlyLink} passHref>
                        <button className="transition duration-300 ease-in-out bg-gradient-to-r cursor-pointer bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Subscribe</button>
                      </Link>
                    </div>
                  </div>

                </div>
                <div className="text-center font-bold text-white text-xl m-8">Website Design & Development Services</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter Spark */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 flex flex-col">
                    <Image src="/img/webdesign_01.png" alt="Starter Spark" width={192} height={192} className="w-full mb-4" />

                    <h3 className="text-xl font-semibold mb-2 text-white">Starter Spark</h3>
                    <p className="text-gray-400 mb-4">Ideal for launching a basic online presence. Get a simple, responsive website (up to 3 sections) with essential features like a contact form, basic SEO, and analytics to get you started.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: Simple Landing Pages, Small Businesses</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>Custom Website Design: Basic, Up to 3 Sections</li>
                      <li>Responsive Design: Included</li>
                      <li>Content Integration: Basic Text & Images</li>
                      <li>SEO Optimization: Basic On-Page</li>
                      <li>Mobile Optimization: Included</li>
                      <li>Contact Form: Included</li>
                      <li>Social Media Integration: Basic Icons</li>
                      <li>Analytics Setup: Basic Google Analytics</li>
                      <li>CMS Integration: WordPress or Drupal Basic Setup</li>
                      <li>Technology Stack: HTML, CSS, JavaScript</li>
                      <li>E-commerce Ready: Optional (Simple Setup)</li>
                      <li>Revisions: 1 Round</li>
                      <li>Initial Consultation: Included</li>
                      <li>Post-Launch Support: 5 days</li>
                      <li>Estimated Timeline: 3-5 days</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      {showStarterSparkPrice ? (
                        <span onClick={() => setShowStarterSparkPrice(false)} className="text-2xl font-bold cursor-pointer text-blue-500 animate-flipIn">${(1500).toLocaleString()}</span>
                      ) : (
                        <button
                          onClick={() => setShowStarterSparkPrice(true)}
                          className="transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-600 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          See Price
                        </button>)}
                      <Link href="https://checkout.majestikmagik.com/b/eVqdR83E41eJdhI4vJf7i01"><button className="transition duration-300 ease-in-out bg-gradient-to-r bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy Now</button></Link>
                    </div>
                  </div>

                  {/* Magik Weaver */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 relative flex flex-col">
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black text-sm font-bold py-1 px-2 rounded-full">Best Deal</span>
                    <div className="flex justify-center mb-2">
                      {/* You can add an icon here if you have one */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 4v-2m3-2v-2M6 19h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zM3 21h18M5 3h14M5 5h14M3 7h18" />
                      </svg>
                    </div>
                    <Image src="/img/webdesign_02.png" alt="Magik Weaver" width={192} height={192} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Magik Weaver</h3>
                    <p className="text-gray-400 mb-4">Perfect for growing businesses needing a more engaging online presence. Includes a modern, responsive website (up to 7 sections), comprehensive API & content integration, enhanced SEO, social media integration, and basic e-commerce capabilities.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: Growing Businesses, Custom Features</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>Custom Website Design: Modern, Up to 7 Sections</li>
                      <li>Responsive Design: Included</li>
                      <li>AWS / Google Cloud Integration: Included (Instance fees may apply outside of scope) </li>
                      <li>Content Integration: Comprehensive Content Integration</li>
                      <li>SEO Optimization: Enhanced On-Page & Technical</li>
                      <li>Mobile Optimization: Included</li>
                      <li>Contact Form: Included</li>
                      <li>Social Media Integration: Enhanced Integration</li>
                      <li>Analytics Setup: Advanced Analytics & Tracking</li>
                      <li>CMS Integration: WordPress or Drupal Advanced Setup & Customization</li>
                      <li>Technology Stack: React, Next.js, TypeScript (Basic)</li>
                      <li>E-commerce Integration: Shopify or WooCommerce (Up to 10 Products)</li>
                      <li>Custom Features: Up to 3 Basic Features</li>
                      <li>Revisions: 3 Rounds</li>
                      <li>Initial Consultation: Included</li>
                      <li>Post-Launch Support: 1 Month (Standard)</li>
                      <li>Estimated Timeline: 7-10 days</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      {showMagikWeaverPrice ? (
                        <span onClick={() => setShowMagikWeaverPrice(false)} className="text-2xl cursor-pointer font-bold text-blue-500 animate-flipIn">${(4000).toLocaleString()}</span>
                      ) : (
                        <button
                          onClick={() => setShowMagikWeaverPrice(true)}
                          className="transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-600 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          See Price
                        </button>)}

                      <Link href="https://checkout.majestikmagik.com/b/00w5kCeiI6z32D49Q3f7i02"><button className="transition duration-300 ease-in-out bg-gradient-to-r bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy Now</button></Link>
                    </div>
                  </div>

                  {/* Grand Architect */}
                  <div className="border border-gray-700 mb-10 rounded-lg p-4 shadow-md bg-[#0d2e4f] transition duration-300 ease-in-out transform hover:scale-103 flex flex-col">
                    <Image src="/img/webdesign_03.png" alt="Grand Architect" width={192} height={192} className="w-full mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Grand Architect</h3>
                    <p className="text-gray-400 mb-4">For complex projects and businesses requiring a fully customized and scalable online solution. Offers a bespoke, responsive website with unlimited sections, advanced content management options (including Headless CMS), in-depth SEO strategy, full social media integration, and ongoing priority support.</p>
                    <p className="text-gray-400 mb-2 font-semibold">Best For: Complex Projects, Ongoing Support</p>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <ul className="text-gray-400 mb-2 space-y-1 list-disc list-inside custom-checklist">
                      <li>Custom Website Design: Bespoke, Unlimited Sections</li>
                      <li>Responsive Design: Included</li>
                      <li>AWS / Google Cloud Integration: Included (Instance fees may apply outside of scope) </li>
                      <li>Content Integration: Advanced Content Migration & Setup</li>
                      <li>SEO Optimization: Advanced SEO Strategy & Implementation</li>
                      <li>Mobile Optimization: Included</li>
                      <li>Contact Form: Included</li>
                      <li>Social Media Integration: Full Platform Integration</li>
                      <li>Analytics Setup: Custom Reporting & Insights</li>
                      <li>CMS Integration: Wordpress or Headless CMS (Next.js/Drupal) Options</li>
                      <li>Technology Stack: React, Next.js, TypeScript (Advanced)</li>
                      <li>E-commerce Integration: Shopify or WooCommerce (Up to 10 Products)</li>
                      <li>Custom Features: Unlimited & Complex Features</li>
                      <li>Revisions: Unlimited Small Revisions</li>
                      <li>Initial Consultation: Included</li>
                      <li>Post-Launch Support: 3 Months (Priority)</li>
                      <li>Estimated Timeline: 12-15 days</li>
                    </ul>
                    <hr className="text-gray-800 mt-4 mb-4" />
                    <div className="flex items-center justify-between mt-auto">
                      {showGrandArchitectPrice ? (
                        <span onClick={() => setShowGrandArchitectPrice(false)} className="text-2xl font-bold cursor-pointer text-blue-500 animate-flipIn">${(8000).toLocaleString()}</span>
                      ) : (
                        <button
                          onClick={() => setShowGrandArchitectPrice(true)}
                          className="transition duration-300 ease-in-out bg-gray-700 hover:bg-gray-600 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          See Price
                        </button>)}
                      <Link href="https://checkout.majestikmagik.com/b/8x2fZg6QgaPj4Lcgerf7i03"><button className="transition duration-300 ease-in-out bg-gradient-to-r bg-blue-500 hover:from-blue-600 hover:to-purple-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Buy Now</button>
                      </Link></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="mb-26"> {/* Increased bottom margin */}
            <h2 className="text-4xl font-bold mb-6 text-center">What Clients Say</h2> {/* Centered title, increased margin */}

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Testimonial Card 1 */}
              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-103"
              >
                <div className="bg-black h-full rounded-lg p-6 shadow-md">
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
                  <p className="text-sm font-semibold text-gray-400 text-right">- <Link href="https://noelcustoms.shop/" className="hover:text-gray-200 transition duration-900 ease-in-out">NoelCustoms.shop</Link></p> {/* Smaller, bold, gray, right-aligned */}
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div
                className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-103"
              >
                <div className="bg-black h-full rounded-lg p-6 shadow-md">
                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => ( // Loop to create 5 stars
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400"> {/* Filled star SVG */}
                        <path fillRule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.424 4.865.707c.847.123 1.184 1.158.57 1.753l-3.52 3.43.832 4.846c.144.843-.74 1.485-1.49.995L10 15.816l-4.34 2.28c-.75.395-1.634-.152-1.49-.995l.832-4.846-3.52-3.43c-.614-.595-.277-1.63.57-1.753l4.865-.707 1.83-4.424Z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  {/* Client Name */}
                  <p className="text-sm font-semibold text-gray-400 text-right">- <Link href="https://www.parrisgainer.com/" className="hover:text-gray-200 transition duration-900 ease-in-out">Dr. Parris Gainer, ParrisGainer.com</Link></p> {/* Smaller, bold, gray, right-aligned */}
                </div>
              </div>
              {/* Add more testimonial cards here following the same structure */}

            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="text-center">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div
              className="relative rounded-lg p-px
                         bg-gray-700             
                         hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600
                         transition-all duration-300 ease-in-out transform hover:scale-103"
            >
              <div className="bg-black h-full rounded-lg p-6 shadow-md">
                <p className="mb-12 font-bold">Do you have a web design project you want to take to the next level? <br /> Contact us for a free consultation today!</p>
                <p className="mb-2">Majestik Magik</p>
                <p className="mb-2">405 E. Laburnum Ave Ste #3</p>
                <p className="mb-2">Richmond, VA 23222</p>
                <p className="mb-2"><Link href="mailto:jamil.matheny@majestikmagik.com" className="hover:text-gray-600 transition duration-900 ease-in-out">jamil.matheny@majestikmagik.com</Link></p>
                <p className="mb-4">804.362.7561</p>

                <iframe
                  src="https://climate.stripe.com/badge/QjbCfj?theme=dark&size=large&locale=en-US"
                  className="block mx-auto w-[280px] h-[112px] md:w-[380px] md:h-[82px]"
                  title="Stripe Climate Badge"
                ></iframe>
                <p className="text-xs text-zinc-800 mt-4 text-end">Designed by Jamil Matheny</p>
              </div>
            </div>
          </section>


          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 text-center gap-4 text-sm text-gray-200">
            <Link href="/privacy-policy" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Privacy Policy</Link>
            <Link href="/refund-policy" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Refund Policy</Link>
            <Link href="/cookie-policy" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Cookie Policy</Link>
            <Link href="/intellectual-property-policy" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Intellectual Property Policy</Link>
            <Link href="/cyber-security" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Cyber Security</Link>
            <Link href="/terms-of-service" className={`p-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Terms of Service</Link>
          </div>
          <div className="mt-8 text-center text-white">
            <Link href="https://www.facebook.com/majestikmagik" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" /></Link>
            <Link href="https://www.instagram.com/majestikmagik" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" /></Link>
            <Link href="https://www.github.com/jmathtech" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faGithub} className="text-white text-2xl" /></Link>
            <Link href="https://www.upwork.com/agencies/1927235353871883315/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition-all duration-600 ease-in-out hover:bg-gray-700 w-full text-center" onClick={toggleMobileMenu}><FontAwesomeIcon icon={faUpwork} className="text-white text-2xl" />
            </Link>
          </div>
          <div className="text-center mt-4 text-sm text-gray-200">
            <p>&copy; {new Date().getFullYear()} Majestik Magik. All rights reserved.</p>
          </div>
        </main>
      </div>

      {/* Cookie Banner */}
      {
        showCookieBanner && (
          <>
            {/* Dimming Overlay */}
            <div className="fixed inset-0 bg-black opacity-30 z-40 transition-opacity duration-300 ease-in-out"></div>

            {/* Actual Cookie Banner Content (Solid Background) */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0d2e4f] border-t border-gray-600 text-white p-8 shadow-lg z-50 flex flex-col sm:flex-row justify-between items-center transition-opacity duration-300 ease-in-out">
              <p className="text-xs mb-2 sm:mb-0 sm:mr-4">
                We use cookies to enhance your experience and analyze site traffic. By clicking “Accept” or continuing to use this site, you consent to our use of cookies. Learn more in our Cookie Policy.
              </p>
              {/* Button Group */}
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 sm:mt-0"> {/* Manages button layout and spacing */}
                <button
                  onClick={handleAcceptCookies}
                  className="btn bg-blue-400 transition-colors duration-600 ease-in-out text-white text-xs px-4 py-2 rounded-md border border-gray-600 bg-gradient-to-r hover:from-blue-400 hover:to-purple-950 hover:cursor-pointer w-full sm:w-auto"
                >
                  Accept
                </button>
                <button
                  onClick={handleDeclineCookies}
                  className="btn bg-black transition-colors duration-600 ease-in-out text-white text-xs px-4 py-2 rounded-md border border-gray-600 bg-gradient-to-r hover:from-black hover:to-purple-950 hover:cursor-pointer w-full sm:w-auto"
                >
                  Decline
                </button>
                <Link href="/cookie-policy" className="w-full sm:w-auto"> {/* Ensure Link also adapts width */}
                  <button className="btn bg-black transition-colors duration-600 ease-in-out text-white text-xs px-4 py-2 rounded-md border border-gray-600 bg-gradient-to-r hover:from-black hover:to-purple-950 hover:cursor-pointer w-full">Cookie Policy</button>
                </Link>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}
