import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Eight things to consider before hiring professional house cleaning services in Mumbai",
    date: "April 02, 2020",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Do opt for residential cleaning services in Mumbai",
    date: "April 02, 2020",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Some essential features to look for when you are hiring home cleaning services Mumbai",
    date: "April 02, 2020",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=250&fit=crop",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageBanner title="Blog" subtitle="Latest news and cleaning tips" />

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Our Latest News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden card-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Banner */}
      <section className="py-8">
        <div className="container text-center">
          <div className="bg-secondary text-secondary-foreground rounded-full py-4 px-8 inline-block">
            <span className="font-semibold">🌿 Always use Eco-Friendly Services & Save our Nature</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
