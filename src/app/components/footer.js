import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Marketing Agency</h2>
          <p className="text-sm text-gray-400">
            We help businesses grow with our creative digital marketing solutions.  
            <br />
            From SEO to Meta Ads, we do it all.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">📞 +91 9876543210</p>
          <p className="text-sm text-gray-400">📧 info@marketingagency.com</p>
          <p className="text-sm text-gray-400">📍 Bengaluru, India</p>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-gray-400 hover:text-white text-xl" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-gray-400 hover:text-white text-xl" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-gray-400 hover:text-white text-xl" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      {/* <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Marketing Agency. All Rights Reserved.
      </div> */}
      <footer className="bg-gray-900 text-white text-center p-4">
      <p>© 2025 Digital Marketing Agency. All rights reserved.</p>
    </footer>
    </footer>
  );
}
