import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy } from "lucide-react";

const blogPostsData = {
  "eight-things-hiring-cleaning-services": {
    id: 1,
    title: "Eight things to consider before hiring professional house cleaning services in Mumbai",
    date: "December 15, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop",
    content: `
      <h2>Introduction</h2>
      <p>Hiring professional house cleaning services in Mumbai can be a game-changer for your busy lifestyle. However, with so many options available, it's crucial to make an informed decision. Here are eight essential things to consider before hiring professional cleaners.</p>

      <h2>1. Experience and Credentials</h2>
      <p>Look for cleaning companies with several years of experience in the industry. Check their certifications, insurance, and background verification of their staff. A reliable company should be transparent about their qualifications and ready to provide references from satisfied customers.</p>

      <h2>2. Services Offered</h2>
      <p>Different cleaning companies offer different services. Some may specialize in deep cleaning, while others focus on regular maintenance. Ensure the company offers the specific services you need, whether it's carpet cleaning, window washing, or eco-friendly cleaning solutions.</p>

      <h2>3. Pricing and Transparency</h2>
      <p>Get detailed quotes from multiple companies. Transparent pricing helps you understand exactly what you're paying for. Avoid companies that offer suspiciously low prices, as quality might be compromised. Always ask about hidden charges and payment terms.</p>

      <h2>4. Eco-Friendly Practices</h2>
      <p>In today's environmentally conscious world, choose companies that use eco-friendly cleaning products. These are safer for your family, pets, and the environment while being equally effective as harsh chemicals.</p>

      <h2>5. Customer Reviews and Ratings</h2>
      <p>Check online reviews on Google, Facebook, and other platforms. Real customer feedback provides valuable insights into the company's reliability, professionalism, and quality of service. Look for consistent positive reviews and how they handle complaints.</p>

      <h2>6. Availability and Flexibility</h2>
      <p>Ensure the cleaning company can accommodate your schedule. Whether you need weekly, bi-weekly, or monthly cleaning, they should be flexible and reliable. Check if they offer emergency cleaning services as well.</p>

      <h2>7. Insurance and Liability</h2>
      <p>Always verify that the cleaning company has proper insurance coverage. This protects you in case of any accidents or damage to your property. Don't hesitate to ask for proof of insurance before hiring.</p>

      <h2>8. Customer Service and Support</h2>
      <p>Good communication is key. Test their customer service by asking questions before hiring. A company that responds promptly and professionally is more likely to provide excellent service throughout your relationship with them.</p>

      <h2>Conclusion</h2>
      <p>Taking time to carefully select a professional cleaning service ensures you get quality work at fair prices. Use this checklist to evaluate your options and find the perfect cleaning partner for your Mumbai home.</p>
    `,
  },
  "residential-cleaning-services-mumbai": {
    id: 2,
    title: "Do opt for residential cleaning services in Mumbai",
    date: "December 10, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1200&h=600&fit=crop",
    content: `
      <h2>Why Residential Cleaning Services Are Essential</h2>
      <p>In the bustling city of Mumbai, time is a precious commodity. Between work, family, and social commitments, maintaining a spotless home can be challenging. Residential cleaning services offer a practical solution to this modern dilemma.</p>

      <h2>The Mumbai Lifestyle Challenge</h2>
      <p>Mumbai's humid climate, pollution, and rapid pace of life make regular cleaning essential. Dust accumulates faster, and the constant environmental stress on your home requires professional attention. Residential cleaning services are specifically designed to tackle these local challenges.</p>

      <h2>Benefits of Professional Residential Cleaning</h2>
      <p><strong>Time-Saving:</strong> Free up your weekends to spend with family instead of scrubbing floors.</p>
      <p><strong>Health Benefits:</strong> Professional cleaners use proper techniques and products to eliminate allergens and bacteria effectively.</p>
      <p><strong>Consistency:</strong> Regular professional cleaning maintains your home's condition better than sporadic DIY efforts.</p>
      <p><strong>Quality Results:</strong> Trained professionals have specialized equipment and knowledge to handle all types of surfaces.</p>

      <h2>Types of Residential Cleaning Services</h2>
      <p><strong>Regular Maintenance Cleaning:</strong> Weekly or bi-weekly services to keep your home fresh and organized.</p>
      <p><strong>Deep Cleaning:</strong> Comprehensive cleaning that targets hard-to-reach areas and stubborn stains.</p>
      <p><strong>Move-In/Move-Out Cleaning:</strong> Perfect for preparing a home before moving or after vacating.</p>
      <p><strong>Spring Cleaning:</strong> Seasonal deep cleaning to refresh your entire home.</p>

      <h2>Choosing the Right Service for Your Home</h2>
      <p>Consider your home's size, layout, and specific cleaning needs. Some families prefer weekly visits, while others opt for monthly deep cleaning sessions. Professional services can customize their offerings to match your requirements and budget.</p>

      <h2>Making the Investment</h2>
      <p>Investing in residential cleaning services is not a luxury—it's a practical decision that enhances your quality of life. The cost is minimal compared to the time, energy, and stress you save.</p>

      <h2>Conclusion</h2>
      <p>For Mumbai residents, professional residential cleaning services are a smart choice. Enjoy a clean home without the hassle and focus on what truly matters in your life.</p>
    `,
  },
  "essential-features-home-cleaning-services": {
    id: 3,
    title: "Some essential features to look for when you are hiring home cleaning services Mumbai",
    date: "December 05, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop",
    content: `
      <h2>What Makes a Great Home Cleaning Service</h2>
      <p>Not all home cleaning services are created equal. To ensure you hire the best service for your Mumbai home, you need to know what features distinguish excellent providers from mediocre ones.</p>

      <h2>1. Professional Training and Certification</h2>
      <p>Look for services whose staff members are professionally trained and certified. This indicates they follow industry standards and best practices for cleaning. Proper training ensures efficient and safe cleaning practices.</p>

      <h2>2. Comprehensive Equipment</h2>
      <p>A good cleaning service invests in modern, efficient equipment. From HEPA-filtered vacuum cleaners to eco-friendly pressure washers, proper tools make a significant difference in cleaning quality and speed.</p>

      <h2>3. Eco-Friendly and Safe Products</h2>
      <p>Essential services use non-toxic, biodegradable cleaning products. These are safe for your family and pets while being effective against dirt and germs. Ask about their product brands and certifications.</p>

      <h2>4. Customizable Service Plans</h2>
      <p>Every home is unique. Look for services that offer customizable cleaning packages tailored to your specific needs, whether you need focus on certain areas or special attention to particular surfaces.</p>

      <h2>5. Reliability and Punctuality</h2>
      <p>A reliable service respects your time. They should arrive on schedule, complete their work efficiently, and maintain consistent quality across visits. Check their track record for reliability.</p>

      <h2>6. Transparent Pricing</h2>
      <p>Avoid hidden charges and unclear pricing structures. The best services provide detailed, written quotes explaining exactly what's included. Transparency builds trust and helps you budget accurately.</p>

      <h2>7. Strong Customer Service</h2>
      <p>Responsive and courteous customer support is essential. Whether you need to reschedule, request special services, or address concerns, the company should be easy to communicate with.</p>

      <h2>8. Insurance and Bonding</h2>
      <p>A legitimate service carries liability insurance and worker's compensation. This protects you and your property in case of accidents. Always verify their insurance coverage before hiring.</p>

      <h2>9. Positive Track Record</h2>
      <p>Check online reviews, testimonials, and ratings on multiple platforms. Consistent positive feedback across different sources indicates reliable, quality service.</p>

      <h2>10. Guarantee of Satisfaction</h2>
      <p>The best services stand behind their work with satisfaction guarantees. If you're not happy with the results, they should be willing to make it right without additional charges.</p>

      <h2>Conclusion</h2>
      <p>When hiring home cleaning services in Mumbai, don't compromise on these essential features. A service that checks all these boxes will ensure your home stays clean, safe, and well-maintained.</p>
    `,
  },
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [showShareMenu, setShowShareMenu] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);

  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;

  const getCurrentUrl = () => {
    return `${window.location.origin}/blog/${slug}`;
  };

  const handleShare = (platform: string) => {
    const url = getCurrentUrl();
    const title = post?.title || "Check out this blog post";
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(title + "\n" + url)}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
      setShowShareMenu(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getCurrentUrl());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner
        title={post.title}
        subtitle="Read the full article"
        backgroundImage={post.image}
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>

          {/* Article Header */}
          <article className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl p-8 md:p-12 mb-8">
            {/* Reddish overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 pointer-events-none rounded-3xl"></div>

            <div className="relative z-10">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b-2 border-white/40">
                <div className="flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2">
                  <User className="w-5 h-5 text-red-600" />
                  <span className="text-gray-700 font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{post.date}</span>
                </div>
                {/* Share Dropdown Menu */}
                <div className="relative ml-auto">
                  <button 
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 hover:bg-green-500/20 transition-colors">
                    <Share2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Share</span>
                  </button>
                  
                  {/* Share Options Menu */}
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl backdrop-blur-2xl bg-white/90 border-2 border-white/80 shadow-xl z-50 p-2">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-500/10 rounded-lg transition-colors text-left group"
                      >
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-blue-600">Facebook</p>
                          <p className="text-xs text-gray-600">Share on Facebook</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-400/10 rounded-lg transition-colors text-left group"
                      >
                        <Twitter className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-blue-400">Twitter</p>
                          <p className="text-xs text-gray-600">Share on Twitter</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-600/10 rounded-lg transition-colors text-left group"
                      >
                        <Linkedin className="w-5 h-5 text-blue-700" />
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-blue-700">LinkedIn</p>
                          <p className="text-xs text-gray-600">Share on LinkedIn</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-green-500/10 rounded-lg transition-colors text-left group"
                      >
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.325 0-2.626-.466-3.676-1.314l-.264-.161-2.743.72.737-2.694-.173-.275C6.067 2.627 7.54 1.953 9.055 1.953c2.92 0 5.29 2.37 5.29 5.291 0 1.41-.564 2.735-1.582 3.722l-.194.189c-.97.85-2.262 1.347-3.594 1.347m8.973-14.953H2.036C.92 0 0 .92 0 2.036v19.928C0 23.08.92 24 2.036 24h19.928C23.08 24 24 23.08 24 21.964V2.036C24 .92 23.08 0 21.964 0z"/>
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-green-600">WhatsApp</p>
                          <p className="text-xs text-gray-600">Share on WhatsApp</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 rounded-lg transition-colors text-left group"
                      >
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-red-600">Email</p>
                          <p className="text-xs text-gray-600">Share via Email</p>
                        </div>
                      </button>
                      <div className="border-t border-white/40 my-2 pt-2">
                        <button
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-500/10 rounded-lg transition-colors text-left group"
                        >
                          <Copy className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="font-bold text-gray-900 group-hover:text-gray-700">
                              {copySuccess ? "Copied!" : "Copy Link"}
                            </p>
                            <p className="text-xs text-gray-600">{copySuccess ? "Link copied" : "Copy article link"}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="space-y-6"
                />
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t-2 border-white/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl">
                      A
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{post.author}</p>
                      <p className="text-gray-600">Cleaning Expert & Consultant</p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles CTA */}
          <div className="rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-red-100/60 via-white/50 to-red-50/60 border-2 border-white/80 shadow-xl p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-white/0 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Want to explore more cleaning tips?
              </h3>
              <p className="text-gray-700 mb-6 font-medium">
                Check out our other blog posts for expert advice on home maintenance.
              </p>
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Browse All Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
