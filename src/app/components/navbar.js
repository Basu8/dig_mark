// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-5 bg-white shadow-md">
//       <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
//         <Image src="/logo.jpg" alt="Marketing Logo" width={70} height={80} />
//       </h1>
//       <div className="space-x-4">
//         <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
//         <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
//         <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
//         <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
//         <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
//       </div>
//     </nav>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      {/* Logo and Branding */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpg"
          alt="Marketing Logo"
          width={60}
          height={80}
          priority
        />
        <span className="text-2xl font-bold text-blue-600"></span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link href="/services" className="text-gray-700 hover:text-blue-600">
          Services
        </Link>
        <Link href="/portfolio" className="text-gray-700 hover:text-blue-600">
          Portfolio
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
}
