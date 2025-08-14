// src/pages/Blog.jsx
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  // Same articles as in BlogSection.jsx plus more
  {
    id: 1,
    title: "Building Sinhala NLP Tools",
    excerpt: "Exploring challenges in low-resource language processing.",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "public/blog/micromouse.jpeg",
    url: "/blog/building-sinhala-nlp-tools"
  },
  {
    id: 2,
    title: "Embedded Systems Journey",
    excerpt: "From microcontrollers to autonomous robots.",
    date: "April 28, 2024",
    readTime: "6 min read",
    image: "/blog/embedded.jpg",
    url: "/blog/embedded-systems-journey" // Updated to use path instead of #
  },
  // ... add more articles here ...
];

export const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="relative z-10">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:underline mb-8"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Articles</h1>
            <p className="text-lg text-muted-foreground mb-12">
              All my thoughts on technology, machine learning, and systems design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                    <a
                      href={article.url}
                      className="text-primary font-medium hover:underline flex items-center gap-1"
                    >
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};