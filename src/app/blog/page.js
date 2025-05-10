// app/blog/page.js
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-3xl font-bold mb-8">Marketing Insights</h1>
          
          <div className="space-y-8">
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition">
              <Link href="/blog/5-useful-tips-social-media-marketing">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src="/graph.jpg"
                      alt="Social Media Tips"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-2xl font-bold mb-2">
                      5 Useful Tips for Social Media Marketing
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Expert insights from DigiMark on effective social media strategies
                    </p>
                    <span className="text-blue-600 hover:underline">Read Article →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}