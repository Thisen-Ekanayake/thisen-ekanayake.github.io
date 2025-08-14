// src/components/BlogSection.jsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Building Sinhala NLP Tools",
    excerpt: "Exploring challenges in low-resource language processing.",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "public/blog/micromouse.jpeg",
    url: "/blog/building-sinhala-nlp-tools" // Updated to use path instead of #
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
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    excerpt: "Core concepts for practical implementation.",
    date: "April 10, 2024",
    readTime: "10 min read",
    image: "/blog/ml.jpg",
    url: "/blog/machine-learning-fundamentals" // Updated to use path instead of #
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Personal <span className="text-primary">Blog</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thoughts on technology, machine learning, and systems design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Link
                  to={article.url}
                  className="text-primary font-medium hover:underline flex items-center gap-1"
                >
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};