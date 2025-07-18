import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sinhala PDF OCR Tool with GUI",
    description: "Developed and open-sourced a multithreaded Sinhala OCR tool with GUI for batch PDF processing, packaged as a portable Windows app.",
    image: "/projects/ocr.jpeg",
    tags: ["Python", "Tesseract", "Poppler"],
    // *demoUrl: "#",
    githubUrl: "https://github.com/Thisen-Ekanayake/Sinhala-OCR-Tool.git",
  },
  {
    id: 2,
    title: " Logistic Regression on Iris Dataset",
    description:
      "Built and optimized a logistic regression model with GridSearchCV, evaluated performance, explained predictions, and saved the model using Joblib.",
    image: "/projects/iris.jpeg",
    tags: ["Python", "Scikit-Learn"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Thisen-Ekanayake/iris-logistic-regression.git",
  },
  {
    id: 3,
    title: "4-bit Nanoprocessor",
    description:
      "Co-designed and implemented a 4-bit VHDL processor with custom components, tested via assembly ROM and hardware simulations.",
    image: "/projects/nano.jpeg",
    tags: ["VHDL", "BASYS 3 FPGA"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Object Detection System",
    description:
      "Implemented real-time object detection using SSD MobileNet V3 with OpenCV DNN, supporting video/webcam input and COCO-based classification.",
    image: "/projects/object-detection.jpeg",
    tags: ["Python", "OpenCV"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Thisen-Ekanayake/Object-Tracking.git",
  },
  {
    id: 5,
    title: "Local LLM Chatbot",
    description:
      "Deployed a quantized Mistral 7B model locally with custom GPTQ support, enabling efficient prompt-based inference and chatbot experimentation.",
    image: "/projects/chatbot.jpeg",
    tags: ["Python", "PyTorch"],
    // demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Autonomous UAV-UGV Docking & Charging System",
    description:
      "Developing an ML-powered UAV system for autonomous UGV tracking, precision landing, and mid-mission charging using camera, LiDAR, and multi-sensor fusion.",
    image: "/projects/uav.jpeg",
    tags: ["Python", "Raspberry Pi"],
    // demoUrl: "#",
    githubUrl: "https://github.com/Thisen-Ekanayake/FlightWorks.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Thisen-Ekanayake"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
