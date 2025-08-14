import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BuildingSinhalaNLPTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">Building Sinhala NLP Tools</h1>
        <p className="text-sm text-muted-foreground mb-8">May 15, 2024 · 8 min read</p>

        <div className="prose dark:prose-invert">
          <p>
            Sinhala is a low-resource language, meaning NLP projects have unique challenges.
            Here’s my journey building tokenizers and models for Sinhala.
          </p>
          <p>
            You can expand this with more paragraphs or even render Markdown content using react-markdown.
          </p>
        </div>
      </main>
      <Footer />
    </div>
    
  );
}
