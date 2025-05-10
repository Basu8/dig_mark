import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/footer'; // Updated import path

export const metadata = {
  title: '5 Useful Tips for Social Media Marketing | DigiMark',
  description: 'Expert insights from DigiMark on effective social media marketing strategies',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <article className="max-w-4xl mx-auto px-4 py-12 flex-grow">
        {/* Featured Image with added top padding */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg mt-8">
          <Image
            src="/digimarket.jpg"
            alt="Social Media Marketing Strategy"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          5 Useful Tips for Social Media Marketing: Expert Insights from DigiMark
        </h1>

        {/* Introduction */}
        <div className="prose prose-lg mb-12">
          <p>
            In today&apos;s digital world, social media has become an essential tool for businesses to engage with their audience, 
            build brand awareness, and drive sales. Whether you&apos;re a startup or an established business, mastering social 
            media marketing can give you the edge you need to stay competitive.
          </p>
        </div>

        {/* Tip 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Set Clear, Measurable Goals</h2>
          <div className="prose">
            <p>
              Before diving into social media marketing, it&apos;s crucial to have a clear vision of what you want to achieve. 
              Whether it&apos;s increasing brand awareness, generating leads, or driving traffic to your website, having defined 
              objectives helps guide your efforts and measure success.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700">Tip:</p>
              <p>
                Use specific, measurable, attainable, relevant, and time-bound (SMART) goals for your social media campaigns. 
                For example, &quot;Increase Instagram followers by 15% in the next three months.&quot;
              </p>
            </div>
            <p>
              At DigiMark, we work with businesses to create customized social media 
              strategies with clear KPIs that align with their overall marketing goals.
            </p>
          </div>
        </section>

        {/* Tip 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Understand Your Target Audience</h2>
          <div className="prose">
            <p>
              One of the most important elements of social media marketing is knowing who your audience is. Different platforms 
              attract different demographics, so understanding your target market is key to creating content that resonates with them.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700">Tip:</p>
              <p>
                Research your audience&apos;s preferences, behaviors, and interests using tools like social media analytics or audience insights.
              </p>
            </div>
          </div>
        </section>

        {/* Tip 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Create Engaging, High-Quality Content</h2>
          <div className="prose">
            <p>
              Content is king in the world of social media marketing. High-quality, engaging content not only attracts attention but also keeps your audience coming back for more.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700">Tip:</p>
              <p>
                Vary your content types to keep things fresh—use a mix of blog posts, infographics, behind-the-scenes content, and user-generated content.
              </p>
            </div>
          </div>
        </section>

        {/* Tip 4 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Consistency is Key</h2>
          <div className="prose">
            <p>
              When it comes to social media marketing, consistency is essential. Posting regularly helps keep your brand top-of-mind for your audience.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700">Tip:</p>
              <p>
                Create a content calendar to plan and schedule posts in advance.
              </p>
            </div>
          </div>
        </section>

        {/* Tip 5 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Analyze and Adapt Your Strategy</h2>
          <div className="prose">
            <p>
              A successful social media marketing strategy is not static. It&apos;s important to continually monitor your performance and adapt your strategy.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-700">Tip:</p>
              <p>
                Use tools like Google Analytics and Facebook Insights to track your campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose DigiMark */}
        <section className="bg-gray-50 p-6 rounded-xl mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose DigiMark as Your Social Media Marketing Agency?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Expertise and Experience:</strong> Our team has years of experience helping businesses thrive</li>
            <li><strong>Tailored Strategies:</strong> Customized approaches for each business</li>
            <li><strong>Proven Track Record:</strong> Demonstrated success with numerous clients</li>
            <li><strong>Comprehensive Approach:</strong> End-to-end solutions from strategy to execution</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
          >
            Contact DigiMark Today
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}