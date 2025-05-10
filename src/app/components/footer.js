import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DigiMark</h2>
          <p className="text-sm opacity-80">
            We craft digital marketing strategies that build brands and drive growth.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm opacity-80">Email: digimarkltd4@gmail.com</p>
          {/* <p className="text-sm opacity-80">Phone: +91 98765 43210</p> */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} DigiMarkltd. All Rights Reserved.
      </div>
    </footer>
  );
}
