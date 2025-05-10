import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section with Gradient Overlay */}
        <div className="w-full h-[70vh] relative bg-gray-900">
          <Image
            src="/about.jpg"
            alt="About Us Banner"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-white max-w-2xl">
              Helping businesses thrive in the digital world
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16 md:py-24">
          {/* About DigiMark Section */}
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-auto aspect-[4/3] rounded-xl shadow-xl overflow-hidden">
                <Image
                  src="/image.jpeg"
                  alt="Digital Marketing Illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Who we are
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Your Partner in Digital Success
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to DigiMark, a dynamic and innovative digital marketing agency dedicated to helping businesses thrive in the digital world. Whether you&apos;re a startup looking to establish an online presence, or an established brand aiming to grow and innovate, we have the right solutions for you.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in SEO (Search Engine Optimization), SMM (Social Media Marketing), Website Development, and much more. Our goal is to elevate your business by increasing visibility, driving traffic, and converting leads into loyal customers.
              </p>
            </div>
          </div>

          {/* Mission and Values */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                Our Purpose
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Driving Growth Through Digital Innovation
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                At DigiMark, our mission is to empower businesses to succeed by providing data-driven, customized digital marketing solutions. We focus on building lasting relationships with our clients and driving tangible results.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-600">To provide data-driven, customized digital marketing solutions that deliver real results</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-600">To be a leading digital marketing agency known for driving growth and innovation</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Approach</h3>
                  <p className="text-gray-600">Client-centered strategies tailored to your unique business needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                The Digital Marketing Advantage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results for your business.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Expertise & Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team consists of experienced professionals who stay updated with the latest digital marketing trends and techniques to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Customized Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand that every business is unique. We tailor our services to meet your specific needs and goals, ensuring the best possible outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-blue-50 p-4 rounded-full flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Results-Driven</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are focused on delivering measurable results. Our strategies are designed to drive real outcomes and ensure your business thrives in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="bg-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Grow Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              At DigiMark, we are committed to helping your business reach its full potential in the digital landscape.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}