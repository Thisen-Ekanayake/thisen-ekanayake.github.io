import { Briefcase, Code, User, Brain, CircuitBoard } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Driven by curiosity, grounded in code.
            </h3>

            <p className="text-muted-foreground">
              I’m exploring the edge where algorithms meet thought.
              My focus isn’t just building things that work - but things that make sense.
            </p>

            <p className="text-muted-foreground">
              Whether it's machine learning, language models, or system design, I value clarity, depth, and simplicity.
              This site is my space to create, reflect, and share what I learn - one idea at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1RdnZnZ9IQK6YDwMQiqhk4XZywtvLsPdk"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Training language models, working with low-resource data, and exploring intelligent systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering</h4>
                  <p className="text-muted-foreground">
                    Building APIs, systems, and logic-heavy applications with Python, Java, and C++.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CircuitBoard className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">IoT & Systems</h4>
                  <p className="text-muted-foreground">
                    Connecting hardware to code - from microcontrollers to Linux tools and low-level control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
