import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Eight things to consider before hiring professional house cleaning services in Mumbai",
    date: "December 15, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop",
    slug: "eight-things-hiring-cleaning-services",
  },
  {
    id: 2,
    title: "Do opt for residential cleaning services in Mumbai",
    date: "December 10, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=250&fit=crop",
    slug: "residential-cleaning-services-mumbai",
  },
  {
    id: 3,
    title: "Some essential features to look for when you are hiring home cleaning services Mumbai",
    date: "December 05, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=250&fit=crop",
    slug: "essential-features-home-cleaning-services",
  },
];

const Blog = () => {
  const handleReadMore = (slug: string) => {
    // Navigate to blog detail page
    window.location.href = `/blog/${slug}`;
  };

  return (
    <Layout>
      <PageBanner 
        title="Blog" 
        subtitle="Latest news and cleaning tips"
        backgroundImage="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-screen">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-1">
                <div className="bg-white/95 rounded-full px-8 py-3 shadow-xl">
                  <span className="text-sm font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Latest Updates</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">Our Latest <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Blog Posts</span></h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Expert cleaning tips, industry insights, and valuable advice to help you maintain a pristine, healthy living space.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, idx) => (
              <article key={post.id} className="group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/80 via-red-50/40 to-white/80 border-2 border-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Reddish overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5"></div>
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden border-b-2 border-white/40">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                    <div className="flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-3 py-1">
                      <User className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700 font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-3 py-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700 font-medium">{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-red-600 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Read More Button - Dynamic */}
                  <button 
                    onClick={() => handleReadMore(post.slug)}
                    className="relative inline-flex items-center gap-2 text-red-600 font-bold overflow-hidden group/btn cursor-pointer">
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
                    
                    {/* Content */}
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Read More</span>
                    <ArrowRight className="relative z-10 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
